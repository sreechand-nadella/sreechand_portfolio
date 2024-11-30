'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

interface Particle {
  x: number
  y: number
  size: number
  color: string
  speedX: number
  speedY: number
}

export function BackgroundDesign() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    const particles: Particle[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles.length = 0
      const particleCount = Math.floor((canvas.width * canvas.height) / 8000)
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle())
      }
    }

    const createParticle = (): Particle => {
      const size = Math.random() * 3 + 1
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: size,
        color: getRandomColor(),
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5
      }
    }

    const getRandomColor = () => {
      const colors = resolvedTheme === 'dark'
        ? ['#4B5563', '#6B7280', '#9CA3AF', '#D1D5DB']
        : ['#60A5FA', '#93C5FD', '#BFDBFE', '#DBEAFE']
      return colors[Math.floor(Math.random() * colors.length)]
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      )
      if (resolvedTheme === 'dark') {
        gradient.addColorStop(0, 'rgba(17, 24, 39, 1)')
        gradient.addColorStop(1, 'rgba(31, 41, 55, 1)')
      } else {
        gradient.addColorStop(0, 'rgba(239, 246, 255, 1)')
        gradient.addColorStop(1, 'rgba(219, 234, 254, 1)')
      }
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        // Create connections between particles
        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = resolvedTheme === 'dark' ? 'rgba(156, 163, 175, 0.1)' : 'rgba(96, 165, 250, 0.1)'
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(drawParticles)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    drawParticles()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [resolvedTheme])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 -z-10"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
    </motion.div>
  )
}

