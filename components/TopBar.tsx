import { ChevronRight, Sun, Moon, CircleHelp, Bell } from "lucide-react";

export default function TopBar() {
  return (
    <header className="flex items-center justify-between gap-4 px-8 h-14 border-b border-slate-400/40 bg-white/25 backdrop-blur-2xl">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[15px] text-ink-soft">
        <a href="#" className="hover:text-ink">Teaching</a>
        <ChevronRight className="size-4" />
        <span className="text-xl font-semibold text-ink">Classrooms</span>
      </nav>
      <div className="flex items-center gap-5">
        <div className="glass-strong flex items-center rounded-full p-1">
          <span className="grid place-items-center size-8 rounded-full bg-white shadow text-slate-600"><Sun className="size-4" /></span>
          <span className="grid place-items-center size-8 text-ink-soft"><Moon className="size-4" /></span>
        </div>
        <CircleHelp className="size-6 text-ink-soft" />
        <span className="relative">
          <Bell className="size-6 text-ink-soft" />
          <span className="absolute -top-0.5 -right-0.5 size-2.5 rounded-full bg-red-500 ring-2 ring-white/70" />
        </span>
      </div>
    </header>
  );
}
