"use client"
import { cn } from "../../lib/utils"
import { motion } from "framer-motion"

function Button({ children, className, variant = "primary", size = "md", ...props }) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variants = {
    primary: "bg-discord-blurple text-white hover:bg-discord-blurple/90 focus:ring-discord-blurple",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 dark:bg-discord-dark-gray dark:text-white dark:hover:bg-discord-dark-gray/80 dark:focus:ring-discord-gray-text",
    outline:
      "border border-gray-300 bg-white text-gray-800 hover:bg-gray-100 focus:ring-gray-400 dark:border-discord-border-dark dark:bg-discord-dark-bg dark:text-white dark:hover:bg-discord-dark-gray dark:focus:ring-discord-gray-text",
    ghost:
      "hover:bg-gray-100 text-gray-800 focus:ring-gray-400 dark:hover:bg-discord-dark-gray dark:text-white dark:focus:ring-discord-gray-text",
    danger: "bg-discord-red text-white hover:bg-discord-red/90 focus:ring-discord-red",
  }

  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 py-2 text-base",
    lg: "h-12 px-6 text-lg",
    icon: "h-10 w-10",
  }

  return (
    <motion.button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export { Button }
