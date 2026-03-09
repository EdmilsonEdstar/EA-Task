import SideBarLeft from "@/components/layout/SideBarLeft";
import SideBarRight from "@/components/layout/SideBarRight";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
        <div className="flex flex-row">
           <SideBarLeft/> 
           <SideBarRight/> 
        </div>
    </>
  );
}
