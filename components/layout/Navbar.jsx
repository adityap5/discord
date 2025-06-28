"use client"
import Link from "next/link"
import Image from "next/image"
import { Bell, Sun, Moon, Menu } from "lucide-react"
import { useTheme } from "../../context/ThemeContext"
import { useSidebar } from "../../context/SidebarContext"
import { Button } from "../ui/Button"
import { cn } from "../../lib/utils"
import { motion } from "framer-motion"

function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { toggleSidebar } = useSidebar()

  return (
    <motion.header
      className={cn(
        "flex items-center justify-between h-16 px-4 border-b",
        "bg-white text-gray-900 border-gray-200",
        "dark:bg-discord-darker-bg dark:text-white dark:border-discord-border-dark",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
    >
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="md:hidden text-gray-600 dark:text-discord-gray-text hover:bg-gray-100 dark:hover:bg-discord-dark-gray"
          aria-label="Toggle sidebar"
        >
          <Menu className="h-6 w-6" />
        </Button>
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <Image src="/placeholder.svg?height=24&width=24" alt="Discord Logo" width={24} height={24} />
          <span className="hidden sm:inline text-gray-900 dark:text-white">Discord Admin</span>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          aria-label={`Toggle to ${theme === "dark" ? "light" : "dark"} theme`}
          className="text-gray-600 dark:text-discord-gray-text hover:bg-gray-100 dark:hover:bg-discord-dark-gray"
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-600 dark:text-discord-gray-text hover:bg-gray-100 dark:hover:bg-discord-dark-gray"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
        </Button>
        <Link href="#" className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=32&width=32"
            width={32}
            height={32}
            className="rounded-full border border-gray-200 dark:border-discord-border-dark"
            alt="User Avatar"
          />
          <span className="hidden md:inline text-gray-900 dark:text-white">Admin User</span>
        </Link>
      </div>
    </motion.header>
  )
}

export { Navbar }
