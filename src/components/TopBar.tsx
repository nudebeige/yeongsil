import Link from "next/link";

export default function TopBar() {
  return (
    <header className="topbar">
      <div className="bar">
        <Link className="logo" href="/" aria-label="첫 화면">
          <small>전기 도와주는</small>
          <b>영실</b>
        </Link>
        <nav aria-label="주요 메뉴">
          <Link className="tb-hot" href="/#urgent">지금 위험해요</Link>
          <Link href="/#symptom">증상 찾기</Link>
          <Link href="/#p0">처음이에요</Link>
          <Link href="/#p1">우리 집 전기</Link>
          <Link href="/#p2">공구</Link>
          <Link href="/#p3">공사할 때</Link>
          <Link href="/#p4">분전반</Link>
          <Link href="/#p5">고장</Link>
        </nav>
      </div>
    </header>
  );
}
