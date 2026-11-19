"use client";
import Link from "next/link";
import { useState } from "react";

type Item = { id: string; t: string; k: string; part: string };

export default function Search({ items }: { items: Item[] }) {
  const [q, setQ] = useState("");
  const words = q.trim().split(/\s+/).filter(Boolean);
  const results = words.length
    ? items
        .map(r => {
          const hay = (r.t + r.k).replace(/\s+/g, "");
          let s = 0;
          for (const w of words) for (let n = w.length; n >= 2; n--) if (hay.includes(w.slice(0, n))) { s += n; break; }
          return { r, s };
        })
        .filter(x => x.s > 0)
        .sort((a, b) => b.s - a.s)
        .slice(0, 6)
        .map(x => x.r)
    : [];

  return (
    <>
      <form className="search" role="search" onSubmit={e => e.preventDefault()}>
        <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="8.5" cy="8.5" r="6.5" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M13.5 13.5 L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input
          id="q"
          type="search"
          aria-label="상황 검색"
          placeholder="상황을 그대로 적어 보세요 — 예: 차단기가 내려갔어요"
          autoComplete="off"
          value={q}
          onChange={e => setQ(e.target.value)}
        />
        <button type="submit">찾기</button>
      </form>
      <div className="results" aria-live="polite">
        {words.length > 0 && results.length === 0 && <p>비슷한 쪽을 못 찾았어요. 짧은 말로 다시 적어 보세요 — 예: 콘센트, 차단기, 냄새</p>}
        {results.map(r => (
          <Link key={r.id} href={`/${r.id}`}>
            <span>{r.t}</span>
            <span className="pg">{r.part}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
