import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"

const CustomTriangleCursor = () => {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const smoothX = useSpring(mouseX, { stiffness: 500, damping: 40 })
  const smoothY = useSpring(mouseY, { stiffness: 500, damping: 40 })

  const prev = useRef({ x: 0, y: 0 })
  const rotate = useMotionValue(0)

  useEffect(() => {
    const move = e => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)

      const dx = e.clientX - prev.current.x
      const dy = e.clientY - prev.current.y
      const angle = Math.atan2(dy, dx) * (180 / Math.PI)

      rotate.set(angle)
      prev.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <>
      {/* Hide default cursor */}
      <style>{`* { cursor: none !important; }`}</style>

      <motion.div
        style={{
          translateX: smoothX,
          translateY: smoothY,
          rotate,
        }}
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
      >
        {/* Triangle */}
        <div
          className="w-0 h-0
          border-l-[10px] border-l-transparent
          border-r-[10px] border-r-transparent
          border-b-[18px] border-b-[#8116E0]"
        />
      </motion.div>
    </>
  )
}

export default CustomTriangleCursor
