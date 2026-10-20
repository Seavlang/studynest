import { Plus, Search, Check, ChevronDown } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import ClassroomCard, { type Classroom } from "@/components/ClassroomCard";

const classrooms: Classroom[] = [
  { title: "Biology 101 – Section A", meta: "Fall 2026 · Code BIO-7K2", students: 48, materials: 32, updated: "2h ago", tone: "blue" },
  { title: "Cell Biology Lab", meta: "Fall 2026 · Code BIO-2LB", students: 24, materials: 18, updated: "yesterday", tone: "green" },
  { title: "Genetics Seminar", meta: "Fall 2026 · Code GEN-5SM", students: 16, materials: 11, updated: "3 days ago", tone: "amber" },
  { title: "Biology 101 – Section B", meta: "Fall 2026 · Code BIO-8MN", students: 52, materials: 32, updated: "5h ago", tone: "blue" },
  { title: "Ecology Field Studies", meta: "Fall 2026 · Code ECO-4FD", students: 30, materials: 9, updated: "last week", tone: "green" },
  { title: "Microbiology Basics", meta: "Fall 2026 · Code MIC-6QR", students: 142, materials: 26, updated: "2 days ago", tone: "cyan" },
];

export default function Page() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 min-w-0">
        <TopBar />
        <main className="px-8 py-5">
          <div className="flex items-end justify-between border-b border-white/70 text-[16px]">
            <div className="flex gap-6">
              <button className="pb-2.5 -mb-px border-b-2 border-brand text-[#2c5278] font-medium">
                Active <span className="ml-1 rounded-full bg-white/70 px-2 py-0.5 text-xs">6</span>
              </button>
              <button className="pb-2.5 font-medium">
                Archived <span className="ml-1 rounded-full bg-white/70 px-2 py-0.5 text-xs">1</span>
              </button>
            </div>
            <button className="mb-2 flex items-center gap-2 rounded-full bg-brand px-4 h-9 text-sm font-semibold text-white shadow-md shadow-[#2c5278]/25 hover:brightness-110">
              <Plus className="size-4" /> New classroom
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <label className="glass-strong flex items-center gap-3 rounded-xl px-4 h-10 w-[320px] text-ink-soft">
              <Search className="size-[18px]" />
              <input placeholder="Search classrooms" className="bg-transparent outline-none flex-1 text-ink placeholder:text-ink" />
            </label>
            <button className="ml-auto flex items-center gap-2 rounded-full border border-brand/40 bg-white/40 px-4 h-10 text-[#2c5278] font-medium">
              <Check className="size-4" /> Term: Fall 2026 <ChevronDown className="size-4" />
            </button>
            <button className="glass-strong flex items-center gap-2 rounded-full px-4 h-10 font-medium">
              Sort: Recent <ChevronDown className="size-4" />
            </button>
            <div className="glass-strong flex rounded-xl p-1 font-medium">
              <button className="rounded-lg bg-white px-4 py-1.5 shadow">Grid</button>
              <button className="px-4 py-1.5">List</button>
            </div>
          </div>

          <section className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {classrooms.map((c) => <ClassroomCard key={c.title} {...c} />)}
          </section>
        </main>
      </div>
    </div>
  );
}
