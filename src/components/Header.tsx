"use client";

import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react/dist/ssr";

const NAV_LINKS = [
  { href: "#about", label: "소개" },
  { href: "#treatments", label: "진료안내" },
  { href: "#specialist", label: "전문의" },
  { href: "#location", label: "오시는길" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-background/90 backdrop-blur-md"
          : "border-transparent bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="flex min-h-11 items-center text-lg font-semibold tracking-[0.14em] text-ink cursor-pointer"
        >
          CLAR&Eacute;
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="주요 메뉴">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-ink cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#location"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-on-ink transition-opacity hover:opacity-85 sm:inline-flex cursor-pointer min-h-11 items-center"
          >
            상담 예약하기
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink cursor-pointer md:hidden"
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background px-5 pb-8 pt-4 md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="모바일 메뉴">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center border-b border-border/70 text-base font-medium text-foreground cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#location"
            onClick={() => setOpen(false)}
            className="mt-5 flex min-h-12 w-full items-center justify-center rounded-full bg-ink text-sm font-semibold text-on-ink cursor-pointer"
          >
            상담 예약하기
          </a>
        </div>
      )}
    </header>
  );
}
