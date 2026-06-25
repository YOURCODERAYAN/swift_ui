'use client'
import {LayoutTextFlip} from '@/sections/fliptext'
import { FaGithub } from "react-icons/fa";
export default function Navbar(){

        return(
            <header className="fixed bg-zinc-900 w-full h-18 z-90 ">

                    <div className=" flex items-center justify-between flex-row p-3 ">
                        <div className="  font-bold ml-5 mr-5  " style={{width:'20%'}}>
                             <LayoutTextFlip />
                        </div>


                        <div className="text-bold mr-55 flex items-center justify-center w-full text-2xl text-amber-700 font-serif">
                            UI library
                        </div>


                        <div className=" flex items-center gap-5 mr-3">
                      
                 
                        <a href="https://github.com/YOURCODERAYAN/swift_ui" target="_blank"
            rel="noopener noreferrer">
                    <div className=" p-2 flex items-center gap-2 rounded-2xl text-sm text-white hover:text-black hover:bg-white ease-in-out cursor-pointer">
                        
                     <FaGithub size={20} />   GitHub
                      

                    </div>
                    </a>

                        </div>
                    </div>
            </header>
        )
}
