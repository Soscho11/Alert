type AlertSeverity = "critical" | "high" | "medium";

type AlertItemProps = {
  severity: AlertSeverity;
  title: string;
  source: string;
  category: string;
  time: string;
};

function AlertItem({
  severity,
  title,
  source,
  category,
  time,
}: AlertItemProps) {
  const severityStyles = {
    critical: {
      badge: "bg-red-500/10 text-red-400 border-red-500/20",
      dot: "bg-red-500",
    },

    high: {
      badge: "bg-orange-500/10 text-orange-400 border-orange-500/20",
      dot: "bg-orange-500",
    },

    medium: {
      badge: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      dot: "bg-yellow-500",
    },
  };

  const style = severityStyles[severity];

  return (
    <div className="flex items-center gap-4 border-b border-zinc-800 px-5 py-4 last:border-b-0">

      {/* Severity */}
      <div className="flex w-24 shrink-0 items-center gap-2">
        <span
          className={`h-2 w-2 rounded-full ${style.dot}`}
        />

        <span
          className={`rounded-md border px-2 py-1 text-[10px] font-semibold uppercase tracking-wider ${style.badge}`}
        >
          {severity}
        </span>
      </div>

      {/* Main content */}
      <div className="min-w-0 flex-1">

        <p className="truncate text-sm font-medium text-white">
          {title}
        </p>

        <div className="mt-1 flex gap-3 text-xs text-zinc-500">
          <span>{source}</span>

          <span>•</span>

          <span>{category}</span>
        </div>

      </div>

      {/* Time */}
      <span className="shrink-0 text-xs text-zinc-600">
        {time}
      </span>

    </div>
  );
}

export default AlertItem;