import pagesJson from "@/data/pages.json";
import homeJson from "@/data/home.json";

export type NotePage = { id: string; part: number; partName: string; title: string; sub: string; hands: boolean; html: string };
export type HomePart = { id: string; name: string; d: string; pages: [string, string, string][] };
export type HomeData = { parts: HomePart[]; circles: [string, string, string, string][]; tags: [string, string][] };

export const pages = pagesJson as NotePage[];
export const home = homeJson as HomeData;

export function getPage(id: string) {
  return pages.find(p => p.id === id);
}

// 검색에 쓰는 가벼운 목록 (본문 HTML 제외)
export const searchIndex = home.parts.flatMap(p => p.pages.map(([id, t, k]) => ({ id, t, k, part: p.name })));

// 위험할 때 먼저 볼 쪽 (첫 화면 위험 띠와 같은 쪽들). 제목·설명은 쪽 데이터에서 가져옴
export const URGENT_IDS = ["5-7", "5-9", "5-10", "5-8"];
