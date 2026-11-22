"use client";
import { useEffect } from "react";

// 쪽 화면의 작은 동작: 그림 누르면 크게, 5-2쪽 '기사님께 보낼 문장 만들기'
export default function NoteScripts({ id }: { id: string }) {
  useEffect(() => {
    const boxes = Array.from(document.querySelectorAll<HTMLElement>(".np .svgbox"));
    const hints: HTMLElement[] = [];
    const off: (() => void)[] = [];
    for (const b of boxes) {
      // 키보드로도 쓸 수 있게 진짜 버튼으로 확대를 켜고 끔 (aria-pressed 로 상태 알림)
      const title = b.closest("section")?.querySelector(".sec-h")?.textContent?.trim() || "그림";
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "zoomhint";
      btn.setAttribute("aria-pressed", "false");
      btn.textContent = "그림 크게 보기";
      b.after(btn);
      hints.push(btn);
      const set = (on: boolean) => {
        b.classList.toggle("zoom", on);
        btn.setAttribute("aria-pressed", String(on));
        // 크게 볼 때만 옆으로 밀 수 있으니 그때만 키보드로 스크롤할 수 있는 영역으로 만듦
        if (on) { b.tabIndex = 0; b.setAttribute("role", "region"); b.setAttribute("aria-label", title + " (옆으로 밀어서 보기)"); }
        else { b.removeAttribute("tabindex"); b.removeAttribute("role"); b.removeAttribute("aria-label"); }
      };
      const onBtn = () => set(btn.getAttribute("aria-pressed") !== "true");
      const onBox = (e: Event) => { if (e.target === b || !(e.target as HTMLElement).closest("a,button")) set(!b.classList.contains("zoom")); };
      btn.addEventListener("click", onBtn);
      b.addEventListener("click", onBox);
      off.push(() => { btn.removeEventListener("click", onBtn); b.removeEventListener("click", onBox); set(false); });
    }
    off.push(sayCopy());
    if (id === "5-2") off.push(messageBuilder());
    return () => { hints.forEach(h => h.remove()); off.forEach(f => f()); };
  }, [id]);
  return null;
}

// 쪽마다 있는 '보낼 문장' 복사 (빈칸 표시는 그대로 글자로 복사됨)
function sayCopy() {
  const btns = Array.from(document.querySelectorAll<HTMLButtonElement>(".np .say-copy"));
  const handlers = btns.map(btn => {
    const fn = () => {
      const t = btn.closest(".say-box")?.querySelector(".say-t");
      if (!t) return;
      const text = (t.textContent || "").replace(/^“|”$/g, "").trim();
      const sel = () => {
        const r = document.createRange(); r.selectNodeContents(t);
        const g = getSelection(); g?.removeAllRanges(); g?.addRange(r);
        btn.textContent = "선택됨, 길게 눌러 복사";
      };
      try {
        navigator.clipboard.writeText(text).then(() => { btn.textContent = "복사됨"; setTimeout(() => { btn.textContent = "문장 복사"; }, 1800); }, sel);
      } catch { sel(); }
    };
    btn.addEventListener("click", fn);
    return () => btn.removeEventListener("click", fn);
  });
  return () => handlers.forEach(f => f());
}

function messageBuilder() {
  const $ = (i: string) => document.getElementById(i) as HTMLInputElement | null;
  const ids = ["f-when", "f-weather", "f-which", "f-name", "f-doing", "f-test", "f-dev", "f-smell"];
  const v = (i: string) => ($(i)?.value || "").trim();
  const build = () => {
    const msg = $("msg"), devWrap = $("f-dev-wrap");
    if (!msg) return;
    const name = v("f-name") || "(이름)";
    const test = v("f-test");
    if (devWrap) devWrap.hidden = test !== "device";
    let s = v("f-when") + ", " + v("f-weather") + "에 ";
    if (v("f-which") === "main") s += "누전차단기(큰 것)가 떨어졌어요. 작은 차단기를 하나씩 올려 보니 ‘" + name + "’ 차단기를 올릴 때 떨어져요. ";
    else s += "‘" + name + "’ 차단기(작은 것)가 떨어졌어요. ";
    if (v("f-doing")) s += "그때 " + v("f-doing").replace(/[.。]$/, "") + ". ";
    if (test === "all") s += "그 갈래 플러그를 다 뽑고 올려도 또 떨어져요. ";
    else if (test === "device") s += "플러그를 다 뽑으면 괜찮은데, " + (v("f-dev") || "어떤 기기") + "를 꽂으면 떨어져요. ";
    else s += "플러그를 다 뽑고 올려 보는 건 아직 못 해 봤어요. ";
    s += "탄 냄새나 그을음은 " + v("f-smell") + ". ";
    s += v("f-which") === "main" ? "누전인지 절연저항 측정으로 확인해 주실 수 있을까요?" : "원인 점검 부탁드려요.";
    msg.textContent = s;
  };
  const els = ids.map($).filter(Boolean) as HTMLElement[];
  els.forEach(el => { el.addEventListener("input", build); el.addEventListener("change", build); });
  build();
  const btn = document.getElementById("copy");
  const copy = () => {
    const msg = $("msg");
    if (!btn || !msg) return;
    const t = msg.textContent || "";
    const sel = () => {
      const r = document.createRange(); r.selectNodeContents(msg);
      const g = getSelection(); g?.removeAllRanges(); g?.addRange(r);
      btn.textContent = "선택됨, 길게 눌러 복사";
    };
    try {
      navigator.clipboard.writeText(t).then(() => { btn.textContent = "복사됨"; setTimeout(() => { btn.textContent = "문장 복사"; }, 1800); }, sel);
    } catch { sel(); }
  };
  btn?.addEventListener("click", copy);
  return () => {
    els.forEach(el => { el.removeEventListener("input", build); el.removeEventListener("change", build); });
    btn?.removeEventListener("click", copy);
  };
}
