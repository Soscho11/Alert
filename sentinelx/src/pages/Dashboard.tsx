import StatsCard from "../components/dashboard/StatsCard";
import ThreatChart from "../components/dashboard/ThreatChart";
import LiveAlerts from "../components/alerts/LiveAlerts";

function Dashboard() {
  return (
    <div>
      {/* =========================
          PAGE HEADER
      ========================== */}
      <div className="mb-6">
        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-semibold text-white">
              Security Overview
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              Monitor your security environment in real time.
            </p>
          </div>

          {/* Live Status */}
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

            <span className="text-xs font-medium text-emerald-400">
              LIVE
            </span>
          </div>

        </div>
      </div>


      {/* =========================
          KPI STATISTICS
      ========================== */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <StatsCard
          title="Critical"
          value={4}
          change="+12.5%"
          description="Critical threats detected"
          variant="critical"
        />

        <StatsCard
          title="High"
          value={12}
          change="+8.2%"
          description="High priority threats"
          variant="high"
        />

        <StatsCard
          title="Medium"
          value={27}
          change="-3.1%"
          description="Medium priority threats"
          variant="medium"
        />

        <StatsCard
          title="Total"
          value={43}
          change="+14.8%"
          description="Total security events"
          variant="total"
        />

      </div>


      {/* =========================
          THREAT ACTIVITY
      ========================== */}
      <div className="mt-6">
        <ThreatChart />
      </div>


      {/* =========================
          LIVE SECURITY ALERTS
      ========================== */}
      <div className="mt-6">
        <LiveAlerts />
      </div>

    </div>
  );
}

export default Dashboard;