import pagesJson from "@/data/pages.json";
import homeJson from "@/data/home.json";

export type NotePage = { id: string; part: number; partName: string; title: string; html: string };
export type HomePart = { id: string; name: string; d: string; pages: [string, string, string][] };
export type HomeData = { parts: HomePart[]; circles: [string, string, string, string][]; tags: [string, string][] };

export const pages = pagesJson as NotePage[];
export const home = homeJson as HomeData;

export function getPage(id: string) {
  return pages.find(p => p.id === id);
}

// 검색에 쓰는 가벼운 목록 (본문 HTML 제외)
export const searchIndex = home.parts.flatMap(p => p.pages.map(([id, t, k]) => ({ id, t, k, part: p.name })));
