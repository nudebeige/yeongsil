// content/ (쪽 데이터·그림·손으로 만든 쪽) → src/data/pages.json, src/data/home.json, src/app/note.css
// 실행: npm run content
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..");
const C = path.join(ROOT, "content");
const OUT = path.join(ROOT, "src", "data");
const r = f => fs.readFileSync(path.join(C, f), "utf8");
const sv = n => r("svg/" + n + ".svg");
const load = f => { const p = path.join(C, f); delete require.cache[require.resolve(p)]; return require(p); };
const g = load("gen.js");

// ── 쪽 데이터 모으기
const D0 = load("d0.js"), D1 = load("d1.js"), D2 = load("d2.js"), D3 = load("d3.js"), D4 = load("d4.js"), D5 = load("d5.js");
const EX = load("d_extra.js"); D1.push(...EX[1]); D3.push(...EX[3]); D5.push(...EX[5]);
const by = arr => Object.fromEntries(arr.map(p => [p.id, p]));
const P = { ...by(D0), ...by(D1), ...by(D2), ...by(D3), ...by(D4), ...by(D5) };
// 직접 그린 그림
Object.assign(P["1-5"], { svg2H: "오래된 집은 색이 다를 수 있어요", svg2: sv("g07b") });
Object.assign(P["2-1"], { svgH: "세 번 대 보면 확실해요", svg: sv("g12") });
Object.assign(P["2-2"], { svgH: "다이얼은 여기에", svg: sv("g13") });
Object.assign(P["2-3"], { svgH: "한 가닥만 물어야 해요", svg: sv("g14") });
Object.assign(P["3-2"], { svgH: "두 스위치는 이렇게 이어져요", svg: sv("g21") });
Object.assign(P["4-3"], { svgH: "한눈에 보는 세 가지 사고", svg: sv("g30") });
Object.assign(P["4-4"], { svgH: "멀쩡한 퓨즈와 끊어진 퓨즈", svg: sv("g31") });
Object.assign(P["5-8"], { svgH: "관리실이 우리 집을 바로 아는 이유", svg: sv("g41") });
Object.assign(P["5-9"], { svgH: "이 순서로, 세 가지만", svg: sv("g59") });
Object.assign(P["3-10"], { rawH: "좋은 견적서는 이렇게 생겼어요 (내역서형)", raw: r("quote.html"), svgH: "견적서 받으면 이것만", svg: sv("g310") });
P["3-10"].water = "같은 공사인데 견적이 두 배씩 차이 나는 건 견적 방식이 달라서인 경우가 많아요. '총 얼마'로 뭉친 견적(일식)보다, 자재와 인건비를 줄마다 나눈 견적(내역서형)이 비교하기도 따지기도 쉬워요.";
for (const f of ["patch.js", "patch2.js", "patch3.js", "patch4.js", "patch5.js", "patch6.js"]) load(f)(P);

// ── 글(article) 나누기
const splitArticles = html => (html.match(/<article[\s\S]*?<\/article>/g) || []);
const idOf = a => (a.match(/id="p([0-9]+-[0-9]+)"/) || [])[1];
const titleOf = a => { const m = a.match(/<h1>([\s\S]*?)<\/h1>/); return m ? m[1].replace(/<span>/, " ").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim() : ""; };

const parts = [];
// 0부, 2~4부
const genPart = (D, n, name, prev) => splitArticles(g(D, n, name, prev, null));
// 1부: 손으로 만든 1-1~1-3 + 데이터
const h11 = splitArticles(r("p1-1.body.html").replace('aria-label="노트 1-1쪽"', 'id="p1-1" aria-label="1-1쪽"'));
const h123 = splitArticles(r("p1-23.body.html"));
const part1 = [...h11, ...h123, ...genPart(D1, 1, "우리 집 전기", { id: "1-3", t1: "", t2: "" })]
  .map(a => a.replace("__IMG__", "/img/g03.webp").replace("__IMG04__", "/img/g04.webp").replace("__IMG05__", "/img/panel.webp"));
// 5부: 손으로 만든 5-1·5-2 + 데이터
const elb = r("elb-trip.src.html");
const part5 = [...splitArticles(elb).map(a => a.replace("__IMG__", "/img/panel.webp")), ...genPart(D5, 5, "고장", { id: "5-2", t1: "", t2: "" })];

const PARTS = [[0, "시작하며", genPart(D0, 0, "시작하며", null)], [1, "우리 집 전기", part1], [2, "공구와 재료", genPart(D2, 2, "공구와 재료", null)],
  [3, "공사할 때", genPart(D3, 3, "공사할 때", null)], [4, "분전반과 보호", genPart(D4, 4, "분전반과 보호", null)], [5, "고장", part5]];

const pages = [];
for (const [n, name, arts] of PARTS) for (const a of arts) {
  const id = idOf(a);
  if (!id) throw new Error("id 없는 글: " + a.slice(0, 80));
  let html = a.replace(/src="data:image\/[^"]+"/g, 'src=""')
    .replace(/href="#p([0-9]+-[0-9]+)"/g, 'href="/$1"');
  pages.push({ id, part: n, partName: name, title: titleOf(a), html });
}
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, "pages.json"), JSON.stringify(pages, null, 1));

// ── 첫 화면 데이터 (content/home.html 의 PARTS·CIRC·TAGS)
const home = r("home.html");
const grab = name => { const m = home.match(new RegExp("const " + name + "=(\\[[\\s\\S]*?\\]);\\n")); if (!m) throw new Error(name); return (0, eval)(m[1]); };
const H = { parts: grab("PARTS"), circles: grab("CIRC"), tags: grab("TAGS") };
const ids = new Set(pages.map(p => p.id));
for (const p of H.parts) for (const pg of p.pages) if (!ids.has(pg[0])) throw new Error("첫 화면에 있는데 쪽이 없음: " + pg[0]);
fs.writeFileSync(path.join(OUT, "home.json"), JSON.stringify(H, null, 1));

// ── 쪽 화면 CSS (.np 안으로 가둠)
let css = elb.slice(elb.indexOf("<style>") + 7, elb.indexOf("</style>"));
const extra = `
.svgbox svg{min-width:0}
.svgbox{cursor:zoom-in}
.svgbox.zoom{cursor:zoom-out}
.svgbox.zoom svg{min-width:600px}
.zoomhint{font-size:12px;color:var(--muted);margin:2px 0 0}
@media (min-width:640px){.zoomhint{display:none}}
@media (max-width:480px){.svgbox{margin-inline:-12px}}
.cases{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px}
.cases li{border-left:3px solid var(--amber);padding:2px 0 2px 12px;font-size:14.5px;display:flex;flex-direction:column}
.cases li b{font-size:15px}
.cases li span{color:var(--muted)}
.np a{color:inherit}
.pager{display:flex;justify-content:space-between;gap:12px;font-size:14px;font-weight:700;padding-block:4px 8px}
.pager a{text-decoration:none;color:var(--green)}
.pager a:last-child{text-align:right}
`;
css += extra;
const keyframes = (css.match(/@keyframes[^{]+\{[^{}]*\{[^}]*\}[^}]*\}/g) || []).join("\n");
css = css.replace(/@keyframes[^{]+\{[^{}]*\{[^}]*\}[^}]*\}/g, "");
css = css.replace(/:root:not\(\[data-theme="light"\]\)/g, "&")
  .replace(/:root\[data-theme="dark"\]/g, "&[data-theme=\"dark\"]")
  .replace(/:root/g, "&")
  .replace(/(^|[}\s])body\{/g, "$1&{")
  .replace(/\*\{box-sizing:border-box\}/, "&,& *{box-sizing:border-box}")
  .replace(/--font:"Noto Sans KR"/, "--font:var(--font-noto),\"Noto Sans KR\"");
const noteCss = "/* 자동 생성: scripts/build-content.cjs — 직접 고치지 말 것 */\n.np{min-height:100vh;\n" + css + "\n}\n" + keyframes + "\n";
fs.writeFileSync(path.join(ROOT, "src", "app", "note.css"), noteCss);

console.log("pages", pages.length, "· parts", PARTS.map(p => p[2].length).join(","));
