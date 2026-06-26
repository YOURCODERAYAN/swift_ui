'use client'
import {useState , useEffect} from 'react'
import { ImWarning } from "react-icons/im";



  const BREAKPOINT = 1640

export default function MobileGate({children}){

        const[isAllowed , setIsAllowed] = useState(null);

        useEffect(()=>{
            const mediaQuery = window.matchMedia(`(min-width:  ${BREAKPOINT}px)`)


            console.log('window.innerWidth:', window.innerWidth)
        console.log('BREAKPOINT:', BREAKPOINT)
        console.log('query string:', mediaQuery.media)
        console.log('mediaQuery.matches:', mediaQuery.matches)

            setIsAllowed(mediaQuery.matches)


            function handleChange(e){

                        setIsAllowed(e.matches)

            }


                mediaQuery.addEventListener('change' , handleChange)
                        return () => mediaQuery.removeEventListener('change' , handleChange)

        } , [])


        if(isAllowed === null){
                return null
        }
        if(!isAllowed){

             return(

                <div className="fixed inset-0 flex  flex-col items-center justify-center bg-black text-white font-semibold text-xl  p-3 h-screen font-serif" style={{'zIndex': 9999}}>
                     <span className="mb-5">  <ImWarning size={40} /></span>      
                    <p className='text-sm'>"This experience requires a desktop,Please switch to desktop to continue"</p>
                </div>

            )
}
return children
}