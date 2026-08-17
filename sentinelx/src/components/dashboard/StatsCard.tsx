type StatsCardProps = {
  title: string;
  value: number;
  change: string;
  description: string;
  variant: "critical" | "high" | "medium" | "total";
};

function StatsCard({
  title,
  value,
  change,
  description,
  variant,
}: StatsCardProps) {
  const styles = {
    critical: {
      dot: "bg-red-500",
      value: "text-red-400",
      border: "border-red-500/20",
    },

    high: {
      dot: "bg-orange-500",
      value: "text-orange-400",
      border: "border-orange-500/20",
    },

    medium: {
      dot: "bg-yellow-500",
      value: "text-yellow-400",
      border: "border-yellow-500/20",
    },

    total: {
      dot: "bg-cyan-500",
      value: "text-cyan-400",
      border: "border-cyan-500/20",
    },
  };

  const style = styles[variant];

  return (
    <div
      className={`rounded-xl border ${style.border} bg-zinc-900/60 p-5 transition hover:bg-zinc-900`}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${style.dot}`} />

          <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            {title}
          </span>
        </div>

        <span className="text-xs text-zinc-600">
          24h
        </span>
      </div>

      {/* Value */}
      <div className="mt-4 flex items-end gap-3">
        <span className={`text-3xl font-bold ${style.value}`}>
          {value.toString().padStart(2, "0")}
        </span>

        <span className="mb-1 text-xs text-emerald-400">
          {change}
        </span>
      </div>

      {/* Description */}
      <p className="mt-2 text-xs text-zinc-500">
        {description}
      </p>
    </div>
  );
}

export default StatsCard;