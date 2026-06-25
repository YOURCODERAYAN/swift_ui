// First we have to send dependencies //
// Second is to send the Main two section Code //
// and the css part for that component //


export const Source =[
    {
        code:`
                            'use client'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Cardmain from '@/sections/CardsGsap/Cardmain'

gsap.registerPlugin(ScrollTrigger) 

export default function AnimateCards({ cards = [] }) {
    const container = useRef(null);
    const cardRef = useRef([]);

    useGSAP(() => {
        const cardsArray = cardRef.current;
        const totalScrollHeight = window.innerHeight * 3;
        const position = [14, 38, 62, 86];
        const rotation = [-15, -7.5, 7.5, 15];

        ScrollTrigger.create({
            trigger: container.current.querySelector('.main'),
            start: 'top top',
             end: () =>\`+=\${totalScrollHeight}\`,
            pin: true,
            pinSpacing: true,
        })

        // spreading cards animation
        cardsArray.forEach((card, index) => {
            gsap.to(card, {
                left: \`\${position[index]}%\`,
                rotation: rotation[index],
                ease: 'none',
                scrollTrigger: {
                    trigger: container.current.querySelector('.main'),
                    start: 'top top',
                    end: () => \`+=\${window.innerHeight}\`,
                    scrub: 0.5,
                    id: \`spread-\${index}\`,
                },
            })
        })

        cardsArray.forEach((card, index) => {
            const frontEl = card.querySelector(".flip-card-front");
            const backEl = card.querySelector(".flip-card-back");
            const staggerOffset = index * 0.05;
            const startOffset = 1 / 3 + staggerOffset;
            const endOffset = 2 / 3 + staggerOffset;

            ScrollTrigger.create({
                trigger: container.current.querySelector('.main'),
                start: 'top top',
                end: () => \`+=\${totalScrollHeight}\`,
                scrub: 1,
                id: \`rotate-flip-\${index}\`,
                onUpdate: (self) => {
                    const progress = self.progress;
                    if (progress >= startOffset && progress <= endOffset) {
                        const animationProgress = (progress - startOffset) / (1 / 3);
                        const frontRotation = -180 * animationProgress;
                        const backRotation = 180 - 180 * animationProgress;
                        const cardRotation = rotation[index] * (1 - animationProgress);

                        gsap.to(frontEl, { rotateY: frontRotation, ease: 'power1.inOut' });
                        gsap.to(backEl, { rotateY: backRotation, ease: 'power1.inOut' });
                        gsap.to(card, {
                            xPercent: -50,
                            yPercent: -50,
                            rotate: cardRotation,
                            ease: 'power1.inOut'
                        })
                    }
                }
            })
        })
    }, { scope: container })

    return (
        <>
            <div className="container" ref={container}>
                <section className="hero">
                    <h1>Keep scrolling to see and <br /> reveal the cards</h1>
                </section>
                <section className="main">
                    {cards.map((cardData, index) => (
                        <Cardmain
                            key={index}
                            id={\`card-\${index + 1}\`}
                            frontSrc={cardData.frontSrc}
                            frontAlt={cardData.frontAlt}
                            ref={(el) => (cardRef.current[index] = el)}
                        >
                            {cardData.backContent}
                        </Cardmain>
                    ))}
                </section>
                <section className="footer">
                    <h1>Footer or Upcoming section</h1>
                </section>
            </div>
        </>
    )
}
            `
        }
]




export const Css = [
    {

        code : `
                *{

        margin:0;
        padding:0;
        box-sizing:border-box;

}


html , body{

        width:100%;
        height:500vh;
        font-family:Arial, Helvetica, sans-serif;
        scroll-behavior: smooth;
}


.container{
        width:100%;
        height:100%;

}

img{

        width:100%;
        height:100%;
        object-fit:cover;
}


section{

        position:relative;
        width:100vw;
        height:100vh;
        background-color:blue;
}


h1{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50% , -50%);
        color:#fff;
        text-align:center;
        font-weight:lighter;
        line-height:100%;


}


.card{

        position:absolute;
        top:50%;
        left: 50%;
        transform:translate(-50% , -50%);
        width:240px;
        height:360px;
        perspective:1000px;
}


.card p{

        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50% , -50%);
        text-align:center;
        font-size:20px;
        font-weight:500;

}


.card-wrapper{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50% , -50%);
        width:100%;
        height:100%;
        animation:floating 3s infinite ease-in-out;

}


#card-1 .card-wrapper{
        animation-delay:0s;
}
#card-2 .card-wrapper{
        animation-delay:0.2s;
}
#card-3 .card-wrapper{
        animation-delay:0.4s;
}
#card-4 .card-wrapper{
        animation-delay:0.6s;
}



.flip-card-inner{
        position:relative;
        width:100%;
        height:100%;
        transform-style:preserve-3d;
}


.flip-card-front , .flip-card-back{

        position:absolute;
        width:100%;
        height:100%;
        backface-visibility:hidden;
        border-radius:0.8rem;
}


.flip-card-back{
       padding:1rem;
       background-color:#fff;
       transform:rotateY(180deg);

}


@keyframes floating{
        0%{
                transform:translate(-50% , -50%);
        }

        50%{
                transform:translate(-50% , -60%);
        }

        100%{
                transform:translate(-50% , -50%);
        }
}
        `

    }
]




export const  SecondSource = [

    {
        main:`
        import { forwardRef } from "react"
import Image from 'next/image'

const Cardmain = forwardRef(function Cardmain({ id, frontSrc, frontAlt, children }, ref) {
    return (
        <div className="card" id={id} ref={ref}>
            <div className="card-wrapper">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <Image
                            priority
                            src={frontSrc}
                            width={300}
                            height={300}
                            alt={frontAlt}
                        />
                    </div>
                    <div className="flip-card-back">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
})

Cardmain.displayName = 'Cardmain'
export default Cardmain 
        `
    }


]





export const Dependent = [


        {
            code:`
              npm install gsap  @gsap/react
            `
        }
]