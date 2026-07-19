import { ChatCircleDots, ShieldCheck, Sparkle, HeartStraight } from "@phosphor-icons/react/dist/ssr";
import Reveal from "./Reveal";

const PILLARS = [
  {
    icon: ChatCircleDots,
    title: "정직한 상담",
    body: "필요한 시술만 권합니다. 진단 전 상담에서 충분한 설명과 선택지를 드립니다.",
  },
  {
    icon: Sparkle,
    title: "맞춤 솔루션",
    body: "동일한 처방은 없습니다. 피부 타입과 생활 습관을 분석해 개인화된 계획을 설계합니다.",
  },
  {
    icon: ShieldCheck,
    title: "안전한 시술",
    body: "식약처 인증 장비와 검증된 프로토콜만 사용해 부작용 위험을 최소화합니다.",
  },
  {
    icon: HeartStraight,
    title: "세심한 사후관리",
    body: "시술 이후에도 경과를 확인하며, 필요한 순간 바로 연결되는 케어를 제공합니다.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <p className="eyebrow">About CLAR&Eacute;</p>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            정확한 진단, 섬세한 시술,
            <br />
            그리고 신뢰
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/75">
            CLAR&Eacute;는 &lsquo;덜어내는 진료&rsquo;를 지향합니다. 화려한
            마케팅보다 정확한 진단을, 많은 시술보다 필요한 만큼의 처방을
            우선합니다.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.06} className="h-full">
              <div className="flex h-full flex-col gap-4 bg-background p-7">
                <pillar.icon
                  size={26}
                  weight="light"
                  className="text-ink"
                  aria-hidden
                />
                <h3 className="text-base font-semibold text-ink">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
