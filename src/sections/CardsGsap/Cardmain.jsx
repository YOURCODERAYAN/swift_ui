'use client'
import Image from 'next/image'
import { forwardRef } from "react"

const Cardmain = forwardRef(function Cardmain({ id, fontSrc, fontAlt, backText }, ref) {
    return (
        <div className="card" id={id} ref={ref}>
            <div className="card-wrapper">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <Image
                            src={fontSrc}
                            width={200}
                            height={200}
                            alt={fontAlt}
                        />
                    </div>
                    <div className="flip-card-back">
                        <p>{backText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Cardmain