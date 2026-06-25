export  const Source =  [

        {
            code :  `
'use client'

import gsap from 'gsap';
import { useEffect, useRef } from 'react'

export default function StackedCards() {

    // Container ref — scopes all queries to this component's own DOM subtree
    // instead of the whole document, so multiple instances on one page don't
    // collide and select each other's cards.
    const containerRef = useRef(null);

    useEffect(() => {

        const root = containerRef.current;
        if (!root) return;

        const cards = root.querySelectorAll(".card");
        const spotlight = root; // root element itself carries the .spotlight class
        const cardsContainer = root.querySelector(".cards")

        // decalring the physics value of the animation //
        const PROXIMITY_RADIUS = 500;
        const PUSH_FORCE = 10;
        const TILT_AMOUNT = 0.1;
        const NEIGHBOUR_INFLUENCE = 0.2;
        const SPRING_STIFFNESS = 0.05;
        const BOUNCE_FRICTION = 0.85;
        const CURSOR_SMOOTHING = 0.75;

        // ----------------------------------------------------//

        const layout = {

            rotation: [5, -5, 7.5, -10],
            x: [-275, -100, 100, 275],
            y: [10, -10, 25, -10],
        }


        const cursor = { x: 0, y: 0, vx: 0, vy: 0 };
        let prevCursorX = 0;
        let prevCursorY = 0;



        const cardPhysics = [...cards].map((el, i) => {

            gsap.set(el, {
                x: layout.x[i],
                y: layout.y[i],
                rotation: layout.rotation[i],
                zIndex: i,
                xPercent: -50,
                yPercent: -50,
            });
            return {
                el,
                restX: layout.x[i],
                restY: layout.y[i],
                restR: layout.rotation[i],
                x: layout.x[i],
                y: layout.y[i],
                r: layout.rotation[i],
                vx: 0,
                vy: 0,
                vr: 0,
            }

        })

        const handleMouseMove = (e) => {
            cursor.vx = cursor.vx * CURSOR_SMOOTHING + (e.clientX - prevCursorX) * (1 - CURSOR_SMOOTHING);
            cursor.vy = cursor.vy * CURSOR_SMOOTHING + (e.clientY - prevCursorY) * (1 - CURSOR_SMOOTHING);
            prevCursorX = cursor.x = e.clientX;
            prevCursorY = cursor.y = e.clientY;
        };

        spotlight.addEventListener("mousemove", handleMouseMove);
        // ----------------------------------------------------//

        const handleMouseLeave = () => {
            cursor.vx = cursor.vy = 0;
        };

        spotlight.addEventListener("mouseleave", handleMouseLeave)


        function CalculatePushForce(card) {

            const speed = Math.sqrt(cursor.vx ** 2 + cursor.vy ** 2);
            if (speed < 0.5) return { fx: 0, fy: 0 };

            const rect = cardsContainer.getBoundingClientRect();
            const cx = rect.left + rect.width / 2 + card.restX;
            const cy = rect.top + rect.height / 2 + card.restY;
            const dist = Math.sqrt((cursor.x - cx) ** 2 + (cursor.y - cy) ** 2);

            if (dist > PROXIMITY_RADIUS) return { fx: 0, fy: 0 };

            const weight = (1 - dist / PROXIMITY_RADIUS) ** 3;

            return {
                fx: cursor.vx * PUSH_FORCE * weight,
                fy: cursor.vy * PUSH_FORCE * weight,

            }

        }


        function applyNeighbourInfluence(forces, index) {

            let fx = forces[index].fx;
            let fy = forces[index].fy;


            forces.forEach((f, j) => {
                if (j === index) return;

                const falloff = NEIGHBOUR_INFLUENCE ** Math.abs(j - index);
                fx += f.fx * falloff;
                fy += f.fy * falloff * 0.6;
            });
            return { fx, fy };
        }


        const tick = () => {

            const forces = cardPhysics.map(CalculatePushForce);


            cardPhysics.forEach((card, i) => {
                const { fx, fy } = applyNeighbourInfluence(forces, i);


                card.vx = (card.vx + (card.restX + fx - card.x) * SPRING_STIFFNESS) * BOUNCE_FRICTION;

                card.vy = (card.vy + (card.restY + fy - card.y) * SPRING_STIFFNESS) * BOUNCE_FRICTION;

                card.vr = (card.vr + (card.restR + fx * TILT_AMOUNT - card.r) * SPRING_STIFFNESS) * BOUNCE_FRICTION;

                card.x += card.vx;
                card.y += card.vy;
                card.r += card.vr;


                gsap.set(card.el, { x: card.x, y: card.y, rotation: card.r })
            });

        };

        gsap.ticker.add(tick);

        // Cleanup — removes the ticker callback and both event listeners on
        // unmount. Without this, the physics loop kept running forever and
        // listeners stayed attached even after the component left the page.
        return () => {
            gsap.ticker.remove(tick);
            spotlight.removeEventListener("mousemove", handleMouseMove);
            spotlight.removeEventListener("mouseleave", handleMouseLeave);
        };

    }, [])

    return (

        <section className="spotlight" ref={containerRef}>
            <div className="cards">
                <div className="card"><img src="/MONKEYIMAGE.jpg" alt="first-image" /></div>
                <div className="card"><img src="/MONKEYIMAGE.jpg" alt="second-image" /></div>
                <div className="card"><img src="/MONKEYIMAGE.jpg" alt="third-image" /></div>
                <div className="card"><img src="/MONKEYIMAGE.jpg" alt="fourth-image" /></div>
            </div>

        </section>
    )
}
            `


        }
]



export const Sourcecss =  [
        {
            code : `
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.spotlight {
    position: relative;
    width: 100%;
    height: 100svh;
    background: #141414;
    overflow: hidden;
}

.cards {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.card {
    position: absolute;
    width: 250px;
    height: 250px;
    border-radius: 1rem;
    overflow: hidden;
}
            `
        }
]



