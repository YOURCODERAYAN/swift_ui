'use client'

import Link from 'next/link'

export default function Home() {
  return (

        <div className="w-full">
    <div className=" h-screen w-full bg-zinc-800 flex items-center justify-center flex-col ">
      
      {/* Hero Content - Centered */}
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="heading-gradient">
          A Simple <br /> but Helpful UI library <br /> For Developers
        </div>



    {/*Buttons Element */}
        <div className="wrapper relative inline-block">
          <div  className="box"/>

          <div  className="relative z-10 bg-zinc-900 px- py-2 w-60 text-center text-white font-arial font-semibold rounded-2xl hover:bg-white hover:text-black transition ease-in-out cursor-pointer">
                Browse Components
          </div>

        </div>

        


      </div>

    </div>


    <div className="w-full h-screen bg-zinc-800 flex items-center justify-center">
        <div className="text-3xl text-white">
          More content here...
        </div>
      </div>

    </div>
  );
}
