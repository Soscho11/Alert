import AlertItem from "./AlertItem";

const alerts = [
  {
    severity: "critical" as const,
    title: "Brute Force Attack Detected",
    source: "192.168.1.24",
    category: "SSH",
    time: "3 sec ago",
  },

  {
    severity: "high" as const,
    title: "Suspicious Login Attempt",
    source: "10.24.18.91",
    category: "Authentication",
    time: "8 sec ago",
  },

  {
    severity: "medium" as const,
    title: "Unusual API Activity",
    source: "/api/auth",
    category: "API",
    time: "15 sec ago",
  },

  {
    severity: "high" as const,
    title: "Multiple Failed Login Attempts",
    source: "172.16.0.44",
    category: "Authentication",
    time: "24 sec ago",
  },
];

function LiveAlerts() {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">

        <div>
          <h3 className="text-sm font-semibold text-white">
            Live Security Alerts
          </h3>

          <p className="mt-1 text-xs text-zinc-500">
            Real-time security events
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

          <span className="text-xs font-medium text-emerald-400">
            LIVE
          </span>
        </div>

      </div>

      {/* Alerts */}
      <div>
        {alerts.map((alert, index) => (
          <AlertItem
            key={`${alert.source}-${index}`}
            severity={alert.severity}
            title={alert.title}
            source={alert.source}
            category={alert.category}
            time={alert.time}
          />
        ))}
      </div>

    </div>
  );
}

export default LiveAlerts;