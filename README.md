# 전기 도와주는 영실

집 전기를 직접 보고 확인한 뒤, 기사님께 정확히 말할 수 있게 돕는 안내 사이트. 「코딩 도와주는 온달」의 자매 사이트.

## 구조

- `content/` — 쪽 내용의 원본. 여기만 고친다.
  - `d0.js`~`d5.js`, `d_extra.js` — 부별 쪽 데이터
  - `patch*.js` — 법 원문 확인·초보자 점검·상황 보강으로 덧입힌 내용
  - `p1-1.body.html`, `p1-23.body.html`, `elb-trip.src.html` — 손으로 만든 쪽(1-1~1-3, 5-1·5-2)
  - `svg/` — 직접 그린 그림, `quote.html` — 견적서 예시 양식
  - `gen.js` — 쪽 데이터 → HTML
  - `home.html` — 첫 화면의 증상 바로가기·해시태그·목록 데이터 원본
- `public/img/` — AI 실물 그림 (글자 없이 만들고, 한글 번호·이름표는 HTML로 얹음)
- `scripts/build-content.cjs` — `content/` → `src/data/pages.json`, `src/data/home.json`, `src/app/note.css` (자동 생성 파일은 직접 고치지 않음)
- `src/app/page.tsx` 첫 화면, `src/app/[id]/page.tsx` 쪽 화면(`/1-3`, `/5-9` …)

## 명령

```bash
npm run content   # content → 데이터 다시 만들기
npm run dev       # 로컬에서 보기 (http://localhost:3000)
npm run build     # content 변환 + 배포용 빌드
```

## 법·기준 확인 (2026-11-19)

전기공사업법 시행령 제5조(경미한 전기공사), 소방시설법 제12조, 전기안전관리법 제12조, 전기사업법 시행규칙 제18조(표준전압),
전기설비기술기준(기후에너지환경부 고시 제2025-18호), 한국전기설비규정(기후에너지환경부공고 제2025-227호) 121.2·211.2.4·211.6.1·232.3.9·234.5·234.6·241.17·522.2.
