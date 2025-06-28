"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, Shield, MessageSquare, X } from "lucide-react"
import { useSidebar } from "../../context/SidebarContext"
import { cn } from "../../lib/utils"
import { Button } from "../ui/Button"
import { motion, AnimatePresence } from "framer-motion"

function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useSidebar()
  const pathname = usePathname()

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Members", href: "/members", icon: Users },
    { name: "Roles", href: "/roles", icon: Shield },
    { name: "Messages", href: "/messages", icon: MessageSquare },
  ]

  const sidebarVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: "0%", opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            className={cn(
              "fixed inset-y-0 left-0 z-40 w-64 flex flex-col",
              "bg-white border-r border-gray-200",
              "dark:bg-discord-darker-bg dark:border-discord-border-dark",
              "md:relative md:translate-x-0",
            )}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sidebarVariants}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
              mass: 0.5,
            }}
          >
            {/* Top bar for mobile close */}
            <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-discord-border-dark md:hidden">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Navigation</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="text-gray-600 dark:text-discord-gray-text hover:bg-gray-100 dark:hover:bg-discord-dark-gray"
                aria-label="Close sidebar"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 p-4 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-discord-blurple text-white"
                        : "text-gray-700 hover:bg-gray-100 dark:text-discord-gray-text dark:hover:bg-discord-dark-gray",
                      "focus:outline-none focus:ring-2 focus:ring-discord-blurple focus:ring-offset-2",
                    )}
                    onClick={() => {
                      if (window.innerWidth < 768) {
                        toggleSidebar()
                      }
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}

export { Sidebar }
