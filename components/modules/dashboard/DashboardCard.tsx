import Link from "next/link";

type PropsDashboardCard = {
    icon: React.ReactNode
    qty: string
    desc: string
}

export default function DashboardCard(props:PropsDashboardCard) {
  return (
    <>
        <div className="w-[30%] bg-white shadow p-4 space-y-2 rounded-sm">
            <p className="bg-amber-400 inline-block p-2 rounded-sm text-amber-100  border border-2 border-white">{props.icon}</p>
            <h1 className="font-bold text-2xl">{props.qty}</h1>
            <p>{props.desc}</p>
        </div>
    </>
  );
}
