import Link from "next/link";
import TopBar from "@/components/TopBar";
import Search from "@/components/Search";
import PartOpener from "@/components/PartOpener";
import { home, pages, searchIndex } from "@/lib/data";

export default function Home() {
  return (
    <div className="hp">
      <TopBar />
      <PartOpener />
      <main>
        <div className="hero gut">
          <div className="wrap">
            <span className="sticker">어려운 말 몰라도 돼요</span>
            <div className="eb">직접 보고, 확인하고, 기사님께 정확히 말하기</div>
            <h1>
              집 전기,
              <br />
              어디가 <em>이상해요?</em>
            </h1>
            <p>가장 비슷한 상황을 누르세요. 그대로 따라 하고, 기사님께 보낼 문장까지 만들어 드려요.</p>
            <Search items={searchIndex} />
          </div>
        </div>

        <div className="urgent gut" id="urgent">
          <div className="wrap">
            <b>지금 위험해요</b>
            <Link href="/5-7">탄 냄새·연기가 나요</Link>
            <Link href="/5-7">콘센트가 뜨거워요</Link>
            <Link href="/5-9">사람이 감전됐어요</Link>
            <Link href="/5-10">물이 샜어요</Link>
            <Link href="/5-8">화재경보가 울려요</Link>
            <span>불꽃·연기가 보이면 먼저 대피하고 119</span>
          </div>
        </div>

        <section className="blk gut" id="symptom">
          <div className="wrap">
            <h2>증상으로 찾기</h2>
            <p className="sub">지금 겪는 일과 가장 비슷한 것을 누르세요.</p>
            <div className="circles">
              {home.circles.map(([id, w, t, c]) => (
                <Link key={id + w} className={`circ ${c}`} href={`/${id}`}>
                  <span className="o">{w}</span>
                  <span className="t">{t}</span>
                </Link>
              ))}
            </div>
            <h2 style={{ marginTop: 28 }}>많이 찾는 말</h2>
            <div className="tags">
              {home.tags.map(([t, id]) => (
                <Link key={t} href={`/${id}`}>{t}</Link>
              ))}
            </div>
          </div>
        </section>

        <section className="blk gut">
          <div className="wrap">
            <h2>처음부터 차근차근</h2>
            <p className="sub">우리 집 전기가 어떻게 생겼는지부터 알면, 고장 났을 때 훨씬 덜 당황해요. 부를 누르면 쪽 목록이 펼쳐져요.</p>
            <div style={{ marginTop: 20 }}>
              {home.parts.map((p, i) => (
                <details className="part" id={p.id} key={p.id}>
                  <summary>
                    <span className="pn" aria-hidden="true">{i}</span>
                    <span className="ph">
                      <span className="h3">{i}부 · {p.name}</span>
                      <span className="d">{p.d}</span>
                    </span>
                    <span className="cnt">{p.pages.length}쪽</span>
                  </summary>
                  <div className="ph-body">
                    <div className="list">
                      {p.pages.map(([id, t]) => (
                        <Link key={id} href={`/${id}`}>
                          <span className="no">{id}</span>
                          <span>{t}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </details>
              ))}
            </div>
            <p className="all-link"><Link href="/all">{pages.length}쪽 전체 목록 한 번에 보기 →</Link></p>
          </div>
        </section>
      </main>
      <footer className="gut">
        <div className="wrap">
          <b>전기 도와주는 영실</b>은 집 전기를 직접 보고 확인한 뒤, 기사님께 정확히 말할 수 있도록 돕는 안내서예요. 이 안내는 참고용이며,
          배선을 늘리거나 분전반을 고치는 일은 면허 있는 전기공사업체에 맡겨 주세요. 불꽃·연기가 보이면 119.
        </div>
      </footer>
    </div>
  );
}
