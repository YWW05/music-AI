import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import MusicVisualizer from "@/components/music-visualizer"
import Navbar from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Download, Music, Play, Star } from "lucide-react"

// 模拟数据 - 特色作品
const featuredWorks = [
  {
    id: 1,
    title: "电子律动",
    artist: "DJ Cosmos",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "深海冥想",
    artist: "海洋之声",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "霓虹都市",
    artist: "城市猎人",
    image: "/placeholder.svg?height=400&width=600",
  },
]

// 模拟数据 - 用户评价
const testimonials = [
  {
    name: "王小明",
    role: "音乐制作人",
    content:
      "SoundWave彻底改变了我展示音乐的方式。现在我的作品不仅能被听到，还能被看到，这为我带来了更多的粉丝和合作机会。",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "李梅",
    role: "内容创作者",
    content:
      "作为一名视频创作者，我一直在寻找能让我的内容脱颖而出的工具。SoundWave让我能够轻松创建令人惊叹的音乐可视化效果，大大提升了我视频的观看体验。",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "张伟",
    role: "DJ",
    content:
      "在现场表演中使用SoundWave创建的视觉效果，观众的反应非常热烈。这个工具直观易用，但效果却非常专业，强烈推荐给所有音乐人。",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

// 模拟数据 - 功能特点
const features = [
  {
    title: "实时音频分析",
    description: "先进的音频处理算法可以实时分析音乐的节拍、频率和情绪，创建与音乐完美同步的视觉效果。",
    icon: <Music className="h-12 w-12 text-pink-500" />,
  },
  {
    title: "丰富的视觉模板",
    description: "超过100种精心设计的视觉模板，从简约到复杂，从抽象到具象，总有一款适合您的音乐风格。",
    icon: <Play className="h-12 w-12 text-pink-500" />,
  },
  {
    title: "多平台支持",
    description: "无论是社交媒体、音乐平台还是现场表演，SoundWave都能为您提供完美适配的视觉效果。",
    icon: <Download className="h-12 w-12 text-pink-500" />,
  },
]

// 模拟数据 - 统计数字
const stats = [
  { value: "100万+", label: "活跃用户" },
  { value: "500万+", label: "创建作品" },
  { value: "200+", label: "国家和地区" },
  { value: "4.9/5", label: "用户评分" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black overflow-hidden relative">
      <Navbar />

      {/* 英雄区域 */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/10 text-white hover:bg-white/20 backdrop-blur-md">
              全新 2.5 版本现已发布 🎉
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">SoundWave</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl">
              将您的音乐转化为震撼视觉体验，让听众不仅能听到，还能看到您的音乐
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-black font-bold text-lg rounded-full px-8"
              >
                免费开始创作
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white/20 hover:bg-white/10 rounded-full px-8"
              >
                观看演示 <Play className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <MusicVisualizer />
        </div>
      </section>

      {/* 特色作品 */}
      <section className="py-20 bg-black/30 backdrop-blur-md relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">精选作品</h2>
              <p className="text-white/70">探索由我们的用户创建的令人惊叹的音乐可视化</p>
            </div>
            <Link href="/gallery">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                查看更多 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredWorks.map((work) => (
              <Card
                key={work.id}
                className="bg-black/40 backdrop-blur-sm border-white/10 overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              >
                <div className="relative group">
                  <Image
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    width={600}
                    height={400}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      size="icon"
                      className="rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 text-white"
                    >
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-white">{work.title}</h3>
                  <p className="text-sm text-white/70">by {work.artist}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 功能特点 */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">强大功能，简单操作</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              SoundWave提供专业级的音乐可视化工具，但操作却简单直观，让每个人都能创作出令人惊叹的视觉效果
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-md rounded-xl p-6 text-center">
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-black/20 backdrop-blur-md rounded-xl p-6 text-center">
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 用户评价 */}
      <section className="py-20 bg-black/30 backdrop-blur-md relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">用户评价</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              听听我们的用户如何评价SoundWave改变了他们创作和分享音乐的方式
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-black/40 backdrop-blur-sm border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-bold">{testimonial.name}</h3>
                      <p className="text-white/70 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/80">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 价格计划 */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">简单透明的价格</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              选择最适合您需求的计划，所有计划都提供14天免费试用
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-black/30 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">免费</h3>
                <p className="text-4xl font-bold text-white mb-4">
                  ¥0<span className="text-lg text-white/70">/月</span>
                </p>
                <p className="text-white/70 mb-6">适合初学者和爱好者</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-white/80">
                    <CheckCircle className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0" />
                    <span>基础音乐可视化效果</span>
                  </li>
                  <li className="flex items-center text-white/80">
                    <CheckCircle className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0" />
                    <span>每月最多创建5个项目</span>
                  </li>
                  <li className="flex items-center text-white/80">
                    <CheckCircle className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0" />
                    <span>720p导出分辨率</span>
                  </li>
                </ul>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white">开始使用</Button>
              </CardContent>
            </Card>

            <Card className="bg-black/30 backdrop-blur-md border-white/10 relative scale-105 z-10 border-pink-500/50 shadow-lg shadow-pink-500/20">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-pink-500 text-black text-center text-sm font-bold py-1">
                最受欢迎
              </div>
              <CardContent className="p-6 pt-8">
                <h3 className="text-2xl font-bold text-white mb-2">专业版</h3>
                <p className="text-4xl font-bold text-white mb-4">
                  ¥49<span className="text-lg text-white/70">/月</span>
                </p>
                <p className="text-white/70 mb-6">适合内容创作者和音乐人</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-white/80">
                    <CheckCircle className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0" />
                    <span>所有免费版功能</span>
                  </li>
                  <li className="flex items-center text-white/80">
                    <CheckCircle className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0" />
                    <span>高级可视化效果库</span>
                  </li>
                  <li className="flex items-center text-white/80">
                    <CheckCircle className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0" />
                    <span>无限项目创建</span>
                  </li>
                  <li className="flex items-center text-white/80">
                    <CheckCircle className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0" />
                    <span>1080p导出分辨率</span>
                  </li>
                  <li className="flex items-center text-white/80">
                    <CheckCircle className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0" />
                    <span>无水印</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-black font-bold">
                  升级到专业版
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/30 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">企业版</h3>
                <p className="text-4xl font-bold text-white mb-4">
                  ¥199<span className="text-lg text-white/70">/月</span>
                </p>
                <p className="text-white/70 mb-6">适合专业工作室和企业</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-white/80">
                    <CheckCircle className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0" />
                    <span>所有专业版功能</span>
                  </li>
                  <li className="flex items-center text-white/80">
                    <CheckCircle className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0" />
                    <span>独家可视化模板</span>
                  </li>
                  <li className="flex items-center text-white/80">
                    <CheckCircle className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0" />
                    <span>4K导出分辨率</span>
                  </li>
                  <li className="flex items-center text-white/80">
                    <CheckCircle className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0" />
                    <span>API访问权限</span>
                  </li>
                  <li className="flex items-center text-white/80">
                    <CheckCircle className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0" />
                    <span>商业使用授权</span>
                  </li>
                </ul>
                <Button className="w-full bg-white/10 hover:bg-white/20 text-white">联系销售</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 行动召唤 */}
      <section className="py-20 bg-black/30 backdrop-blur-md relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">准备好开始创作了吗？</h2>
            <p className="text-xl text-white/70 mb-8">加入全球100万+创作者的行列，开始创建令人惊叹的音乐可视化效果</p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-black font-bold text-lg rounded-full px-8"
            >
              免费开始创作
            </Button>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-12 bg-black/50 backdrop-blur-md relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[10px] border-l-black border-b-[5px] border-b-transparent ml-1"></div>
                </div>
                <span className="text-white font-bold text-xl">SoundWave</span>
              </Link>
              <p className="text-white/70 mb-4">将您的音乐转化为震撼视觉体验，让听众不仅能听到，还能看到您的音乐。</p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10">
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
                <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10">
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
                <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10">
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
                <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10">
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
            <div>
              <h3 className="text-white font-bold mb-4">产品</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/gallery" className="text-white/70 hover:text-white">
                    作品集
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-white/70 hover:text-white">
                    价格
                  </Link>
                </li>
                <li>
                  <Link href="/changelog" className="text-white/70 hover:text-white">
                    更新日志
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-white/70 hover:text-white">
                    常见问题
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">公司</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-white/70 hover:text-white">
                    关于我们
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/70 hover:text-white">
                    联系我们
                  </Link>
                </li>
                <li>
                  <Link href="/invest" className="text-white/70 hover:text-white">
                    投资者关系
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-white/70 hover:text-white">
                    加入我们
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">资源</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-white/70 hover:text-white">
                    博客
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials" className="text-white/70 hover:text-white">
                    教程
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-white/70 hover:text-white">
                    支持中心
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="text-white/70 hover:text-white">
                    API文档
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm mb-4 md:mb-0">© 2023 SoundWave. 保留所有权利。</p>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-white/50 text-sm hover:text-white">
                服务条款
              </Link>
              <Link href="/privacy" className="text-white/50 text-sm hover:text-white">
                隐私政策
              </Link>
              <Link href="/cookies" className="text-white/50 text-sm hover:text-white">
                Cookie政策
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
