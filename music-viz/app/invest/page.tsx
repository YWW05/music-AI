import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, TrendingUp, Users, Zap } from "lucide-react"

// 模拟数据 - 投资信息
const investmentHighlights = [
  {
    title: "快速增长",
    description: "过去12个月用户增长率达到300%，月活跃用户超过100万",
    icon: <TrendingUp className="h-10 w-10 text-pink-500" />,
  },
  {
    title: "强大的社区",
    description: "超过50万创作者在平台上分享作品，每月新增内容超过10万个",
    icon: <Users className="h-10 w-10 text-pink-500" />,
  },
  {
    title: "创新技术",
    description: "拥有多项音频可视化专利技术，AI驱动的创意引擎处于行业领先地位",
    icon: <Zap className="h-10 w-10 text-pink-500" />,
  },
]

const teamMembers = [
  {
    name: "张明",
    role: "创始人 & CEO",
    bio: "前音乐制作人和AI研究员，拥有10年音频技术经验。斯坦福大学计算机科学博士。",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "李华",
    role: "CTO",
    bio: "前谷歌高级工程师，专注于音频处理和计算机图形学。麻省理工学院计算机科学硕士。",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "王芳",
    role: "设计总监",
    bio: "曾在多家知名设计公司工作，负责过多个获奖产品的UI/UX设计。中央美术学院毕业。",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "刘强",
    role: "市场总监",
    bio: "拥有15年数字营销经验，曾在多家科技公司担任高级营销职位。哈佛商学院MBA。",
    image: "/placeholder.svg?height=300&width=300",
  },
]

const financialData = {
  revenue: [
    { year: "2020", amount: 0.5 },
    { year: "2021", amount: 1.8 },
    { year: "2022", amount: 4.2 },
    { year: "2023", amount: 8.5 },
    { year: "2024 (预计)", amount: 15.0 },
  ],
  users: [
    { year: "2020", amount: 50 },
    { year: "2021", amount: 200 },
    { year: "2022", amount: 500 },
    { year: "2023", amount: 1000 },
    { year: "2024 (预计)", amount: 2000 },
  ],
}

const fundingRounds = [
  {
    round: "种子轮",
    date: "2020年6月",
    amount: "¥500万",
    investors: "天使投资人、创始人",
    valuation: "¥2,500万",
  },
  {
    round: "A轮",
    date: "2021年8月",
    amount: "¥3,000万",
    investors: "红杉资本中国、真格基金",
    valuation: "¥1.5亿",
  },
  {
    round: "B轮",
    date: "2022年11月",
    amount: "¥1亿",
    investors: "腾讯投资、高瓴资本、红杉资本中国",
    valuation: "¥6亿",
  },
  {
    round: "C轮",
    date: "2023年10月",
    amount: "¥3亿",
    investors: "软银愿景基金、DST Global、腾讯投资",
    valuation: "¥15亿",
  },
]

export default function InvestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">投资者关系</h1>
          <p className="text-xl text-white/80 text-center max-w-2xl">
            SoundWave正在重新定义音乐可视化领域，为创作者和音乐爱好者提供前所未有的创意工具。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {investmentHighlights.map((highlight, index) => (
            <Card key={index} className="bg-black/30 backdrop-blur-md border-white/10">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{highlight.title}</h3>
                <p className="text-white/70">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="overview" className="w-full max-w-5xl mx-auto mb-16">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-black/30 backdrop-blur-md">
              <TabsTrigger value="overview" className="text-white data-[state=active]:bg-white/10">
                公司概览
              </TabsTrigger>
              <TabsTrigger value="financials" className="text-white data-[state=active]:bg-white/10">
                财务数据
              </TabsTrigger>
              <TabsTrigger value="team" className="text-white data-[state=active]:bg-white/10">
                团队介绍
              </TabsTrigger>
              <TabsTrigger value="funding" className="text-white data-[state=active]:bg-white/10">
                融资历史
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview" className="mt-0">
            <Card className="bg-black/30 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">公司使命</h2>
                    <p className="text-white/80 mb-6">
                      SoundWave的使命是通过创新技术将音乐体验提升到新的高度，让每个人都能轻松创建专业级的音乐可视化内容。我们相信音乐不仅是听觉艺术，也是视觉艺术，我们正在构建连接这两个世界的桥梁。
                    </p>
                    <h2 className="text-2xl font-bold text-white mb-4">市场机会</h2>
                    <p className="text-white/80 mb-6">
                      全球音乐可视化市场预计到2025年将达到50亿美元规模，年复合增长率超过25%。随着社交媒体和短视频平台的兴起，对高质量音乐可视化内容的需求正在爆发式增长。SoundWave正处于这一快速增长市场的最前沿。
                    </p>
                    <Button className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-black font-bold">
                      下载投资者简报 <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="bg-black/50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">公司亮点</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 mr-3"></div>
                        <p className="text-white/80">成立于2020年，总部位于上海，在北京、深圳和硅谷设有办公室</p>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 mr-3"></div>
                        <p className="text-white/80">拥有120名员工，其中60%为技术研发人员</p>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 mr-3"></div>
                        <p className="text-white/80">已获得四轮融资，累计融资额超过4亿元人民币</p>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 mr-3"></div>
                        <p className="text-white/80">月活跃用户超过100万，付费用户转化率达到15%</p>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 mr-3"></div>
                        <p className="text-white/80">与多家全球知名音乐厂牌和艺术家建立了合作关系</p>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 mr-3"></div>
                        <p className="text-white/80">拥有15项核心技术专利，包括AI音频分析和实时渲染技术</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financials" className="mt-0">
            <Card className="bg-black/30 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6">收入增长（百万元）</h2>
                    <div className="h-64 bg-black/50 rounded-xl p-4 flex items-end justify-between">
                      {financialData.revenue.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div
                            className="w-12 bg-gradient-to-t from-pink-500 to-yellow-400 rounded-t-md"
                            style={{ height: `${(item.amount / 15) * 100}%` }}
                          ></div>
                          <p className="text-white/80 mt-2">{item.year}</p>
                          <p className="text-white font-bold">{item.amount}M</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6">用户增长（千人）</h2>
                    <div className="h-64 bg-black/50 rounded-xl p-4 flex items-end justify-between">
                      {financialData.users.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div
                            className="w-12 bg-gradient-to-t from-purple-500 to-pink-400 rounded-t-md"
                            style={{ height: `${(item.amount / 2000) * 100}%` }}
                          ></div>
                          <p className="text-white/80 mt-2">{item.year}</p>
                          <p className="text-white font-bold">{item.amount}K</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-white mb-4">财务亮点</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-black/50 border-white/10">
                      <CardContent className="p-6 text-center">
                        <h3 className="text-white/70 text-sm mb-2">年收入增长率</h3>
                        <p className="text-3xl font-bold text-white">102%</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-black/50 border-white/10">
                      <CardContent className="p-6 text-center">
                        <h3 className="text-white/70 text-sm mb-2">毛利率</h3>
                        <p className="text-3xl font-bold text-white">85%</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-black/50 border-white/10">
                      <CardContent className="p-6 text-center">
                        <h3 className="text-white/70 text-sm mb-2">用户获取成本</h3>
                        <p className="text-3xl font-bold text-white">¥45</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="mt-0">
            <Card className="bg-black/30 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">核心团队</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="text-center">
                      <div className="mb-4 relative mx-auto w-32 h-32 overflow-hidden rounded-full border-2 border-pink-500">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={128}
                          height={128}
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-pink-400 mb-2">{member.role}</p>
                      <p className="text-white/70 text-sm">{member.bio}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-12 text-center">
                  <p className="text-white/80 mb-6">
                    我们的团队由来自全球顶尖科技公司和音乐产业的专业人才组成，包括前谷歌、腾讯、网易云音乐和环球音乐的员工。
                  </p>
                  <Button className="bg-white/10 hover:bg-white/20 text-white">查看完整团队</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="funding" className="mt-0">
            <Card className="bg-black/30 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">融资历史</h2>
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-600"></div>
                  <div className="space-y-8">
                    {fundingRounds.map((round, index) => (
                      <div key={index} className="relative pl-16">
                        <div className="absolute left-6 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 transform -translate-x-1/2"></div>
                        <Card className="bg-black/50 border-white/10">
                          <CardHeader>
                            <div className="flex justify-between items-center">
                              <CardTitle className="text-white">{round.round}</CardTitle>
                              <CardDescription className="text-white/70">{round.date}</CardDescription>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                <p className="text-white/70 text-sm">融资金额</p>
                                <p className="text-xl font-bold text-white">{round.amount}</p>
                              </div>
                              <div>
                                <p className="text-white/70 text-sm">投资方</p>
                                <p className="text-white">{round.investors}</p>
                              </div>
                              <div>
                                <p className="text-white/70 text-sm">估值</p>
                                <p className="text-xl font-bold text-white">{round.valuation}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="bg-black/30 backdrop-blur-md rounded-xl p-8 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">投资者咨询</h2>
          <p className="text-white/80 mb-6">
            如果您对投资SoundWave感兴趣，或者想了解更多关于我们的信息，请联系我们的投资者关系团队。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-black font-bold">
              联系投资者关系团队
            </Button>
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
              下载投资者资料包
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
