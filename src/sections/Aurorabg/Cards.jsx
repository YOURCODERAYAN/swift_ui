import {cn} from '@/utils/main'
import {motion , useAnimate} from 'framer-motion'
import {useEffect , useRef , useState} from 'react'
import Info from '@/constants/CardInfo'
import {FolderOpen} from 'lucide-react'








 const Tilt = ({children , className="" , style={}}) =>{

        const itemRef = useRef();

        const [transformStyle , setTransformStyle] = useState("")


    const handleMouseMove = (e) =>{


            if(!itemRef.current) return;

        const {left , top , width , height} = itemRef.current.getBoundingClientRect();


        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY- top) / height;


        const tiltX = (relativeX - 0.5) *10;
        const tiltY = (relativeY - 0.5) * -10;  



        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`
        console.log('transform:' , newTransform)
        setTransformStyle(newTransform)
    }


            const handleMouseLeave = ()=>{

                console.log('Mouse Left')

                    setTransformStyle('perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
            }

        
        return(


            <div
            
            ref={itemRef}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{...style, transform:transformStyle, transformStyle:'preserve-3d'}}
            
            
            >

                {children}

            </div>
        )
    }





export default function Cards( className){
    
    const ref = useRef()

    const[scope , animate] = useAnimate()


    useEffect(()=>{
       const timer = setTimeout(function(){

            animate(scope.current,{

                    y:0,
                    opacity:1
            },{


                duration:0.5,
                ease:"easeOut"
            })

       } , 2000)

       return ()=> clearTimeout(timer)
    },[animate])



        return(

            <Tilt className="w-fit" style={{ perspective: '1000px' }}>
           
            <motion.div  ref={scope} className={cn("overflow-visible text-black bg-gradient-to-br from-white/12 to-white/5 border-2 border-white/20 backdrop-blur-2xl rounded-2xl first")} style={{width:"300px" , height:"300px" ,y:40,  opacity:0 , 

                boxShadow:'0 0 40px rgba(139 , 92 , 246 , 0.25) , inset 0 1px 0 rgba(255 , 255 , 255 , 0.15) , inset 0 -1px 0 rgba(0,0,0,0.1)'
            }}>

                <div style={{position:'absolute' , top:0 , left:0 , right:0 , height:'2px' , background:'linear-gradient(90deg , transparent , rgba(255 , 255 , 255 , 0.4), transparent)',   pointerEvents:'none'}}></div>

                            <div className="flex flex-col items-center gap-5">

                                <div className="  h-40  ml-5  mr-5 mt-5  ">
                                {
                                    Info.map((item)=>(

                                           <img
                                           key={item.id}
                                         src={item.image} 
                                         className=" w-full  h-40  rounded-lg"
                                         style={{objectFit:"cover"}} 
                                         alt="Card Image"
                                           
                                           />
                                                
                                          
                                            

                                    ))
                                }
                                </div>


                                <div className=" rounded-2xl w-60 h-20  bg-zinc-400 flex items-center p-3 cursor-pointer">
                                    {
                                        Info.map((item)=>(

                                                <div className="font-sans">
                                                    <span className="text-blue-600 font-bold text-lg">Promt: </span>

                                                    {item.prompt}

                                                </div>


                                        ))
                                             
                                    }
                                </div>


                            </div>


                            <div>

                            </div>
            </motion.div>

            </Tilt>

        

        )
}


export  function Cards2(){





    const ref = useRef(null);




    const[scope , animate] = useAnimate();



    useEffect(()=>{

    const timer1 = setTimeout(function(){

        animate(scope.current,{

            y:20,
            opacity:1


        },{

            duration:0.6,
            ease:"easeOut"

        })

        
        }, 3000)
    },[animate])

        return(
           


            <motion.div  ref={scope} className=" flex flex-col gap-4 items-center overflow-hidden bg-gradient-to-br from-white/12 to-white/5 border-2 border-white/20 backdrop-blur-2xl rounded-2xl  " style={{width:'500px' , height:'120px' , y:0 , opacity:0}}>


                <div className="flex flex-col items-start gap-2 border-b border-white/10 w-full pl-4">
                    <div className="">
                         <div className="text-md text-white">   Generated Description </div>

                    </div>
                    <div>
                            Here will be the description of the all genrated description...
                    </div>
                </div>
              

                <div className=" w-full flex flex-row gap-6 items-center  justify-center ">
                        <button className="bg-white/35 text-black/40  rounded-2xl w-32 h-7"  >
                            Copy
                        </button>

                        <button className="bg-white/35 text-black/40  rounded-2xl w-32 h-7">
                            Regenerate
                        </button>
                </div>




            </motion.div>

           
        )
}




export function Cards3(){

        return(



            <div className="bg-white/20 flex flex-col items-center rounded-lg " style={{width:'400px' , height:'110px'}}>
                    <div className="flex flex-row items-start gap-7 pt-2  w-full pl-4 border-b border-white/10 ">
                            <div className="bg-black/20 rounded-lg p-2 ">
                            <FolderOpen size={30}  color="white"/>
                            </div>

                            <div className="flex flex-col items-start justify-center gap-1">
                                <div>
                                    Landscapes
                                </div>
                                <div className="flex flex-row items-start gap-3">
                                    8 images  2 hours ago 
                                </div>
                            </div>
                    </div>



                    <div className="flex flex-row items-center justify-center gap-2 pl-4 pt-3 ">
                        <button className=" bg-white/35 text-black rounded-lg w-32 h-7">
                                Open
                        </button>


                        <button className="bg-white/35 text-black rounded-lg w-32 h-7">
                                Export 
                        </button>
                    </div>
            </div>
        )
}






