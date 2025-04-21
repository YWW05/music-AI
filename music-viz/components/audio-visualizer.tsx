"use client"

import { useRef, useEffect } from "react"

interface AudioVisualizerProps {
  analyser: AnalyserNode
  audioData: Uint8Array
}

export default function AudioVisualizer({ analyser, audioData }: AudioVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // 设置画布大小
    const setCanvasSize = () => {
      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // 动画参数
    let hue = 0
    let angle = 0

    // 动画循环
    const animate = () => {
      // 获取音频数据
      analyser.getByteFrequencyData(audioData)

      // 清除画布
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // 绘制中心圆形可视化
      drawCircleVisualizer(ctx, canvas, audioData, angle, hue)

      // 绘制波形
      drawWaveform(ctx, canvas, audioData, hue)

      // 更新参数
      angle += 0.01
      hue = (hue + 0.5) % 360

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
    }
  }, [analyser, audioData])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

// 绘制圆形可视化
function drawCircleVisualizer(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  audioData: Uint8Array,
  angle: number,
  hue: number,
) {
  const centerX = canvas.width / 2
  const centerY = canvas.height / 2
  const radius = Math.min(centerX, centerY) * 0.5

  ctx.save()
  ctx.translate(centerX, centerY)
  ctx.rotate(angle)

  // 绘制多个圆环
  for (let ring = 0; ring < 3; ring++) {
    const ringRadius = radius * (0.6 + ring * 0.2)
    const barCount = 64
    const barWidth = ((Math.PI * 2 * ringRadius) / barCount) * 0.6

    for (let i = 0; i < barCount; i++) {
      const barAngle = (i * Math.PI * 2) / barCount
      const dataIndex = Math.floor((i * audioData.length) / barCount)
      const barHeight = (audioData[dataIndex] / 255) * radius * 0.5

      // 计算条形的起始和结束点
      const startX = Math.cos(barAngle) * ringRadius
      const startY = Math.sin(barAngle) * ringRadius
      const endX = Math.cos(barAngle) * (ringRadius + barHeight)
      const endY = Math.sin(barAngle) * (ringRadius + barHeight)

      // 绘制条形
      ctx.beginPath()
      ctx.moveTo(startX, startY)
      ctx.lineTo(endX, endY)
      ctx.lineWidth = barWidth
      ctx.strokeStyle = `hsl(${(hue + i * 3 + ring * 30) % 360}, 100%, 50%)`
      ctx.stroke()

      // 在条形末端添加小圆点
      ctx.beginPath()
      ctx.arc(endX, endY, barWidth / 2, 0, Math.PI * 2)
      ctx.fillStyle = `hsl(${(hue + i * 3 + ring * 30) % 360}, 100%, 70%)`
      ctx.fill()
    }
  }

  ctx.restore()
}

// 绘制波形
function drawWaveform(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, audioData: Uint8Array, hue: number) {
  const width = canvas.width
  const height = canvas.height
  const sliceWidth = width / audioData.length

  ctx.beginPath()
  ctx.moveTo(0, height / 2)

  for (let i = 0; i < audioData.length; i++) {
    const x = i * sliceWidth
    const y = height / 2 + (((audioData[i] / 255) * height) / 4 - height / 8)
    ctx.lineTo(x, y)
  }

  ctx.lineTo(width, height / 2)
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
  ctx.lineWidth = 2
  ctx.stroke()

  // 镜像波形
  ctx.beginPath()
  ctx.moveTo(0, height / 2)

  for (let i = 0; i < audioData.length; i++) {
    const x = i * sliceWidth
    const y = height / 2 - (((audioData[i] / 255) * height) / 4 - height / 8)
    ctx.lineTo(x, y)
  }

  ctx.lineTo(width, height / 2)
  ctx.strokeStyle = `hsl(${(hue + 180) % 360}, 100%, 50%)`
  ctx.lineWidth = 2
  ctx.stroke()
}
