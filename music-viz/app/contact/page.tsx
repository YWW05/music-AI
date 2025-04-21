"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 模拟API调用
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">联系我们</h1>
          <p className="text-xl text-white/80 text-center max-w-2xl">
            有问题或建议？我们很乐意听取您的意见。请填写下面的表单，我们会尽快回复您。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="md:col-span-1">
            <Card className="bg-black/30 backdrop-blur-md border-white/10 h-full">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-white mb-6">联系信息</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-pink-500 mt-1 mr-3" />
                    <div>
                      <h3 className="text-white font-medium mb-1">电子邮件</h3>
                      <p className="text-white/70">support@soundwave.com</p>
                      <p className="text-white/70">info@soundwave.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-pink-500 mt-1 mr-3" />
                    <div>
                      <h3 className="text-white font-medium mb-1">电话</h3>
                      <p className="text-white/70">+86 400 123 4567</p>
                      <p className="text-white/70">周一至周五 9:00-18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-pink-500 mt-1 mr-3" />
                    <div>
                      <h3 className="text-white font-medium mb-1">地址</h3>
                      <p className="text-white/70">上海市浦东新区张江高科技园区</p>
                      <p className="text-white/70">科技大道88号</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-white font-medium mb-3">关注我们</h3>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-white/20 text-white hover:text-pink-500 hover:border-pink-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-wechat"
                      >
                        <path d="M9.5 9.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h.5c1.1 0 2-.9 2-2s-.9-2-2-2H7.82C6.26 2.5 5 3.76 5 5.32V12c0 2.76 2.24 5 5 5h4c2.76 0 5-2.24 5-5 0-2.4-1.7-4.4-4-4.85-.2-.04-.4-.06-.59-.06-.78 0-1.5.3-2.06.85-.31.31-.58.67-.76 1.06" />
                        <path d="M13 17c0 2.76 2.24 5 5 5h1c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2h-3c-1.66 0-3 1.34-3 3Z" />
                      </svg>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-white/20 text-white hover:text-pink-500 hover:border-pink-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-twitter"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-white/20 text-white hover:text-pink-500 hover:border-pink-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-instagram"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-white/20 text-white hover:text-pink-500 hover:border-pink-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-youtube"
                      >
                        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                        <path d="m10 15 5-3-5-3z" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card className="bg-black/30 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="h-8 w-8 text-black" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">消息已发送！</h2>
                    <p className="text-white/70 mb-6">感谢您联系我们。我们会尽快回复您。</p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-black font-bold"
                    >
                      发送另一条消息
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">
                          姓名
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="您的姓名"
                          required
                          className="bg-black/30 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-pink-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">
                          电子邮件
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="您的电子邮件"
                          required
                          className="bg-black/30 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-pink-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white">
                        主题
                      </Label>
                      <Select value={formState.subject} onValueChange={handleSelectChange} required>
                        <SelectTrigger className="bg-black/30 border-white/10 text-white focus:ring-pink-500">
                          <SelectValue placeholder="选择主题" />
                        </SelectTrigger>
                        <SelectContent className="bg-black/90 border-white/10 text-white">
                          <SelectItem value="general">一般咨询</SelectItem>
                          <SelectItem value="support">技术支持</SelectItem>
                          <SelectItem value="billing">账单问题</SelectItem>
                          <SelectItem value="partnership">合作机会</SelectItem>
                          <SelectItem value="feedback">产品反馈</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">
                        消息
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="请详细描述您的问题或建议..."
                        required
                        className="min-h-[150px] bg-black/30 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-pink-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-black font-bold"
                    >
                      {isSubmitting ? "发送中..." : "发送消息"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
