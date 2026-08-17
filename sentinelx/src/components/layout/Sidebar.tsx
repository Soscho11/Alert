const menuItems = [
  "Dashboard",
  "Live Alerts",
  "Threats",
  "Incidents",
  "Activity",
  "Settings",
];

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-zinc-800 bg-zinc-950 p-5">
      
      <div className="mb-8">
        <h1 className="text-xl font-bold tracking-tight text-white">
          Sentinel<span className="text-cyan-400">X</span>
        </h1>

        <p className="mt-1 text-xs text-zinc-500">
          Security Operations Center
        </p>
      </div>

      <nav className="space-y-1">
        {menuItems.map((item) => (
          <button
            key={item}
            className="flex w-full items-center rounded-lg px-3 py-2.5 text-sm text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
          >
            {item}
          </button>
        ))}
      </nav>

      <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />

          <span className="text-xs text-zinc-400">
            System Operational
          </span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;