'use client';
import Info from '../utils/info';
import Link from 'next/link';       
import { usePathname } from 'next/navigation';



export default function Sidebar(){

    const pathname = usePathname();

    const getslug = (text)=> text.toLowerCase().replace(/\s+/g , '-');

        return(

            <nav className = "fixed h-full w-60 overflow-y-auto bg-zinc-900 mt-18 z-20 ">

                <div className="flex  flex-col ml-20 justify-center gap-3 mr-10">

                 <div className="text-dark mb-6 text-lg">Components</div>   
                {   

                    Info.map((items , key)=>{

                            const slug = getslug(items.text);
                            const isActive = pathname.includes(slug);

                            return(

                                <Link 

                                href={`/component/${slug}`}
                                className={`p-2 rounded-lg text-sm  hover:bg-zinc-700  cursor-pointer ${isActive ? 'bg-zinc-700' : 'bg-transparent'}`}
                                key={key}
                                >
                                    {items.text}
                                </Link>
                            )



                    })
                    

                }

                </div>



                <div
              style={{

                position: "absolute",
                right:0,
                top:0,
                bottom:0,
                width:'1px',
                background:'linear-gradient(180deg  , transparent 0% , rgba(255 , 255 , 255 ,   0.5) 50% , transparent 100%)',
                boxShadow:'8 0 20px rgba(255 , 255 , 255 , 0.5)'
                
              }}  
                
                
                
                />

            </nav>
        )
}
