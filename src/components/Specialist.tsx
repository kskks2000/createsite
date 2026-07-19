import { CheckCircle, UserFocus } from "@phosphor-icons/react/dist/ssr";
import Reveal from "./Reveal";

const CREDENTIALS = [
  "대한피부과학회 정회원",
  "대한레이저의학회 인증의",
  "대한피부과의사회 정회원",
  "○○대학교 의과대학 피부과학교실 출신",
];

export default function Specialist() {
  return (
    <section id="specialist" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <p className="eyebrow">Specialist</p>
          <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            피부를 이해하는 전문의
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 grid gap-10 rounded-[var(--radius-card)] border border-border bg-background p-8 sm:grid-cols-[minmax(0,14rem)_1fr] sm:p-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
            <div
              aria-hidden
              className="relative flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-[var(--radius-card)] border border-border-strong/60 bg-[radial-gradient(circle_at_30%_20%,rgba(24,21,15,0.14),transparent_60%),linear-gradient(160deg,#f2f0ed,#e6e2db)]"
            >
              <UserFocus size={34} weight="thin" className="text-ink/35" />
              <span className="inline-flex items-center rounded-full border border-border-strong/60 bg-background/70 px-3 py-1 text-[0.7rem] font-medium tracking-wide text-muted-foreground backdrop-blur-sm">
                프로필 사진 자리 · 실제 이미지로 교체 예정
              </span>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-ink">
                김O은 대표원장
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                피부과 전문의 · 임상 경력 12년
              </p>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/75">
                &ldquo;시술은 결과가 아니라 과정입니다. 피부가 회복되는
                자연스러운 속도를 지키는 처방을 지향합니다.&rdquo;
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {CREDENTIALS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-foreground/80"
                  >
                    <CheckCircle
                      size={18}
                      weight="fill"
                      className="mt-0.5 shrink-0 text-ink"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#location"
                className="mt-8 inline-flex min-h-12 w-fit items-center justify-center rounded-full bg-ink px-7 text-sm font-semibold text-on-ink transition-opacity hover:opacity-85 cursor-pointer"
              >
                원장님께 직접 상담 신청
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
