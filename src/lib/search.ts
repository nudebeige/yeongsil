// 첫 화면 검색: 일상어를 쪽 키워드로 바꾸고, 관련도가 낮으면 결과를 보여 주지 않는다.
// node 로 바로 돌려 볼 수 있게 순수 함수로 둔다 (scripts/check-search.mjs).

export type SearchItem = { id: string; t: string; k: string; part: string };

// 일상어 → 쪽에서 쓰는 말 (앞쪽이 먼저 바뀜)
export const SYNONYMS: [RegExp, string][] = [
  [/두꺼비\s*집(이|가|을|에)?/g, "분전반 차단기"],
  [/퓨즈\s*(가\s*)?(나가|나갔|나감|끊어|끊겼|내려)\S*/g, "차단기 내려감"],
  [/퓨즈/g, "차단기 퓨즈"],
  [/전기\s*(가\s*)?(나가|나갔|나감|끊겼|끊어)\S*/g, "정전"],
  [/불\s*(이\s*)?(다\s*)?(나갔|나가|꺼졌)\S*/g, "정전"],
  [/정전\S*/g, "정전"],
  [/찌릿\S*|짜릿\S*|저릿\S*|전기\s*(가\s*)?올라\S*|전기\s*먹\S*/g, "감전"],
  [/타는\s*냄새|탄\s*냄새|탄내|타는\s*내|타는\s*듯한/g, "탄냄새"],
  [/전기\s*세|전기\s*요금|전깃세|요금\s*폭탄|고지서/g, "전기요금"],
  [/와이\s*파이|wifi|wi-fi/gi, "와이파이"],
  [/인터넷\s*(이\s*)?(안|끊)\S*/g, "인터넷"],
  [/(누전\s*)?차단기\s*(가\s*)?(내려|떨어|나가|나갔)\S*/g, "차단기 내려감"],
  [/콘센트\s*(가\s*)?(안\s*돼|안\s*되|먹통)\S*/g, "콘센트 안됨"],
  [/물\s*(이\s*)?(새|샜|떨어)\S*|누수\S*|비\s*샘/g, "누수"],
  [/화재\s*경보\S*|경보기\S*|감지기\S*/g, "화재경보 감지기"],
  [/깜박\S*|깜빡\S*|껌뻑\S*/g, "깜빡"],
];

// 뜻이 거의 없는 말 (관련도 계산에서 뺌)
const FILLER = new Set(["갑자기", "많이", "너무", "자꾸", "계속", "좀", "왜", "어떻게", "해요", "돼요", "있어요", "없어요", "나와요", "나요", "했어요", "됐어요", "같아요", "요즘", "오늘", "우리", "집", "집에", "집에서", "그냥", "다", "또", "안", "뭐", "어디", "어디서"]);

export function normalize(q: string): string[] {
  let s = " " + q.trim() + " ";
  for (const [re, to] of SYNONYMS) s = s.replace(re, " " + to + " ");
  return s.split(/\s+/).filter(w => w.length >= 2 && !FILLER.has(w));
}

export function search(items: SearchItem[], q: string) {
  const words = normalize(q);
  if (!words.length) return { words, results: [] as SearchItem[], weak: q.trim().length > 0 };
  const total = words.reduce((a, w) => a + w.length, 0);
  const scored = items
    .map(r => {
      const hay = (r.t + " " + r.k).replace(/\s+/g, "");
      let s = 0;
      for (const w of words) for (let n = w.length; n >= 2; n--) if (hay.includes(w.slice(0, n))) { s += n; break; }
      return { r, s };
    })
    .filter(x => x.s > 0)
    .sort((a, b) => b.s - a.s);
  const top = scored[0]?.s || 0;
  // 기준: 맨 위 결과가 검색어의 40% 이상 맞고, 3글자 이상(검색어가 짧아 다 맞으면 2글자도) 맞아야 보여 줌. 그 아래는 맨 위의 60% 이상만.
  if (top / total < 0.4 || (top < 3 && top < total)) return { words, results: [] as SearchItem[], weak: true };
  const results = scored.filter(x => x.s >= top * 0.6).slice(0, 6).map(x => x.r);
  return { words, results, weak: false };
}
