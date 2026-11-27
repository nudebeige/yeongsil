import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import NoteScripts from "@/components/NoteScripts";
import { getPage, pages } from "@/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return pages.map(p => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const p = getPage(id);
  if (!p) return {};
  return { title: `${p.id} ${p.title}`, description: `제${p.part}부 ${p.partName} · ${p.title}` };
}

export default async function NotePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = getPage(id);
  if (!p) notFound();
  const i = pages.indexOf(p);
  const prev = pages[i - 1], next = pages[i + 1];
  return (
    <>
    <TopBar />
    <div className="np">
      <div className="wrap">
        <div className="eyebrow">
          <Link href={`/#p${p.part}`} style={{ fontWeight: 700 }}>← 제{p.part}부 {p.partName}</Link>
        </div>
        <div dangerouslySetInnerHTML={{ __html: p.html }} />
        <nav className="pager" aria-label="앞뒤 쪽">
          {prev ? <Link href={`/${prev.id}`}>← {prev.id} {prev.title}</Link> : <span />}
          {next ? <Link href={`/${next.id}`}>{next.id} {next.title} →</Link> : <span />}
        </nav>
      </div>
      <NoteScripts id={p.id} />
    </div>
    </>
  );
}
