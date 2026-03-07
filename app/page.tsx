import Link from "next/link";

export default function Home() {
  return (
    <>
        <div className="h-[100vh] flex flex-col justify-center items-center text-center gap-2 px-2">
            <div className="mb-2">
              <img src="/home.svg" className="w-100" alt=""/>
            </div>
            <h1 className="text-6xl lg:text-8xl">Well come to <span className="text-amber-400">EA</span>Task</h1>  
            <p className="text-base lg:text-2xl mb-6 px-14">The simplest way to organize projects and hit your targets.</p>
            <Link href="/Login" className="px-6 bg-amber-500 text-white font-bold py-2 rounded cursor-pointer hover:bg-amber-600 transition"> {"LET'S START"}</Link>
        </div>
    </>
  );
}
