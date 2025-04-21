"use client"

import { useEffect, useRef } from "react"

export default function MusicVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // 设置画布大小为窗口大小
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // 创建渐变色
    const createGradient = () => {
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        50,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2,
      )

      gradient.addColorStop(0, "rgba(255, 0, 128, 0.8)")
      gradient.addColorStop(0.5, "rgba(255, 102, 0, 0.5)")
      gradient.addColorStop(1, "rgba(128, 0, 255, 0)")

      return gradient
    }

    // 动画参数
    let angle = 0
    let hue = 0
    const particles: Particle[] = []
    const particleCount = 200

    // 粒子类
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = canvas.width / 2
        this.y = canvas.height / 2
        this.size = Math.random() * 15 + 1
        const radius = (Math.random() * canvas.width) / 2
        const angle = Math.random() * Math.PI * 2
        this.x += Math.cos(angle) * radius
        this.y += Math.sin(angle) * radius
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
        this.color = `hsl(${hue}, 100%, 50%)`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.size > 0.2) this.size -= 0.1
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // 初始化粒子
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // 绘制螺旋效果
    const drawSpiral = () => {
      ctx.save()
      ctx.translate(canvas.width / 2, canvas.height / 2)

      const maxRadius = Math.min(canvas.width, canvas.height) * 0.4
      const spiralCount = 5

      for (let j = 0; j < spiralCount; j++) {
        ctx.rotate((Math.PI * 2) / spiralCount)

        ctx.strokeStyle = `hsl(${(hue + j * 30) % 360}, 100%, 50%)`
        ctx.lineWidth = 2
        ctx.beginPath()

        for (let i = 0; i < 200; i++) {
          const radius = (i / 200) * maxRadius
          const theta = i * 0.2 + angle
          const x = radius * Math.cos(theta)
          const y = radius * Math.sin(theta)

          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.stroke()
      }

      ctx.restore()
    }

    // 动画循环
    const animate = () => {
      // 清除画布，使用半透明黑色创建拖尾效果
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // 绘制螺旋
      drawSpiral()

      // 更新和绘制粒子
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()

        if (particles[i].size <= 0.3) {
          particles.splice(i, 1)
          i--
          particles.push(new Particle())
        }
      }

      // 更新动画参数
      angle += 0.01
      hue = (hue + 0.5) % 360

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
