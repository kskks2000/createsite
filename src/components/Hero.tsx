import HeroVideo from "./HeroVideo";

const STATS = [
  { value: "15,000+", label: "누적 시술 케이스" },
  { value: "12년+", label: "전문의 임상 경력" },
  { value: "98%", label: "재방문 만족도" },
  { value: "3개", label: "정식 인증 학회" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[88vh] items-end overflow-hidden bg-ink sm:min-h-[92vh]"
    >
      <HeroVideo />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/92 via-ink/55 to-ink/20"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col px-5 pb-16 pt-24 sm:px-8 sm:pb-20 lg:pb-24">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
          Premium Dermatology Clinic
        </p>

        <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.25] tracking-tight text-white sm:text-5xl sm:leading-[1.2] lg:text-6xl">
          피부가 편안해지는 순간,
          <br />
          삶의 결이 달라집니다.
        </h1>

        <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
          CLAR&Eacute;는 정확한 진단과 섬세한 시술을 원칙으로 삼는 프리미엄
          피부과입니다. 과잉진료 없이, 오직 당신의 피부에 필요한 만큼만
          제안합니다.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#location"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-ink transition-opacity hover:opacity-85 cursor-pointer"
          >
            상담 예약하기
          </a>
          <a
            href="#treatments"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 px-8 text-sm font-semibold text-white transition-colors hover:bg-white/10 cursor-pointer"
          >
            진료안내 보기
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/20 pt-10 sm:grid-cols-4 lg:mt-20">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-semibold tabular-nums text-white sm:text-3xl">
                {stat.value}
              </dd>
              <dd className="mt-1.5 text-sm text-white/60">{stat.label}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-xs text-white/40">
          * 2023.01–2024.12 CLAR&Eacute; 내부 진료 기록 기준 (예시 수치 ·
          실제 통계로 교체 필요)
        </p>
      </div>
    </section>
  );
}
