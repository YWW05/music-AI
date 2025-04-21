"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const navItems = [
  { name: "首页", path: "/" },
  { name: "作品集", path: "/gallery" },
  { name: "价格", path: "/pricing" },
  { name: "投资", path: "/invest" },
  { name: "联系我们", path: "/contact" },
  { name: "更新日志", path: "/changelog" },
  { name: "常见问题", path: "/faq" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 flex items-center justify-center">
            <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[10px] border-l-black border-b-[5px] border-b-transparent ml-1"></div>
          </div>
          <span className="text-white font-bold text-xl">SoundWave</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-sm ${
                pathname === item.path
                  ? "text-white border-b-2 border-pink-500"
                  : "text-white/70 hover:text-white border-b-2 border-transparent hover:border-pink-500/50"
              } transition-colors pb-1`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/visualizer">
            <Button className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-black font-bold hidden sm:inline-flex">
              进入应用
            </Button>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">打开菜单</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/95 border-white/10">
              <div className="flex flex-col gap-6 mt-10">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`text-lg ${pathname === item.path ? "text-white font-bold" : "text-white/70"}`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link href="/visualizer" className="mt-4">
                  <Button className="w-full bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-black font-bold">
                    进入应用
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
