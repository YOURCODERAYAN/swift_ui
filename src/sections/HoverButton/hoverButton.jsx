'use client'
import {useRef, useEffect ,useState} from 'react'

export default function Button(){

    const buttonRef = useRef(null);
    const[shadow , setShadow] = useState("")

    // Using plain js for just ease and grable to understand;

        useEffect(()=>{

           const button = buttonRef.current;

           const handleMouseMove = (e) =>{
           
              
                const rect = button.getBoundingClientRect();

                const X = e.clientX - rect.left;
                const Y = e.clientY - rect.top;



            const centerX = rect.width/2;
            const centerY = rect.height/2;



            const offsetX  = X - centerX;
            const offsetY = Y - centerY;

            const shadowX = offsetX /5;
            const shadowY = offsetY /1.5;


            const insetX = offsetX / 22;
            const insetY = offsetY / 8;


            const newShadow = `
        
                inset ${-insetX}px ${-insetY}px 2px var(--dark-color), inset ${insetX}px ${insetY}px 2px var(--white-color), ${shadowX}px ${shadowY}px 14px -14px var(--white-color), ${shadowX*3}px ${shadowY*3}px 48px hsla(235, 32%, 4%, .6)
            
            `
            setShadow(newShadow);
            };

        const   handleMouseLeave = () => {

            setShadow(`
                
                    inset 0 -2px 2px var(--dark-color),inset 0 2px 2px var(--white-color),0 18px 14px -14px var(--white-color),-24px 40px 48px hsla(235 , 32% , 4% , .6)
                
                
                
                `)
        }


        button.addEventListener('mousemove' , handleMouseMove);
                
        button.addEventListener('mouseleave' , handleMouseLeave);

},[]);


  




        return(

            <div className="flex items-center justify-center rounded-2xl bg-gray-500" style={{width:'300px' , height:'26vh'}}>

                        <a  ref={buttonRef} href="#" className="button" style={{boxShadow: shadow}}>
                    Light Mode
                        </a>

            </div>

        )
}


// declare it inside a container div and inside a anchor tag with a icon in final version 
// jump to the css part to design and give the effects
