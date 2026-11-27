import Link from "next/link";
import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import { home, pages, URGENT_IDS } from "@/lib/data";

export const metadata: Metadata = {
  title: "전체 보기",
  description: "전기 도와주는 영실의 모든 쪽을 부별로 한눈에 보기",
};

// 모든 목록은 쪽 데이터(pages.json)와 첫 화면 부 정보(home.json)에서 자동으로 만든다
export default function AllPages() {
  const byId = new Map(pages.map(p => [p.id, p]));
  const urgent = URGENT_IDS.map(id => byId.get(id)).filter(p => p !== undefined);
  return (
    <div className="hp">
      <TopBar />
      <main className="gut">
        <div className="wrap allmap">
          <h1>전체 보기</h1>
          <p className="sub">영실의 {pages.length}쪽을 부별로 모두 펼쳤어요. <span className="tag-h">직접 조작</span> 표시는 손으로 작업하는 쪽이에요. 시작하기 전에 그 쪽 맨 위 상자를 먼저 봐요.</p>

          <section className="am-urgent" aria-labelledby="am-urgent-h">
            <h2 id="am-urgent-h">위험할 때 먼저</h2>
            <ul>
              {urgent.map(p => (
                <li key={p.id}>
                  <Link href={`/${p.id}`}>
                    <span className="no">{p.id}</span>
                    <span className="tx"><b>{p.title}</b>{p.sub && <small>{p.sub}</small>}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="am-119">불꽃·연기·감전이면 읽기 전에 먼저 119.</p>
          </section>

          {home.parts.map((part, i) => (
            <section className="am-part" key={part.id} aria-labelledby={`am-${part.id}`}>
              <h2 id={`am-${part.id}`}><span className="am-pn">{i}부</span> {part.name}</h2>
              <p className="d">{part.d}</p>
              <ul>
                {part.pages.map(([id]) => {
                  const p = byId.get(id);
                  if (!p) return null;
                  const danger = URGENT_IDS.includes(id);
                  return (
                    <li key={id}>
                      <Link href={`/${id}`} className={danger ? "danger" : undefined}>
                        <span className="no">{id}</span>
                        <span className="tx">
                          <b>{p.title}</b>
                          {p.sub && <small>{p.sub}</small>}
                        </span>
                        {p.hands && <span className="tag-h">직접 조작</span>}
                        {danger && <span className="tag-d">위험</span>}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </main>
      <footer className="gut">
        <div className="wrap">
          <b>전기 도와주는 영실</b>은 참고용 안내예요. 배선을 늘리거나 분전반을 고치는 일은 면허 있는 전기공사업체에 맡겨 주세요. 불꽃·연기가 보이면 119.
        </div>
      </footer>
    </div>
  );
}
