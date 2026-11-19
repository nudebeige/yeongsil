// node gen.js <data.js> -> prints article HTML for each page in data (module.exports = [pages])
const fs = require("fs"), path = require("path");
const S = __dirname;
const esc = s => String(s);
const WARN = `<svg viewBox="0 0 30 30" aria-hidden="true"><path d="M15 3 L28 26 H2 Z" fill="var(--coral)"/><rect x="13.6" y="11" width="2.8" height="8" rx="1.2" fill="#fff"/><circle cx="15" cy="22.2" r="1.6" fill="#fff"/></svg>`;
function img(key){ return fs.readFileSync(path.join(S, key + ".b64"), "utf8").trim(); }
function mime(key){ return fs.existsSync(path.join(S, key + ".png")) ? "image/png" : "image/webp"; }
function article(p, prev, next, partNo, partName){
  let h = `<article class="page" id="p${p.id}" aria-label="${p.id}쪽">
<div class="band"><span><b>제${partNo}부</b> · ${partName}</span><span class="pno">${p.id}</span></div>
<div class="inner">
<header class="title"><h1>${p.t1}<span>${p.t2}</span></h1><p>${p.sub}</p></header>\n`;
  if (p.img){
    h += `<section class="photo"><h2 class="sec-h">${p.imgH}</h2>${p.imgLead?`<p class="lead">${p.imgLead}</p>`:""}<div class="ph"><img src="/img/${p.img}.webp" alt="${p.alt}" loading="lazy">`;
    (p.rings||[]).forEach(r=>{ h += `<span class="ring" style="left:${r[0]}%;top:${r[1]}%;width:${r[2]}%;height:${r[3]}%"></span>`; });
    (p.pins||[]).forEach(b=>{ h += `<span class="pin" style="left:${b[0]}%;top:${b[1]}%${b[3]?";background:var(--green)":""}">${b[2]}</span>`; });
    (p.badges||[]).forEach(b=>{ h += `<span class="no ${b[3]||"on"}" style="left:${b[0]}%;top:${b[1]}%">${b[2]}</span>`; });
    h += `</div>`;
    if (p.legend) h += `<ul class="legend">${p.legend.map(l=>`<li><span class="k ${l[1]||"on"}">${l[0]}</span><span>${l[2]}</span></li>`).join("")}</ul>`;
    h += `<figcaption>${p.cap || "이해를 돕기 위한 그림이라 실제 모양과 다를 수 있어요."}</figcaption></section>\n`;
  }
  if (p.svg) h += `<section><h2 class="sec-h">${p.svgH}</h2>${p.svgLead?`<p class="lead">${p.svgLead}</p>`:""}<div class="svgbox">${p.svg}</div>${p.svgNote?`<p class="note">${p.svgNote}</p>`:""}</section>\n`;
  if (p.raw) h += `<section><h2 class="sec-h">${p.rawH}</h2>${p.raw}</section>\n`;
  if (p.svg2) h += `<section><h2 class="sec-h">${p.svg2H}</h2><div class="svgbox">${p.svg2}</div>${p.svg2Note?`<p class="note">${p.svg2Note}</p>`:""}</section>\n`;
  if (p.water) h += `<section><h2 class="sec-h">수도로 말하면</h2><p class="lead">${p.water}</p></section>\n`;
  if (p.cases) h += `<section><h2 class="sec-h">${p.casesH||"이럴 때 자주 생겨요"}</h2><ul class="cases">${p.cases.map(c=>`<li><b>${c[0]}</b>${c[1]?`<span>${c[1]}</span>`:""}</li>`).join("")}</ul></section>\n`;
  if (p.words) h += `<section><h2 class="sec-h">${p.wordsH||"꼭 알아 둘 것"}</h2><div class="words">${p.words.map(w=>`<div class="word"><b>${w[0]}</b><span>${w[1]}</span></div>`).join("")}</div></section>\n`;
  if (p.causes) h += `<section><h2 class="sec-h">${p.causesH}</h2><div class="causes">${p.causes.map(c=>`<div class="c"><svg viewBox="0 0 44 44" aria-hidden="true"><circle cx="22" cy="22" r="21" fill="var(--${c[0]}-soft)"/><text x="22" y="29" text-anchor="middle" font-size="20" font-weight="900" fill="var(--${c[0]==="water"?"water":c[0]==="coral"?"coral":c[0]==="amber"?"amber":"green"})">${c[1]}</text></svg><div><h3>${c[2]}</h3><p class="doing">${c[3]}</p>${c[4]?`<div class="like">💧 ${c[4]}</div>`:""}</div></div>`).join("")}</div></section>\n`;
  if (p.steps) h += `<section><h2 class="sec-h">${p.stepsH}</h2><ol class="order">${p.steps.map((s,i)=>`<li${s[2]?' class="stop"':""}><span class="num">${i+1}</span><div><h3>${s[0]}</h3><p>${s[1]}</p></div></li>`).join("")}</ol></section>\n`;
  if (p.tree) h += `<section><h2 class="sec-h">${p.tree.h}</h2><div class="tree"><div class="q">${p.tree.q}</div><div class="fork"><div class="br bad"><span class="yn y">${p.tree.y[0]}</span><strong>${p.tree.y[1]}</strong><span>${p.tree.y[2]}</span></div><div class="br"><span class="yn n">${p.tree.n[0]}</span><strong>${p.tree.n[1]}</strong><span>${p.tree.n[2]}</span></div></div></div></section>\n`;
  if (p.check) h += `<section><h2 class="sec-h">${p.checkH}</h2><ul class="legend" style="gap:8px">${p.check.map(c=>`<li><span class="k wait">☐</span><span>${c}</span></li>`).join("")}</ul></section>\n`;
  h += `<section><h2 class="sec-h">어디까지 내가 해도 될까요?</h2><div class="lights">
<div class="light"><span class="dot g"></span><span><b>직접 해도 돼요</b> · ${p.range[0]}</span></div>
<div class="light"><span class="dot y"></span><span><b>눈으로만 봐요</b> · ${p.range[1]}</span></div>
<div class="light"><span class="dot r"></span><span><b>전문가에게 맡겨요</b> · ${p.range[2]}</span></div></div></section>\n`;
  if (p.say) h += `<section><h2 class="sec-h">${p.sayH||"기사님께 이렇게 말해요"}</h2><div class="out"><small>보낼 문장</small>“${p.say}”</div></section>\n`;
  h += `<div class="warn" role="note">${WARN}<span>${p.warn}</span></div>\n`;
  h += `<div class="foot">${prev?`<a href="#p${prev.id}" style="color:inherit">← ${prev.id}</a>`:`<span>${p.id}</span>`}${next?`<a href="#p${next.id}" style="color:inherit">다음 쪽: ${next.t1.replace(/<[^>]+>/g,"")} ${next.t2.replace(/<[^>]+>/g,"")} →</a>`:`<span>${p.id}</span>`}</div>
</div><div class="bottom">${p.bottom}</div></article>\n`;
  return h;
}
module.exports = function(pages, partNo, partName, prevOutside, nextOutside){
  return pages.map((p,i)=>article(p, i?pages[i-1]:prevOutside, pages[i+1]||nextOutside, partNo, partName)).join("\n");
};
module.exports.head = function(title){
  const src = fs.readFileSync(path.join(S,"elb-trip.src.html"),"utf8");
  return src.slice(0, src.indexOf("</style>")+8).replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
};
module.exports.eyebrow = function(label){
  return `<div class="eyebrow"><a href="https://claude.ai/artifact/5aD4E7xLvuGmugNfukNMEe" target="_blank" rel="noopener" style="color:inherit;font-weight:700">← 전기 도와주는 영실 첫 화면</a> · ${label}</div>`;
};
