import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

// 模拟数据 - FAQ
const faqCategories = [
  {
    category: "基本使用",
    questions: [
      {
        question: "如何开始使用SoundWave创建我的第一个音乐可视化？",
        answer:
          "首先，点击主页上的“免费开始创作”按钮，然后上传您的音乐文件。系统会自动生成基础可视化效果。您可以使用控制面板调整各种参数，如颜色、形状和动画速度，以创建您喜欢的视觉效果。完成后，您可以预览、保存或导出您的作品。",
      },
      {
        question: "SoundWave支持哪些音频格式？",
        answer:
          "SoundWaveave支持大多数常见的音频格式，包括MP3、WAV、FLAC、AAC和OGG。为获得最佳效果，我们建议使用高质量的音频文件，比如320kbps的MP3或无损WAV格式。",
      },
      {
        question: "我可以在SoundWave中使用我自己的图像或视频作为背景吗？",
        answer:
          '是的，专业版和企业版用户可以上传自定义背景图像或视频。在可视化编辑器中，点击"背景"选项卡，然后选择"上传自定义背景"。支持的格式包括JPG、PNG、GIF和MP4。',
      },
      {
        question: "如何保存我的项目以便稍后继续编辑？",
        answer:
          '点击编辑器右上角的"保存"按钮可以保存您的项目。所有已保存的项目都可以在"我的项目"页面找到。免费用户最多可以保存5个项目，而付费用户可以保存无限数量的项目。',
      },
    ],
  },
  {
    category: "账户与订阅",
    questions: [
      {
        question: "如何升级到专业版或企业版？",
        answer:
          '您可以在"价格"页面选择适合您的计划并完成付款流程。升级后，新功能将立即可用。如果您需要帮助选择合适的计划，可以联系我们的客户支持团队获取建议。',
      },
      {
        question: "我可以在多台设备上使用我的账户吗？",
        answer:
          "是的，您可以在多台设备上登录您的SoundWave账户。免费用户最多可以同时在2台设备上使用，专业版用户可以在5台设备上使用，企业版用户没有设备数量限制。",
      },
      {
        question: "如何更改我的密码或更新账户信息？",
        answer:
          '登录后，点击右上角的头像图标，然后选择"账户设置"。在这里，您可以更改密码、更新个人信息、管理订阅和设置通知偏好。',
      },
      {
        question: "如果我不满意服务，可以获得退款吗？",
        answer:
          "是的，我们提供30天无条件退款保证。如果您在购买后30天内对我们的服务不满意，请联系客户支持申请全额退款。年度订阅如果在30天后取消，将按比例退还剩余时间的费用。",
      },
    ],
  },
  {
    category: "导出与分享",
    questions: [
      {
        question: "我可以将我的音乐可视化导出为视频文件吗？",
        answer:
          "是的，所有用户都可以将音乐可视化导出为视频文件。免费用户可以导出720p分辨率的视频，专业版用户可以导出1080p视频，企业版用户可以导出4K视频。导出格式包括MP4和WebM。",
      },
      {
        question: "如何在社交媒体上分享我的作品？",
        answer:
          '完成作品后，点击"分享"按钮，您可以直接分享到各种社交媒体平台，包括微信、微博、抖音、YouTube和Instagram。您也可以获取分享链接或嵌入代码，以便在您的网站或博客上展示您的作品。',
      },
      {
        question: "SoundWave的水印可以移除吗？",
        answer:
          "免费用户导出的视频将包含SoundWave水印。升级到专业版或企业版后，您可以移除水印。企业版用户还可以添加自己的品牌水印。",
      },
      {
        question: "我可以将我的作品提交到SoundWave的作品集展示吗？",
        answer:
          '是的，所有用户都可以提交作品到我们的作品集展示。点击作品详情页面的"提交到作品集"按钮，填写相关信息并等待审核。被选中的作品将在我们的作品集页面展示，并有机会被推荐为精选作品。',
      },
    ],
  },
  {
    category: "技术问题",
    questions: [
      {
        question: "为什么我的音乐可视化效果看起来不流畅？",
        answer:
          "可视化效果的流畅度受多种因素影响，包括您的设备性能、浏览器类型和网络连接。尝试关闭其他应用程序、使用最新版本的Chrome或Firefox浏览器，并确保您有稳定的网络连接。如果问题仍然存在，尝试降低可视化效果的复杂度或分辨率。",
      },
      {
        question: "SoundWave可以离线使用吗？",
        answer:
          "目前，SoundWave主要是一个基于网络的应用程序，需要互联网连接。然而，专业版和企业版用户可以下载桌面应用程序，该应用程序提供有限的离线功能。完整的离线支持正在开发中，预计将在未来版本中推出。",
      },
      {
        question: "我的浏览器不支持SoundWave，我该怎么办？",
        answer:
          "SoundWave最佳支持Chrome、Firefox、Safari和Edge的最新版本。如果您使用的是旧版浏览器或不受支持的浏览器，我们建议您升级或切换到受支持的浏览器。如果您无法更改浏览器，请联系我们的支持团队，我们将尽力提供替代解决方案。",
      },
      {
        question: "如何报告错误或提出功能建议？",
        answer:
          '我们非常重视用户反馈。您可以通过点击应用程序底部的"反馈"按钮报告错误或提出建议。或者，您可以发送电子邮件至support@soundwave.com与我们的团队直接联系。我们会认真考虑所有反馈，并在未来的更新中实施有价值的建议。',
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">常见问题</h1>
          <p className="text-xl text-white/80 text-center max-w-2xl">
            查找有关SoundWave的常见问题解答。如果您没有找到所需的答案，请随时联系我们的支持团队。
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
            <Input
              placeholder="搜索问题..."
              className="pl-10 bg-black/30 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-pink-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="md:col-span-1">
            <div className="space-y-2 sticky top-20">
              <h3 className="text-lg font-semibold text-white mb-4">类别</h3>
              {faqCategories.map((category, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10"
                >
                  {category.category}
                </Button>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-6">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`item-${categoryIndex}-${faqIndex}`}
                      className="bg-black/30 backdrop-blur-md rounded-lg border border-white/10"
                    >
                      <AccordionTrigger className="px-6 text-white hover:text-white hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-white/80">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-black/30 backdrop-blur-md rounded-xl p-8 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">还有其他问题？</h2>
          <p className="text-white/80 mb-6">
            如果您没有找到所需的答案，请随时联系我们的支持团队。我们通常会在24小时内回复。
          </p>
          <Button className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-black font-bold">
            联系支持
          </Button>
        </div>
      </div>
    </div>
  )
}
