import { GraduationCap, Users, FileText, Ellipsis, ArrowRight } from "lucide-react";

export type Classroom = {
  title: string; meta: string; students: number; materials: number; updated: string;
  tone: "blue" | "green" | "amber" | "cyan";
};

const tones = {
  blue: "bg-[#dbe5ee] text-[#2c5278]",
  green: "bg-[#e3e6e9] text-[#5f6a74]",
  amber: "bg-[#e8eaec] text-[#6b7580]",
  cyan: "bg-[#d3dfe9] text-[#587a96]",
};

export default function ClassroomCard(c: Classroom) {
  return (
    <article className="glass rounded-2xl p-4 transition hover:-translate-y-0.5 hover:shadow-xl">
      <div className="flex items-start gap-3">
        <span className={`grid place-items-center size-11 rounded-xl ${tones[c.tone]}`}>
          <GraduationCap className="size-5" />
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold leading-tight truncate">{c.title}</h3>
          <p className="text-[13px] text-ink-soft mt-0.5">{c.meta}</p>
        </div>
        <button aria-label="More" className="text-ink-soft"><Ellipsis className="size-5" /></button>
      </div>
      <div className="flex items-center gap-6 mt-3 text-sm text-ink-soft">
        <span className="flex items-center gap-1.5"><Users className="size-4" /><b className="text-ink">{c.students}</b> students</span>
        <span className="flex items-center gap-1.5"><FileText className="size-4" /><b className="text-ink">{c.materials}</b> materials</span>
      </div>
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-ink/10 text-[13px] text-ink-soft">
        <span>Updated {c.updated}</span>
        <a href="#" className="flex items-center gap-1 text-sm font-semibold text-[#2c5278]">
          Open classroom <ArrowRight className="size-4" />
        </a>
      </div>
    </article>
  );
}
