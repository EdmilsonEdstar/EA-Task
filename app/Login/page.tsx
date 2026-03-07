import TextField from "@/components/ui/TextField"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Login(){
    return(
        <div className="lg:h-[100vh] flex flex-col lg:flex-row justify-center items-center gap-10">
            <div className="mb-2">
                <Link href="/" className="hidden lg:flex justify-start px-6 bg-gray-50 text-gray-400 font-bold py-2 rounded cursor-pointer hover:bg-gray-200 transition"><ArrowLeft/> back</Link>
                <img src="/login.svg" className="hidden lg:block lg:w-100 pt-2" alt=""/>
            </div>
            <div>
                <div className="flex justify-center items-center gap-6">
                    <h1 className="text-4xl"><span className="text-amber-400">EA</span>Task</h1> <h1 className="text-2xl">Log In</h1>     
                </div>

                <form action="" className="flex flex-col gap-4 max-w-sm mx-auto p-10 bg-white rounded-lg shadow">
    
                    <div className="flex flex-col gap-1">
                        <TextField
                             label_htmlFor="username"
                             label_name="Username"
                             label_className="text-sm font-medium text-gray-700"
                             input_type="text"
                             input_className="border border-gray-300 rounded w-auto px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <TextField
                             label_htmlFor="password"
                             label_name="Password"
                             label_className="text-sm font-medium text-gray-700"
                             input_type="password"
                             input_className="border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500"
                        />
                        <p className=""><Link href="">Forget Password?</Link></p>
                    </div>

                    <input type="submit" value="Log In" className="bg-amber-500 text-white font-bold py-2 rounded cursor-pointer hover:bg-amber-600 transition" />

                    <div className="text-center pt-2">
                        <p className="text-sm text-gray-600 mb-2">Do you need an account?</p>
                        <input type="button" value="Create New Account" className="w-full border border-amber-500 text-amber-500 py-2 rounded hover:bg-amber-50 transition cursor-pointer" />
                    </div>
                </form>

            </div>
        </div>
    )
}