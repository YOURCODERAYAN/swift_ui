'use client'


import {useEffect , useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useGSAP} from '@gsap/react'

import Cardmain from '@/sections/CardsGsap/Cardmain'


gsap.registerPlugin(ScrollTrigger);

export default function AnimateCards(){

    const container = useRef(null); // refers to the container
    const cardRef = useRef([]);// it refers to the individual cards itself so we declare an empty array

useGSAP(()=>{

    const cards = cardRef.current;
    const mainSection = container.current?.querySelector('.main');
    const scroller = container.current?.closest('.bg-black') || window;

    if (!mainSection) return;

    const totalScrollHeight=window.innerHeight * 3;
    const position=[14 , 38 , 62 , 86];
    const rotation=[-15 , -7.5 , 7.5 , 15];




    ScrollTrigger.create({
        trigger:mainSection,
        scroller,
        start:'top top',
        end:() => `+=${totalScrollHeight}`,
        pin:true,
        pinSpacing:true,
    })

// spreading cards animation

cards.forEach((card , index)=>{

    gsap.to(card,{

        left:`${position[index]}%`,
        rotation:rotation[index],
        ease:'none',
        scrollTrigger:{
            trigger:mainSection,
            scroller,
            start:'top top',
            end:() => `+=${window.innerHeight}`,
            scrub:0.5,
            id:`spread-${index}`,


        },

    })
})




cards.forEach((card , index) => {


    const frontEl = card . querySelector(".flip-card-front");
    const backEl = card . querySelector(".flip-card-back");

    const staggerOffset = index * 0.05;
    const startOffset =  1 / 3 + staggerOffset ;
    const endOffset =  2 / 3 + staggerOffset ;



    ScrollTrigger.create({
              trigger:mainSection,
              scroller,
        start:'top top',
        end:() => `+=${totalScrollHeight}`,
        scrub:1 ,
        id:`rotate-flip-${index}`,

        onUpdate:(self) =>{

            const progress = self.progress;

            if(progress >= startOffset  && progress  <= endOffset){
                const animationProgress  = (progress - startOffset) / (1/3);
                const frontRotation  = -180 * animationProgress;
                const backRotation = 180 - 180 * animationProgress;
                const cardRotation = rotation[index] *(1-animationProgress);


                gsap.to(frontEl , {rotateY : frontRotation , ease :'power1.inOut'});
                gsap.to(backEl , {  rotateY : backRotation , ease : 'power1.inOut'});
                gsap.to(card,{
                    xPercent:-50,
                    yPercent:-50,
                    rotate:cardRotation,
                    ease:'power1.inOut'
                })
            }
        }
    })
})









} , {scope:container})
            return(
                <>
                <div className="container cards-animated" ref={container}>
                    <section className="hero">
                        <h1 className="font-serif font-semibold text-white text-3xl uppercase">Keep scrolling to see and <br/> reveal the cards</h1>
                    </section>
                    <section className="main" style={{ minHeight: '140vh' }}>
                    {[...Array(4)].map((_, index)=>(

                        <Cardmain 
                      key={index}
                      id={`card-${index+1}`}
                      fontSrc="/cardsbackimage-1.jpg"
                      fontAlt = "CardImage"
                      backText ="Your card details appear here" 
                      ref={(el)=> (cardRef.current[index] = el)}   
                        />


                    ))

                    }
                        
                    </section>
                    <section className="footer">

                        <h1 className="text-3xl text-white font-semibold font-serif  uppercase">Footer or Upcoming section</h1>
                    </section>
                    </div>
                   
                </>
            )
}





// This is the main section we have to use scrollTrigger 
// so we have structure this using three sections Hero another is main and the another is footer
// In the main section the floating animated card will be floated and animated 
// This is all we have to done and to do..



// This is the main section we have to use scrollTrigger 
// so we have structure this using three sections Hero another is main and the another is footer
// In the main section the floating animated card will be floated and animated 
// This is all we have to done and to do..import {useEffect , useRef} from 'react';
