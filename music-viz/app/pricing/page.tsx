import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// 模拟数据 - 价格计划
const pricingPlans = {
  monthly: [
    {
      name: "免费",
      price: "¥0",
      description: "适合初学者和爱好者",
      features: ["基础音乐可视化效果", "每月最多创建5个项目", "720p导出分辨率", "社区支持", "包含水印"],
      buttonText: "开始使用",
      popular: false,
    },
    {
      name: "专业版",
      price: "¥49",
      description: "适合内容创作者和音乐人",
      features: ["所有免费版功能", "高级可视化效果库", "无限项目创建", "1080p导出分辨率", "优先电子邮件支持", "无水印"],
      buttonText: "升级到专业版",
      popular: true,
    },
    {
      name: "企业版",
      price: "¥199",
      description: "适合专业工作室和企业",
      features: [
        "所有专业版功能",
        "独家可视化模板",
        "4K导出分辨率",
        "API访问权限",
        "专属客户经理",
        "商业使用授权",
        "自定义品牌设置",
      ],
      buttonText: "联系销售",
      popular: false,
    },
  ],
  yearly: [
    {
      name: "免费",
      price: "¥0",
      description: "适合初学者和爱好者",
      features: ["基础音乐可视化效果", "每月最多创建5个项目", "720p导出分辨率", "社区支持", "包含水印"],
      buttonText: "开始使用",
      popular: false,
    },
    {
      name: "专业版",
      price: "¥399",
      period: "/年",
      discount: "节省¥189",
      description: "适合内容创作者和音乐人",
      features: ["所有免费版功能", "高级可视化效果库", "无限项目创建", "1080p导出分辨率", "优先电子邮件支持", "无水印"],
      buttonText: "升级到专业版",
      popular: true,
    },
    {
      name: "企业版",
      price: "¥1,599",
      period: "/年",
      discount: "节省¥789",
      description: "适合专业工作室和企业",
      features: [
        "所有专业版功能",
        "独家可视化模板",
        "4K导出分辨率",
        "API访问权限",
        "专属客户经理",
        "商业使用授权",
        "自定义品牌设置",
      ],
      buttonText: "联系销售",
      popular: false,
    },
  ],
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">价格方案</h1>
          <p className="text-xl text-white/80 text-center max-w-2xl">
            选择最适合您需求的计划。所有计划都提供14天免费试用，无需信用卡。
          </p>
        </div>

        <Tabs defaultValue="monthly" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-black/30 backdrop-blur-md">
              <TabsTrigger value="monthly" className="text-white data-[state=active]:bg-white/10">
                月付
              </TabsTrigger>
              <TabsTrigger value="yearly" className="text-white data-[state=active]:bg-white/10">
                年付（节省20%）
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly" className="mt-0">
            <div className="grid md:grid-cols-3 gap-6">
              {pricingPlans.monthly.map((plan, index) => (
                <Card
                  key={index}
                  className={`bg-black/40 backdrop-blur-sm border-white/10 overflow-hidden relative ${
                    plan.popular ? "border-pink-500/50 shadow-lg shadow-pink-500/20 scale-105 md:scale-110 z-10" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-pink-500 text-black text-center text-sm font-bold py-1">
                      最受欢迎
                    </div>
                  )}
                  <CardHeader className={plan.popular ? "pt-8" : ""}>
                    <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                    <div className="flex items-baseline mt-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-white/70 ml-1">/月</span>
                    </div>
                    <CardDescription className="text-white/70 mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-white/80">
                          <Check className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className={
                        plan.popular
                          ? "w-full bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-black font-bold"
                          : "w-full bg-white/10 hover:bg-white/20 text-white"
                      }
                    >
                      {plan.buttonText}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="yearly" className="mt-0">
            <div className="grid md:grid-cols-3 gap-6">
              {pricingPlans.yearly.map((plan, index) => (
                <Card
                  key={index}
                  className={`bg-black/40 backdrop-blur-sm border-white/10 overflow-hidden relative ${
                    plan.popular ? "border-pink-500/50 shadow-lg shadow-pink-500/20 scale-105 md:scale-110 z-10" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-pink-500 text-black text-center text-sm font-bold py-1">
                      最受欢迎
                    </div>
                  )}
                  <CardHeader className={plan.popular ? "pt-8" : ""}>
                    <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                    <div className="flex items-baseline mt-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      {plan.period && <span className="text-white/70 ml-1">{plan.period}</span>}
                    </div>
                    {plan.discount && (
                      <span className="inline-block mt-1 text-sm font-medium text-pink-400">{plan.discount}</span>
                    )}
                    <CardDescription className="text-white/70 mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-white/80">
                          <Check className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className={
                        plan.popular
                          ? "w-full bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-black font-bold"
                          : "w-full bg-white/10 hover:bg-white/20 text-white"
                      }
                    >
                      {plan.buttonText}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 bg-black/30 backdrop-blur-md rounded-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">常见问题</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">如何选择合适的计划？</h3>
              <p className="text-white/70">
                如果您是初学者或只是想尝试我们的服务，免费计划是一个很好的起点。对于需要更多功能和更高质量输出的内容创作者，我们推荐专业版。企业版适合需要商业授权和高级功能的专业团队。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">我可以随时更改或取消我的订阅吗？</h3>
              <p className="text-white/70">
                是的，您可以随时升级、降级或取消您的订阅。如果您在计费周期内取消，您的账户将保持活跃状态直到当前计费周期结束。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">免费试用期结束后会自动收费吗？</h3>
              <p className="text-white/70">
                不会。我们的免费试用不需要信用卡，试用期结束后不会自动收费。您可以选择继续使用免费计划或升级到付费计划。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">您接受哪些支付方式？</h3>
              <p className="text-white/70">
                我们接受主要的信用卡、借记卡、支付宝、微信支付和PayPal。对于企业客户，我们也提供发票支付选项。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
