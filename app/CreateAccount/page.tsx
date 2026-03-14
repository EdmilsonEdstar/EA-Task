import TextField from "@/components/ui/TextField"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CreateAccount() {
    return (
        <div className="lg:h-[100vh] flex flex-col lg:flex-row justify-center items-center gap-10 p-6">
            <div className="mb-2 text-center lg:text-left">
                <Link href="/" className="hidden lg:inline-flex items-center gap-2 px-6 bg-gray-50 text-gray-400 font-bold py-2 rounded cursor-pointer hover:bg-gray-200 transition">
                    <ArrowLeft size={18} /> back
                </Link>
                <img src="/login.svg" className="hidden lg:block lg:w-100 pt-2" alt="Sign up illustration" />
            </div>

            <div className="w-full max-w-sm">
                <div className="flex justify-center items-center gap-6 mb-6">
                    <h1 className="text-4xl"><span className="text-amber-400">EA</span>Task</h1> 
                    <h1 className="text-2xl font-light text-gray-500">Sign Up</h1>     
                </div>

                <form action="" className="flex flex-col gap-4 p-10 bg-white rounded-lg shadow-lg">
                    
                    {/* Username Field */}
                    <TextField
                        label_htmlFor="username"
                        label_name="Username"
                        label_className="text-sm font-medium text-gray-700"
                        input_type="text"
                        input_className="border border-gray-300 rounded w-full px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500"
                    />

                    {/* Email Field - Novo para Create Account */}
                    <TextField
                        label_htmlFor="email"
                        label_name="Email Address"
                        label_className="text-sm font-medium text-gray-700"
                        input_type="email"
                        input_className="border border-gray-300 rounded w-full px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500"
                    />

                    {/* Password Field */}
                    <TextField
                        label_htmlFor="password"
                        label_name="Password"
                        label_className="text-sm font-medium text-gray-700"
                        input_type="password"
                        input_className="border border-gray-300 rounded w-full px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500"
                    />

                    <input 
                        type="submit" 
                        value="Create Account" 
                        className="bg-amber-500 text-white font-bold py-2 rounded mt-2 cursor-pointer hover:bg-amber-600 transition shadow-md" 
                    />

                    <div className="text-center pt-4 border-t border-gray-100 mt-2">
                        <p className="text-sm text-gray-600 mb-2">Already have an account?</p>
                        <Link href="/Login" className="block w-full text-center border border-amber-500 text-amber-500 py-2 rounded hover:bg-amber-50 transition cursor-pointer font-medium">
                            Log In
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}