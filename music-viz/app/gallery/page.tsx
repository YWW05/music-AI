import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Play, Download, Share2 } from "lucide-react"

// 模拟数据 - 作品集
const galleryItems = [
  {
    id: 1,
    title: "电子律动",
    artist: "DJ Cosmos",
    image: "/placeholder.svg?height=400&width=600",
    likes: 1243,
    views: 5678,
    tags: ["电子", "舞曲", "视觉化"],
    featured: true,
  },
  {
    id: 2,
    title: "深海冥想",
    artist: "海洋之声",
    image: "/placeholder.svg?height=400&width=600",
    likes: 987,
    views: 3421,
    tags: ["冥想", "环境", "水波"],
    featured: false,
  },
  {
    id: 3,
    title: "霓虹都市",
    artist: "城市猎人",
    image: "/placeholder.svg?height=400&width=600",
    likes: 2156,
    views: 8932,
    tags: ["赛博朋克", "城市", "霓虹"],
    featured: true,
  },
  {
    id: 4,
    title: "星际旅行",
    artist: "星尘",
    image: "/placeholder.svg?height=400&width=600",
    likes: 1567,
    views: 6234,
    tags: ["太空", "科幻", "星系"],
    featured: false,
  },
  {
    id: 5,
    title: "自然之声",
    artist: "森林精灵",
    image: "/placeholder.svg?height=400&width=600",
    likes: 876,
    views: 2987,
    tags: ["自然", "放松", "有机"],
    featured: false,
  },
  {
    id: 6,
    title: "未来节拍",
    artist: "节拍大师",
    image: "/placeholder.svg?height=400&width=600",
    likes: 1832,
    views: 7456,
    tags: ["未来贝斯", "电子", "节拍"],
    featured: true,
  },
  {
    id: 7,
    title: "古典重构",
    artist: "巴赫2077",
    image: "/placeholder.svg?height=400&width=600",
    likes: 1432,
    views: 5321,
    tags: ["古典", "重构", "交响乐"],
    featured: false,
  },
  {
    id: 8,
    title: "波普艺术",
    artist: "色彩大师",
    image: "/placeholder.svg?height=400&width=600",
    likes: 965,
    views: 3789,
    tags: ["波普", "艺术", "鲜艳"],
    featured: false,
  },
]

export default function GalleryPage() {
  // 将精选项目放在前面
  const sortedGallery = [...galleryItems].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">作品集</h1>
          <p className="text-xl text-white/80 text-center max-w-2xl">
            探索由我们的用户创建的令人惊叹的音乐可视化作品。获取灵感，或者创建您自己的视觉杰作。
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
            全部
          </Button>
          <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10">
            精选
          </Button>
          <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10">
            最新
          </Button>
          <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10">
            热门
          </Button>
          <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10">
            电子
          </Button>
          <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10">
            冥想
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedGallery.map((item) => (
            <Card
              key={item.id}
              className="bg-black/40 backdrop-blur-sm border-white/10 overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            >
              <div className="relative group">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
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
                {item.featured && (
                  <Badge className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-pink-500 text-black">
                    精选
                  </Badge>
                )}
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-white/70">by {item.artist}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="text-white/70 hover:text-pink-500">
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-white/70 border-white/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between text-sm text-white/60">
                  <span>{item.likes} 喜欢</span>
                  <span>{item.views} 次查看</span>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button variant="ghost" size="sm" className="flex-1 text-white/80 hover:text-white">
                    <Download className="h-4 w-4 mr-1" /> 下载
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1 text-white/80 hover:text-white">
                    <Share2 className="h-4 w-4 mr-1" /> 分享
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-black font-bold">
            加载更多
          </Button>
        </div>
      </div>
    </div>
  )
}
