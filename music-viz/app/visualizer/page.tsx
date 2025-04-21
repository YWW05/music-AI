"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Upload, Play, Pause, Volume2, Settings } from "lucide-react"
import AudioVisualizer from "@/components/audio-visualizer"

export default function VisualizerPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [volume, setVolume] = useState(0.7)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null)
  const [audioSource, setAudioSource] = useState<MediaElementAudioSourceNode | null>(null)
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null)
  const [audioData, setAudioData] = useState<Uint8Array | null>(null)

  useEffect(() => {
    if (!audioFile) return

    const objectUrl = URL.createObjectURL(audioFile)

    if (audioRef.current) {
      audioRef.current.src = objectUrl
      audioRef.current.volume = volume

      // 创建音频上下文
      const context = new (window.AudioContext || (window as any).webkitAudioContext)()
      const source = context.createMediaElementSource(audioRef.current)
      const analyserNode = context.createAnalyser()

      analyserNode.fftSize = 256
      const bufferLength = analyserNode.frequencyBinCount
      const dataArray = new Uint8Array(bufferLength)

      source.connect(analyserNode)
      analyserNode.connect(context.destination)

      setAudioContext(context)
      setAudioSource(source)
      setAnalyser(analyserNode)
      setAudioData(dataArray)
    }

    return () => {
      URL.revokeObjectURL(objectUrl)
    }
  }, [audioFile])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      setAudioFile(files[0])
    }
  }

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-white mb-8">音乐可视化器</h1>

          <div className="w-full max-w-4xl bg-black/30 backdrop-blur-md rounded-xl p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
              <Button
                onClick={() => document.getElementById("audio-upload")?.click()}
                className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-black"
              >
                <Upload className="mr-2 h-4 w-4" /> 上传音乐
              </Button>
              <input id="audio-upload" type="file" accept="audio/*" className="hidden" onChange={handleFileChange} />

              <div className="text-white/80">{audioFile ? audioFile.name : "未选择文件"}</div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <Button
                onClick={togglePlay}
                disabled={!audioFile}
                variant="outline"
                size="icon"
                className="text-white border-white/20"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>

              <div className="flex items-center gap-2 flex-1">
                <Volume2 className="text-white/80 h-4 w-4" />
                <Slider
                  value={[volume * 100]}
                  max={100}
                  step={1}
                  onValueChange={(value) => setVolume(value[0] / 100)}
                  className="flex-1"
                />
              </div>

              <Button variant="outline" size="icon" className="text-white border-white/20">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="w-full max-w-4xl aspect-video bg-black/50 rounded-xl overflow-hidden">
            {analyser && audioData && <AudioVisualizer analyser={analyser} audioData={audioData} />}
          </div>
        </div>
      </div>

      <audio ref={audioRef} className="hidden" />
    </div>
  )
}
