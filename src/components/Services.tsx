import {
  Drop,
  Lightning,
  MagicWand,
  ScanSmiley,
  SunDim,
  Waves,
} from "@phosphor-icons/react/dist/ssr";
import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: Waves,
    title: "안티에이징 리프팅",
    body: "탄력 저하와 처짐을 개선하는 초음파·고주파 리프팅으로 자연스러운 윤곽을 되찾습니다.",
  },
  {
    icon: MagicWand,
    title: "보톡스 & 필러",
    body: "미세 주름과 볼륨 손실을 정밀하게 교정해 과하지 않은 자연스러움을 완성합니다.",
  },
  {
    icon: Lightning,
    title: "레이저 토닝",
    body: "색소·톤 불균형을 개선하는 파장별 맞춤 레이저로 균일하고 맑은 피부결을 만듭니다.",
  },
  {
    icon: Drop,
    title: "스킨부스터",
    body: "수분과 탄력의 근본 저하를 채우는 스킨부스터로 속부터 건강한 피부를 만듭니다.",
  },
  {
    icon: ScanSmiley,
    title: "색소 & 모공 케어",
    body: "기미, 잡티, 넓어진 모공까지 원인 진단 기반의 단계별 프로그램으로 관리합니다.",
  },
  {
    icon: SunDim,
    title: "맞춤 스킨케어 프로그램",
    body: "피부 타입 분석 결과를 바탕으로 홈케어 루틴까지 설계하는 장기 관리 플랜입니다.",
  },
];

export default function Services() {
  return (
    <section id="treatments" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Treatments</p>
              <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                피부 고민에 맞는
                <br />
                정밀 솔루션
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              모든 시술은 전문의 1:1 진단 이후 진행되며, 상담 단계에서
              기대효과와 회복 기간을 투명하게 안내합니다.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05}>
              <div className="group h-full rounded-[var(--radius-card)] border border-border bg-background p-7 transition-colors hover:border-border-strong hover:bg-surface">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-strong text-ink transition-colors group-hover:bg-ink group-hover:text-on-ink">
                  <service.icon size={22} weight="light" aria-hidden />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-[var(--radius-card)] border border-border bg-surface p-7 sm:flex-row sm:items-center">
            <p className="max-w-md text-sm leading-relaxed text-foreground/75">
              어떤 시술이 맞는지 확신이 없으신가요? 진단 없이 시술부터
              권하지 않습니다 — 먼저 전문의와 상태를 확인하세요.
            </p>
            <a
              href="#location"
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-ink px-7 text-sm font-semibold text-on-ink transition-opacity hover:opacity-85 cursor-pointer"
            >
              전문의 상담 신청
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
