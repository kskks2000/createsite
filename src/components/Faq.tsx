import { Plus } from "@phosphor-icons/react/dist/ssr";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "첫 방문 시 상담만 받아볼 수도 있나요?",
    a: "네, 가능합니다. 모든 시술은 전문의 상담과 피부 진단 이후 결정되며, 상담만으로 방문을 마치셔도 괜찮습니다.",
  },
  {
    q: "시술 후 회복 기간은 어느 정도인가요?",
    a: "시술 종류에 따라 다르며, 상담 단계에서 예상 회복 기간과 주의사항을 구체적으로 안내해 드립니다.",
  },
  {
    q: "주차 및 예약 변경은 어떻게 하나요?",
    a: "건물 내 방문객 주차가 가능하며, 예약 변경은 전화 또는 카카오톡 채널로 최소 하루 전에 연락 주시면 됩니다.",
  },
  {
    q: "비급여 시술 비용은 상담 시 안내받을 수 있나요?",
    a: "네, 진단 이후 예상 비용과 구성을 투명하게 안내해 드리며, 사전 동의 없이 진행되는 시술은 없습니다.",
  },
];

export default function Faq() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <p className="eyebrow text-center">FAQ</p>
          <h2 className="mt-5 text-center text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            자주 묻는 질문
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-border rounded-[var(--radius-card)] border border-border bg-background">
          {FAQS.map((item) => (
            <details key={item.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-ink marker:content-none">
                {item.q}
                <Plus
                  size={18}
                  className="shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-45"
                  aria-hidden
                />
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </details>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          더 궁금한 점이 있다면{" "}
          <a
            href="#location"
            className="font-semibold text-ink underline underline-offset-4 cursor-pointer"
          >
            상담에서 편하게 물어보세요
          </a>
          .
        </p>
      </div>
    </section>
  );
}
