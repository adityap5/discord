"use client"
import React from 'react'
import { Navbar } from "./Navbar"
import { Sidebar } from "./Sidebar"
import { cn } from "../../lib/utils"
import { motion } from "framer-motion"

function DashboardLayout({ children }) {
  
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-discord-dark-bg">
      <Sidebar />
      <div
        className={cn(
          "flex flex-col flex-1 transition-all duration-300 ease-in-out",
          "md:ml-6",
        )}
      >
        <Navbar />
        <motion.main
          className="flex-1 p-4 md:p-6 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.main>
      </div>
    </div>
  )
}

export { DashboardLayout }
