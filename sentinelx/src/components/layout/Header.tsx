function Header() {
  return (
    <header className="fixed left-64 right-0 top-0 z-10 h-16 border-b border-zinc-800 bg-zinc-950/90 px-6 backdrop-blur">
      <div className="flex h-full items-center justify-between">

        {/* Search */}
        <div className="w-80">
          <input
            type="text"
            placeholder="Search events, IPs, users..."
            className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-zinc-700"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <button className="relative rounded-lg p-2 text-zinc-400 hover:bg-zinc-900 hover:text-white">
            Notifications

            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
          </button>

          {/* User */}
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-xs font-semibold">
            S
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;