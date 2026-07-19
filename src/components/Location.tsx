import { Clock, MapPin, MapTrifold, Phone } from "@phosphor-icons/react/dist/ssr";
import Reveal from "./Reveal";

const HOURS = [
  { day: "평일", time: "10:00 – 19:00" },
  { day: "토요일", time: "10:00 – 15:00" },
  { day: "일요일 · 공휴일", time: "휴진" },
];

export default function Location() {
  return (
    <section id="location" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <p className="eyebrow">Location</p>
          <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            오시는 길
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div
              aria-hidden
              className="flex h-72 w-full flex-col items-center justify-center gap-3 rounded-[var(--radius-card)] border border-border-strong/60 bg-[linear-gradient(160deg,#f2f0ed,#e6e2db)] lg:h-full"
            >
              <MapTrifold size={34} weight="thin" className="text-ink/35" />
              <span className="inline-flex items-center rounded-full border border-border-strong/60 bg-background/70 px-3 py-1 text-[0.7rem] font-medium tracking-wide text-muted-foreground backdrop-blur-sm">
                지도 자리 · 카카오맵/네이버맵 연동 예정
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col justify-between gap-8 rounded-[var(--radius-card)] border border-border bg-surface p-8">
              <div className="space-y-6">
                <div className="flex gap-3.5">
                  <MapPin
                    size={20}
                    weight="light"
                    className="mt-0.5 shrink-0 text-ink"
                    aria-hidden
                  />
                  <div>
                    <p className="text-sm font-semibold text-ink">주소</p>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/75">
                      서울특별시 강남구 도산대로 000, CLAR&Eacute; 빌딩 3층
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <Phone
                    size={20}
                    weight="light"
                    className="mt-0.5 shrink-0 text-ink"
                    aria-hidden
                  />
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      예약 &amp; 문의
                    </p>
                    <a
                      href="tel:0212345678"
                      className="mt-1 block text-sm text-foreground/75 hover:text-ink cursor-pointer"
                    >
                      02-1234-5678
                    </a>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <Clock
                    size={20}
                    weight="light"
                    className="mt-0.5 shrink-0 text-ink"
                    aria-hidden
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-ink">진료 시간</p>
                    <dl className="mt-1 space-y-1">
                      {HOURS.map((h) => (
                        <div
                          key={h.day}
                          className="flex justify-between gap-4 text-sm text-foreground/75"
                        >
                          <dt>{h.day}</dt>
                          <dd className="tabular-nums">{h.time}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>

              <a
                href="tel:0212345678"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-8 text-sm font-semibold text-on-ink transition-opacity hover:opacity-85 cursor-pointer"
              >
                전화로 상담 예약하기
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
