"use client";
import { useEffect } from "react";

// 첫 화면의 접힌 부(details#p0~p5): 주소가 /#p3 이거나 /#p3 링크를 누르면 그 부를 펼침
export default function PartOpener() {
  useEffect(() => {
    const open = (hash: string) => {
      const m = hash.match(/^#(p[0-9]+)$/);
      if (!m) return;
      const el = document.getElementById(m[1]);
      if (el instanceof HTMLDetailsElement) {
        el.open = true;
        requestAnimationFrame(() => el.scrollIntoView({ block: "start" }));
      }
    };
    open(location.hash);
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest?.("a");
      if (!a) return;
      const url = new URL(a.href, location.href);
      if (url.pathname === location.pathname) open(url.hash);
    };
    const onHash = () => open(location.hash);
    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", onHash);
    return () => { document.removeEventListener("click", onClick); window.removeEventListener("hashchange", onHash); };
  }, []);
  return null;
}
