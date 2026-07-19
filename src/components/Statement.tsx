import Reveal from "./Reveal";

export default function Statement() {
  return (
    <section className="border-t border-border bg-ink text-on-ink">
      <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 lg:py-36">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-on-ink/50">
            Our Promise
          </p>
          <h2 className="mt-8 text-[2.1rem] font-semibold leading-[1.3] tracking-tight sm:text-5xl sm:leading-[1.25] lg:text-6xl lg:leading-[1.2]">
            많이 권하는 병원이 아니라
            <br />
            정확히 필요한 만큼만
            <br />
            처방하는 병원.
          </h2>
          <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-on-ink/60">
            CLAR&Eacute;의 모든 시술은 진단에서 시작해 진단으로 끝납니다.
            마케팅이 아닌 의학적 근거가 처방의 유일한 기준입니다.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
