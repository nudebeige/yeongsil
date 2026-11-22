"use client";
import Link from "next/link";
import { useState } from "react";
import { search, type SearchItem } from "@/lib/search";

const EXAMPLES = ["차단기가 내려갔어요", "콘센트에서 탄 냄새", "전기요금이 갑자기 많이 나와요", "콘센트 하나만 안 돼요", "인터넷이 안 돼요"];

export default function Search({ items }: { items: SearchItem[] }) {
  const [q, setQ] = useState("");
  const { results, weak } = search(items, q);
  const asked = q.trim().length > 0;

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
      <div className="ex" aria-label="이렇게 물어보세요">
        {EXAMPLES.map(t => (
          <button key={t} type="button" onClick={() => setQ(t)} aria-pressed={q === t}>{t}</button>
        ))}
      </div>
      <div className="results" aria-live="polite">
        {asked && weak && (
          <div className="none">
            <p><b>딱 맞는 안내가 없어요.</b> 짧은 말로 다시 적거나(예: 콘센트, 차단기, 냄새) 아래에서 골라 보세요.</p>
            <div className="none-go">
              <a href="#symptom">증상 목록에서 고르기</a>
              <a href="#urgent">지금 위험한 상황 보기</a>
              <Link href="/5-2">기사님께 보낼 문장 만들기</Link>
            </div>
            <p className="none-119">불꽃·연기·감전이면 검색하지 말고 바로 119.</p>
          </div>
        )}
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
