import { LayoutDashboard, School, FolderOpen, BarChart3, NotebookTabs, GraduationCap } from "lucide-react";

const groups = [
  { label: "Overview", items: [{ name: "Dashboard", icon: LayoutDashboard }] },
  {
    label: "Teaching",
    items: [
      { name: "Classrooms", icon: School, active: true },
      { name: "Materials", icon: FolderOpen },
      { name: "Student Activity", icon: BarChart3 },
    ],
  },
  { label: "Workspace", items: [{ name: "My Workspace", icon: NotebookTabs }] },
];

export default function Sidebar() {
  return (
    <aside className="w-[268px] shrink-0 h-screen sticky top-0 border-r border-slate-400/40 bg-white/30 backdrop-blur-2xl px-3 py-4">
      <div className="flex items-center gap-2 px-2 mb-6">
        <GraduationCap className="size-8 text-[#2c5278]" />
        <span className="text-xl font-extrabold tracking-tight">StudyNest</span>
        <span className="whitespace-nowrap text-[11px] font-medium text-[#2c5278] bg-brand/10 rounded-md px-1.5 py-0.5">
          Instructor Portal
        </span>
      </div>
      {groups.map((g) => (
        <div key={g.label} className="mb-4">
          <p className="px-3 mb-2 text-[11px] uppercase tracking-wider text-ink-soft">{g.label}</p>
          {g.items.map(({ name, icon: Icon, active }) => (
            <a
              key={name}
              href="#"
              className={`flex items-center gap-3 rounded-xl px-3 py-2 text-[15px] font-medium transition ${
                active ? "glass-strong text-[#2c5278] font-semibold" : "hover:bg-white/40"
              }`}
            >
              <Icon className="size-5" />
              {name}
            </a>
          ))}
        </div>
      ))}
    </aside>
  );
}
