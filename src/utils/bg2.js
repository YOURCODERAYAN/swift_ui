export const Second = [
  {
    source:` 'use client'

import { motion, useScroll, useSpring, useTransform } from 'motion/react'

/**
 * ParallaxLayer configuration
 * @typedef {Object} ParallaxLayer
 * @property {string} image - Image URL or path
 * @property {number} zIndex - Z-index value (negative)
 * @property {string} movementRange - Movement range [startPercent, endPercent] e.g., "0,50"
 * @property {string} direction - "y" for vertical, "x" for horizontal movement
 */


const MAX_LAYERS = 8

export default function Parallax({
  layers = [],
  children,
  className = "",
  bgImage = "/assets/sky.jpg",
  damping = 40,
  scrollRange = [0, 0.5]
}) {
  // scrollRange is now actually wired in — previously accepted as a prop
  // but never read, so useScroll() always tracked full-page scroll
  // regardless of what was passed.
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, { damping })
  const trackedProgress = useTransform(smoothProgress, scrollRange, [0, 1])

  // Build a fixed-length array of MAX_LAYERS slots up front. Real layers
  // fill the first N slots; the rest are harmless placeholders. This way
  // the array we map over always has the same length, every render.
  const slots = Array.from({ length: MAX_LAYERS }, (_, i) => layers[i] || null)

  // One useTransform call per fixed slot, unconditionally, at the top level.
  // This is the part that actually fixes the hooks violation: no hook call
  // is ever skipped or added between renders.
  const layerTransforms = slots.map((layer) => {
    const range = layer?.movementRange ?? "0,0"
    const [start, end] = range.split(",").map(Number)
    // direction now genuinely changes the output range — previously both
    // branches were identical, so 'x' never actually differed from 'y'.
    return useTransform(trackedProgress, [0, 1], [start + "%", end + "%"])
  })

  return (
    <section className={'absolute inset-0 bg-black/40 overflow-hidden ' + className}>
      <div className="relative h-screen">

        {/* Background Sky */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(" + bgImage + ")",
            backgroundPosition: "bottom",
            backgroundSize: "cover"
          }}
        />

        {/* Dynamic Layers — only real layers render; empty slots produce null */}
        {slots.map((layer, index) => {
          if (!layer) return null

          const direction = layer.direction || "y"
          const transform = layerTransforms[index]

          return (
            <motion.div
              key={index}
              className="absolute inset-0"
              style={{
                backgroundImage: "url(" + layer.image + ")",
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                zIndex: layer.zIndex,
                [direction]: transform
              }}
            />
          )
        })}

        {/* Children Content */}
        {children && (
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            {children}
          </div>
        )}
      </div>
    </section>
  )
}`
  }
]



export const Dependencies = [

   
      {
        Depend : `
       npm install framer-motion  clsx tailwind-merge 
        
        
        `
      }
]