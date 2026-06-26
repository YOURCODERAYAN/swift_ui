'use client'

import Link from 'next/link'
import {InfiniteImageCarousel} from '@/components/ui/infinite-moving-cards'
import  Footer from './Footer'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useRef} from 'react';
import { 
  SiReact, 
  SiJavascript, 
  SiTailwindcss, 
  SiFramer, 
  SiGreensock 
} from 'react-icons/si';

const testimonials =[


  {
      img: "/marquee_image_1.png",
      name: " A 3d effect Aurora Bg "
  },
  {
      img: "/marquee_image_2.png",
      name: "Interactive Prallax Bg"
  }
  ,  
  {
      img: "/button1.png",
      name:" Hover Effect Button"

  },
  {
    
      img: "/button2.png",
      name:" Hover Gradient Button"

  },
  {
    img:"/button3.png",
    name:" A gsap animated Card"
  },
  {
    img:'/button4.png',
    name:"A Elastic Card Effect"
  }
  
]

// gsap register scrollTrigger
gsap.registerPlugin(ScrollTrigger);


export default function Home() {





  const animateRef = useRef();
  const animateRef2 = useRef();
  const animateRef3 = useRef();



  useGSAP(()=>{
    gsap.to(animateRef.current.querySelectorAll('span'),{

        scrollTrigger:{

            trigger:animateRef.current,
            start:'top 70%',
            end:'bottom 30%',
            scrub:1,
            
            
        },
        duration:0.8,
        opacity:1,
        y:0,
        ease:'power2.out',
        stagger:0.05,


    });

  },{scope:animateRef})

useGSAP(()=>{
    gsap.to(animateRef2.current.querySelectorAll('span'),{

        scrollTrigger:{

            trigger:animateRef2.current,
            start:'top 70%',
            end:'bottom 40%',
            scrub:1,
            
            
        },
        duration:0.8,
        opacity:1,
        y:0,
        ease:'power2.out',
        stagger:0.05,


    });

  },{scope:animateRef2})



useGSAP(()=>{
    gsap.to(animateRef3.current.querySelectorAll('span'),{

        scrollTrigger:{

            trigger:animateRef3.current,
            start:'top 70%',
            end:'bottom 40%',
            scrub:1,
           
            
        },
        duration:0.8,
        opacity:1,
        y:0,
        ease:'power2.out',
        stagger:0.05,


    });

  },{scope:animateRef3})


  






  
  



  return (

        <div className="w-full  overflow-y-auto bg-black">
    <div className=" h-screen w-full  flex items-center justify-center flex-col" style={{
    backgroundImage: 'url(/Hero%20Gradient%20-%2034.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }}>
      
      {/* Hero Content - Centered */}
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="bg-white px-4 py-1 border-solid border-sm mb-4 rounded-2xl text-zinc-600 font-serif" style={{fontWeight:400}}> 🎉An interactive Library</div>
        <div className="design-effect">
          A Simple <br /> but Helpful UI library <br /> For Developers
        </div>
   <div className="flex flex-col items-center justify-center w-1/3  font-mono font-semibold text-zinc-300 pointer-events-none">
  {/* Main Headline */}
  <h1 className="text-4xl font-bold mb-4 text-center">
    Swift UI
  </h1>
  
  {/* Subheading */}
  <p className="text-lg  text-center leading-relaxed">
    Animation-first React components for modern frontends.
  </p>
  
  {/* Description */}
  <p className="text-base  text-center mt-3 leading-relaxed">
    Production-ready components built with React, TypeScript, Tailwind CSS, 
    and Motion  & Gsap libraries.
  </p>
</div>

    {/*Buttons Element */}
    <Link
      href="/component/buttons"  
      >
        <div className="wrapper relative inline-block">
          <div  className="box"/>

          <div  className="relative z-1 bg-zinc-900 px- py-2 w-60 text-center text-white font-serif  rounded-2xl   transition ease-in-out cursor-pointer">
                Browse Components
          </div>

        </div>
        </Link>

        {/* Here the tech stack logo will be attached*/}
        <div className="flex flex-row items-center gap-5 text-4xl">
          <SiReact  className="cursor-pointer" />
          <SiJavascript  className="cursor-pointer" />
          <SiTailwindcss className="cursor-pointer" />
          <SiFramer className="cursor-pointer"/>
          <SiGreensock className="cursor-pointer"/>
        </div>

        


      </div>

    </div>


    <div className="w-full   flex items-center justify-center mt-60 z-10  ">
        <div className="text-3xl text-white">

                <InfiniteImageCarousel 
                items={testimonials}
                direction="right"
                speed="slow"  
                />
        </div>
      </div>



     {/* Here the animated Gsap component will render */}

    <div className="relative h-90  w-full flex items-center overflow-hidden pl-10">
        <div 
          className="text-white font-semibold " 
          style={{fontSize: '180px'}}
          ref={animateRef}
        >
          <h1 className="font-bold text-white/20 leading-tight">
            <span className="inline-block opacity-0  text-amber-600 translate-y-20">B</span>
            <span className="inline-block opacity-0 text-amber-600 translate-y-20">u</span>
            <span className="inline-block opacity-0 text-amber-600 translate-y-20">i</span>
            <span className="inline-block opacity-0  text-amber-600 translate-y-20">l</span>
            <span className="inline-block opacity-0 text-amber-600  translate-y-20">t</span>
            <span className="inline-block opacity-0 translate-y-20"></span>
            <span className="inline-block opacity-0 translate-y-20">T</span>
            <span className="inline-block opacity-0 translate-y-20">o</span>
            <span className="inline-block opacity-0 translate-y-20"></span>
            <span className="inline-block opacity-0 translate-y-20">M</span>
            <span className="inline-block opacity-0 translate-y-20">o</span>
            <span className="inline-block opacity-0 translate-y-20">v</span>
            <span className="inline-block opacity-0 translate-y-20">e</span>
            <span className="inline-block opacity-0 translate-y-20"></span>
            <span className="inline-block opacity-0 translate-y-20"></span>
            <span className="inline-block opacity-0 translate-y-20"></span>
            <span className="inline-block opacity-0 translate-y-20"></span>
          </h1>
        </div>
      </div>

    {/*Second Animated Text Section*/}
          <div className="relative h-70 w-full  flex items-center justify-center overflow-hidden ">
        <div 
          className="text-white font-semibold" 
          style={{fontSize: '180px'}}
          ref={animateRef3}

         
        >
          <h1 className="font-bold text-white leading-tight text-right">
            <span className="inline-block opacity-1 translate-y-20">A</span>
            <span className="inline-block opacity-1 translate-y-20">n</span>
            <span className="inline-block opacity-1 translate-y-20">d</span>
           

          </h1>
        </div>
      </div>

      {/* THIRD ANIMATED TEXT SECTION */}
      <div className="relative h-96 w-full  flex items-center justify-end overflow-hidden pr-2">
        <div 
          className="text-white font-semibold" 
          style={{fontSize: '180px'}}
          ref={animateRef2}
          
         
        >
          <h1 className="font-bold text-white/20 leading-tight text-right">
            <span className="inline-block opacity-1 text-amber-600 translate-y-20">D</span>
            <span className="inline-block opacity-1  text-amber-600 translate-y-20">e</span>
            <span className="inline-block opacity-1  text-amber-600 translate-y-20">s</span>
            <span className="inline-block opacity-1 text-amber-600  translate-y-20">i</span>
            <span className="inline-block opacity-1 text-amber-600  translate-y-20">g</span>
            <span className="inline-block opacity-1 text-amber-600 translate-y-20">n</span>
            <span className="inline-block opacity-1 text-amber-600  translate-y-20">e</span>
            <span className="inline-block opacity-1 text-amber-600  translate-y-20">d</span>
            <span className="inline-block opacity-1 translate-y-20">T</span>
            <span className="inline-block opacity-1 translate-y-20">o</span>
            <span className="inline-block opacity-1 translate-y-20">B</span>
            <span className="inline-block opacity-1 translate-y-20">e</span>
            <span className="inline-block opacity-1  translate-y-20">F</span>
            <span className="inline-block opacity-1  translate-y-20">e</span>
            <span className="inline-block opacity-1  translate-y-20">e</span>
            <span className="inline-block opacity-1  translate-y-20">l</span>

          </h1>
        </div>
      </div>

    {/*Here will be the footer section visible */}
      <div style={{height:'45vh'}}>

        <div className="absolute  bottom-0 w-full">

          <Footer />

        </div>






      </div>


    </div>
  );
}
