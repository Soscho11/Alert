const threatData = [
  { time: "00:00", value: 4 },
  { time: "04:00", value: 8 },
  { time: "08:00", value: 14 },
  { time: "12:00", value: 11 },
  { time: "16:00", value: 22 },
  { time: "20:00", value: 17 },
  { time: "24:00", value: 26 },
];

function ThreatChart() {
  const maxValue = 30;

  const points = threatData
    .map((item, index) => {
      const x = (index / (threatData.length - 1)) * 100;
      const y = 100 - (item.value / maxValue) * 100;

      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">

        <div>
          <h3 className="text-sm font-semibold text-white">
            Threat Activity
          </h3>

          <p className="mt-1 text-xs text-zinc-500">
            Security events detected over the last 24 hours
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

          <span className="text-xs text-zinc-500">
            Live data
          </span>
        </div>

      </div>

      {/* Chart */}
      <div className="relative h-72 w-full">

        {/* Grid */}
        <div className="absolute inset-0 flex flex-col justify-between">
          <div className="border-t border-zinc-800" />
          <div className="border-t border-zinc-800" />
          <div className="border-t border-zinc-800" />
          <div className="border-t border-zinc-800" />
          <div className="border-t border-zinc-800" />
        </div>

        {/* SVG Chart */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full overflow-visible"
        >

          {/* Area */}
          <polygon
            points={`0,100 ${points} 100,100`}
            fill="currentColor"
            className="text-cyan-500/10"
          />

          {/* Line */}
          <polyline
            points={points}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            vectorEffect="non-scaling-stroke"
            className="text-cyan-400"
          />

          {/* Points */}
          {threatData.map((item, index) => {
            const x =
              (index / (threatData.length - 1)) * 100;

            const y =
              100 - (item.value / maxValue) * 100;

            return (
              <circle
                key={item.time}
                cx={x}
                cy={y}
                r="1.2"
                className="fill-cyan-400"
              />
            );
          })}

        </svg>

        {/* Y-axis labels */}
        <div className="absolute -left-7 inset-y-0 flex flex-col justify-between text-[10px] text-zinc-600">
          <span>30</span>
          <span>20</span>
          <span>15</span>
          <span>10</span>
          <span>0</span>
        </div>

        {/* X-axis labels */}
        <div className="absolute -bottom-5 left-0 right-0 flex justify-between text-[10px] text-zinc-600">
          {threatData.map((item) => (
            <span key={item.time}>
              {item.time}
            </span>
          ))}
        </div>

      </div>

    </div>
  );
}

export default ThreatChart;