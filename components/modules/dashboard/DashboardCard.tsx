import Link from "next/link";

type PropsDashboardCard = {
    icon: React.ReactNode
    qty: string
    desc: string
}

export default function DashboardCard(props:PropsDashboardCard) {
  return (
    <>
        <div className="w-[32%] flex justify-between flex-wrap bg-white text-sm lg:text-base shadow p-4 space-y-2 rounded-sm">
            <div className="space-y-2">
                <p>{props.desc}</p>
                <h1 className="font-bold text-gray-700 text-4xl">{props.qty}</h1>   
            </div>
            <div>
                <p className="bg-amber-400 inline-block p-2 rounded-sm text-amber-100  border border-2 border-white">{props.icon}</p>
            </div>
        </div>
    </>
  );
}
