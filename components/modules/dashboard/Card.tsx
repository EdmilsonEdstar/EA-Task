import Link from "next/link";

type PropsDashboardCard = {
    qty: string
    desc: string
    classN: string
}

export default function DashboardCard(props:PropsDashboardCard) {
  return (
    <>
        <div className="w-[100%] lg:w-[32%] flex justify-between flex-wrap bg-white text-sm lg:text-base shadow p-4 space-y-2 rounded-sm fadeInUp">
            <div className="space-y-2">
                <h1 className={props.classN}>{props.qty}</h1>   
                <p>{props.desc}</p>
            </div> 
        </div>
    </>
  );
}
