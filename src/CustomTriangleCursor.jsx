import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const CustomTriangleCursor = () => {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const [isPointer, setIsPointer] = useState(false)
  const [isFramed, setIsFramed] = useState(false)

  const smoothX = useSpring(mouseX, { stiffness: 450, damping: 30 })
  const smoothY = useSpring(mouseY, { stiffness: 450, damping: 30 })

  // Elastic Tail Effect (Slow springs)
  const tailX = useSpring(mouseX, { stiffness: 80, damping: 20 })
  const tailY = useSpring(mouseY, { stiffness: 80, damping: 20 })

  const prev = useRef({ x: 0, y: 0 })
  const rotateValue = useMotionValue(0)
  const smoothRotate = useSpring(rotateValue, { stiffness: 300, damping: 30 })

  const scale = useSpring(isPointer ? 1.5 : 1, { stiffness: 300, damping: 15 })

  useEffect(() => {
    const move = e => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)

      const dx = e.clientX - prev.current.x
      const dy = e.clientY - prev.current.y

      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        const angle = Math.atan2(dy, dx) * (180 / Math.PI)
        rotateValue.set(angle + 90)
      }

      prev.current = { x: e.clientX, y: e.clientY }

      const target = e.target
      const isClickable = target.closest('a, button, [role="button"], .cursor-pointer')
      const isText = target.closest('h1, h2, h3, p, span')

      setIsPointer(!!isClickable)
      setIsFramed(!!isText && !isClickable)
    }

    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [mouseX, mouseY, rotateValue])

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>

      {/* Elastic Tail (Echo) */}
      <motion.div
        style={{ x: tailX, y: tailY }}
        className="pointer-events-none fixed z-[9998] w-4 h-4 bg-[#c6ff33]/10 rounded-full blur-md -left-2 -top-2"
      />

      {/* Main Cursor */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          rotate: smoothRotate,
          scale,
        }}
        className="pointer-events-none fixed z-[9999] flex items-center justify-center -left-3 -top-3"
      >
        {isFramed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-10 h-10 border border-[#c6ff33]/40 rounded-sm"
          />
        ) : (
          <div
            className="w-0 h-0
            border-l-[10px] border-l-transparent
            border-r-[10px] border-r-transparent
            border-b-[18px] border-b-[#c6ff33]"
            style={{
              filter: isPointer ? "drop-shadow(0 0 10px #c6ff33)" : "none",
              transition: "filter 0.3s ease"
            }}
          />
        )}
      </motion.div>
    </>
  )
}

export default CustomTriangleCursor
