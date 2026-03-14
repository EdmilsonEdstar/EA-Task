import Dashboard from "@/components/layout/Dashboard";
import DashboardCard from "@/components/modules/dashboard/Card";
import DashboardChart from "@/components/modules/dashboard/DashboardChart";
import DashboardTable from "@/components/modules/dashboard/Table";

export default function Home() {

  return (
    <>

    <Dashboard>
        <div className="flex flex-row justify-between px-6 items-stretch gap-2">
            <DashboardCard qty="12" desc="Open Tasks" classN="font-bold text-amber-700 text-4xl animate-modal-pop delay-0" />
            <DashboardCard qty="8" desc="In Progress" classN="font-bold text-amber-700 text-4xl animate-modal-pop delay-75" />
            <DashboardCard qty="25" desc="Completed" classN="font-bold text-amber-700 text-4xl animate-modal-pop delay-150" />
        </div>

        {/* Chart */}
        <div className="px-6">
            <DashboardChart />
        </div>

        {/* Table */}
        <div className="justify-center px-6 mb-10">
            <DashboardTable />
        </div>
    </Dashboard>

    </>
  );
}
