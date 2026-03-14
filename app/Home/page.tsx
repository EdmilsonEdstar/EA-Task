import Dashboard from "@/components/layout/Dashboard";
import DashboardCard from "@/components/modules/dashboard/Card";
import DashboardChart from "@/components/modules/dashboard/DashboardChart";
import DashboardTable from "@/components/modules/dashboard/Table";

export default function Home() {
  return (
    <Dashboard>
      {/* Container for the entire dashboard content.
          Added 'pb-24' to ensure the content isn't hidden behind the mobile bottom navigation bar.
          Added 'space-y-6' for consistent vertical spacing.
      */}
      <div className="flex flex-col gap-6 pb-24 lg:pb-10">
        
        {/* Statistics Cards Section */}
        <div className="flex flex-row justify-between px-6 items-stretch gap-2">
            <DashboardCard qty="12" desc="Open Tasks" classN="font-bold text-amber-700 text-4xl animate-modal-pop delay-0" />
            <DashboardCard qty="8" desc="In Progress" classN="font-bold text-amber-700 text-4xl animate-modal-pop delay-75" />
            <DashboardCard qty="25" desc="Completed" classN="font-bold text-amber-700 text-4xl animate-modal-pop delay-150" />
        </div>

        {/* Analytics Chart Section */}
        <div className="px-6">
            <DashboardChart />
        </div>

        {/* Recent Tasks Table Section */}
        <div className="px-6">
            <DashboardTable />
        </div>

      </div>
    </Dashboard>
  );
}