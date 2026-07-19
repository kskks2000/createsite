const NAV_LINKS = [
  { href: "#about", label: "소개" },
  { href: "#treatments", label: "진료안내" },
  { href: "#specialist", label: "전문의" },
  { href: "#location", label: "오시는길" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-on-ink/70">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-[0.14em] text-on-ink">
              CLAR&Eacute;
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              정확한 진단과 섬세한 시술로 당신만의 피부를 설계하는 프리미엄
              피부과.
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-2 gap-y-1 text-sm"
            aria-label="푸터 메뉴"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex min-h-11 items-center px-2 cursor-pointer transition-colors hover:text-on-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs leading-relaxed sm:flex-row sm:flex-wrap sm:gap-x-6">
          <span>상호명 CLAR&Eacute; 피부과의원</span>
          <span>대표자 김O은</span>
          <span>사업자등록번호 000-00-00000</span>
          <span>주소 서울특별시 강남구 도산대로 000, 3층</span>
          <span>대표전화 02-1234-5678</span>
        </div>

        <p className="mt-6 text-xs">
          {`© ${new Date().getFullYear()} CLARÉ Dermatology Clinic. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}
