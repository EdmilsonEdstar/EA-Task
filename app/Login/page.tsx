export default function Login(){
    return(
        <div className="h-[100vh] flex flex-col justify-center items-center">
            <div className="flex justify-center items-center gap-6">
                <h1 className="text-4xl"><span className="text-amber-400">EA</span>Task</h1> <h1 className="text-2xl">Log In</h1>     
            </div>

            <form action="" className="flex flex-col gap-4 max-w-sm mx-auto p-6 bg-white rounded-lg shadow">
  
                <div className="flex flex-col gap-1">
                    <label htmlFor="username" className="text-sm font-medium text-gray-700">Username</label>
                    <input id="username" type="text" className="border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500" />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                    <input id="password" type="password" className="border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500" />
                </div>

                <input type="submit" value="Log In" className="bg-amber-500 text-white font-bold py-2 rounded cursor-pointer hover:bg-amber-600 transition" />

                <div className="text-center pt-2">
                    <p className="text-sm text-gray-600 mb-2">Do you need an account?</p>
                    <input type="button" value="Create New Account" className="w-full border border-amber-500 text-amber-500 py-2 rounded hover:bg-amber-50 transition cursor-pointer" />
                </div>

            </form>
        </div>
    )
}