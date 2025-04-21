import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// 模拟数据 - 更新日志
const changelogEntries = [
  {
    version: "2.5.0",
    date: "2023-12-15",
    title: "冬季更新：新增3D可视化效果",
    highlights: ["新增5种3D可视化模板", "改进音频分析算法", "新增导出为GIF功能"],
    changes: [
      {
        type: "新功能",
        items: [
          "新增5种3D可视化模板，包括球体、隧道和星系效果",
          "新增导出为GIF功能，支持循环动画",
          "新增音频波形编辑器，可手动调整音频波形",
          "新增项目自动保存功能",
          "新增键盘快捷键支持",
        ],
      },
      {
        type: "改进",
        items: [
          "改进音频分析算法，提高低音频响应",
          "优化渲染引擎，提高帧率和性能",
          "改进用户界面，简化工作流程",
          "增强移动设备兼容性",
          "改进项目预览加载速度",
        ],
      },
      {
        type: "修复",
        items: [
          "修复在某些浏览器中音频加载失败的问题",
          "修复高分辨率导出时的渲染错误",
          "修复用户设置不保存的问题",
          "修复在iOS设备上的音频同步问题",
          "修复多个UI布局错误",
        ],
      },
    ],
  },
  {
    version: "2.4.2",
    date: "2023-11-10",
    title: "性能优化更新",
    highlights: ["提高渲染性能", "修复多个错误", "改进移动设备支持"],
    changes: [
      {
        type: "改进",
        items: [
          "优化WebGL渲染，提高复杂可视化效果的性能",
          "改进移动设备上的触摸控制",
          "减少内存使用，提高应用稳定性",
          "改进项目加载时间",
        ],
      },
      {
        type: "修复",
        items: [
          "修复在Chrome 108上的兼容性问题",
          "修复长时间运行时内存泄漏问题",
          "修复在某些Android设备上的崩溃问题",
          "修复导出进度条显示错误",
        ],
      },
    ],
  },
  {
    version: "2.4.0",
    date: "2023-10-05",
    title: "秋季更新：社区功能与新模板",
    highlights: ["新增社区分享功能", "10个新模板", "改进导出选项"],
    changes: [
      {
        type: "新功能",
        items: [
          "新增社区分享功能，可以直接分享作品到社区",
          "新增10个季节性模板，包括秋季和万圣节主题",
          "新增模板收藏功能",
          "新增高级导出选项，包括自定义比特率和格式选择",
          "新增项目复制功能",
        ],
      },
      {
        type: "改进",
        items: [
          "改进用户个人资料页面设计",
          "优化社区发现算法",
          "改进搜索功能，支持标签和描述搜索",
          "提高模板预览加载速度",
        ],
      },
      {
        type: "修复",
        items: [
          "修复社交媒体分享链接错误",
          "修复某些模板在Safari浏览器中的显示问题",
          "修复用户评论不显示的问题",
          "修复项目标签编辑错误",
        ],
      },
    ],
  },
  {
    version: "2.3.5",
    date: "2023-09-12",
    title: "错误修复与性能改进",
    highlights: ["修复关键错误", "提高稳定性", "改进用户体验"],
    changes: [
      {
        type: "改进",
        items: ["提高应用启动速度", "改进错误报告系统", "优化大文件处理性能", "改进用户反馈表单"],
      },
      {
        type: "修复",
        items: [
          "修复账户设置保存失败的问题",
          "修复在Firefox浏览器中的音频同步问题",
          "修复项目删除后仍显示在列表中的问题",
          "修复多个UI显示错误",
          "修复密码重置功能失效的问题",
        ],
      },
    ],
  },
]

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">更新日志</h1>
          <p className="text-xl text-white/80 text-center max-w-2xl">
            了解SoundWave的最新更新和改进。我们不断努力提升您的音乐可视化体验。
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {changelogEntries.map((entry, entryIndex) => (
            <div key={entryIndex} className="mb-12">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-white">版本 {entry.version}</h2>
                    <Badge className="bg-gradient-to-r from-yellow-400 to-pink-500 text-black">最新</Badge>
                  </div>
                  <p className="text-white/70">{entry.date}</p>
                </div>
                <h3 className="text-xl font-semibold text-white mt-2 md:mt-0">{entry.title}</h3>
              </div>

              <Card className="bg-black/30 backdrop-blur-md border-white/10 mb-8">
                <CardHeader>
                  <CardTitle className="text-white text-lg">亮点</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-white/80 space-y-1">
                    {entry.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {entry.changes.map((changeGroup, groupIndex) => (
                <div key={groupIndex} className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">{changeGroup.type}</h4>
                  <ul className="space-y-2 pl-5">
                    {changeGroup.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-white/80 flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-pink-500 mt-2 mr-3 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {entryIndex < changelogEntries.length - 1 && <Separator className="my-10 bg-white/10" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
