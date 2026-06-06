'use client'

export default function Navbar(){

        return(
            <header className="fixed bg-zinc-900 w-full h-18 z-10 ">

                    <div className=" flex items-center justify-between p-3 ">
                        <div className="text-2xl text-zinc-300 font-bold ml-5 mr-5">
                                Craft UI
                        </div>


                        <div className="text-zinc-300  font-semibold ml-35">
                                A component library built for  upcoming developers
                        </div>


                        <div className=" flex items-center gap-5 mr-3">
                        <input 
                     type="text"
                     placeholder="Search"  
                     
                     className="border-[0.5px] border-white rounded-lg p-1 w-30 text-sm"
                        
                        />
                    <div className="p-2 rounded-2xl text-sm text-white hover:text-black hover:bg-white ease-in-out cursor-pointer ">
                        Log in
                    </div>
                    
                    <div className=" p-2 rounded-2xl text-sm text-white hover:text-black hover:bg-white ease-in-out cursor-pointer">
                        GitHub
                    </div>

                        </div>
                    </div>
            </header>
        )
}
