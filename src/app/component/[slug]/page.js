import Info from '@/utils/info';

import Buttons from '@/components/Buttons'
import  Backgrounds from '@/components/Backgrounds';
import Cards from '@/components/Cards'
import Menu from '@/components/Menu'
import Sidebar from '@/sections/sidebar'
import RightPanel from '@/sections/RightPanel'
import {TracingBeam} from '@/sections/tracing'



const componentSections ={

        1: {
    subsections: [
      { id: 'first-button', name: 'Magnetic Buttton' },
      { id: 'second-button', name: 'Glow Button' },
      { id: 'third-button', name: 'Comming Soon....' }
    ]
  },
  2: {
    subsections: [
      { id: 'aurora', name: 'Aurora Bg section' },
      { id: 'parallax', name: 'parallax bg section' },
      { id: 'gsap', name: 'Comming Soon....' }
    ]
  },
  3: {
    subsections: [
      { id: 'first-card', name: 'Spread Cards' },
      { id: 'second-card', name: 'Elastic Cards' },
      { id: 'third-card', name: 'Comming Soon....' }
    ]
  },
            

}

export default async function ComponentPage({params}){




    const {slug} = await params;

    const componentData = Info.find((item)=>item.text.toLowerCase().replace(/\s+/g, '-') === slug);
    const  subsections =  componentSections[componentData?. id] ?. subsections || [];



    return(
        

        <div className="flex">
            <Sidebar />

        <main className="flex p-8 w-full overflow-x-hidden min-h-screen relative ml-60 pl-12 pr-80 z-0">
          <TracingBeam className="w-full">
            <div className="w-full">
              <h1 className="text-3xl font-bold mb-4">{componentData?.text}</h1>
             
              {componentData?.id === 1 && <Buttons />}
              {componentData?.id === 2 && <Backgrounds />}
              {componentData?.id === 3 && <Cards />}
              {componentData?.id === 4 && <Menu />}
            </div>
          </TracingBeam>
        </main>

        {/* this is the right panel */}

      <RightPanel  subsections={subsections}/>






        </div>
       
    )


}
