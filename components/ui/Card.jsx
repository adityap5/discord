"use client"
import React from 'react'
import { cn } from "../../lib/utils"
import { motion } from "framer-motion"

function Card({ children, className, ...props }) {
  return (
    <motion.div
      className={cn(
        "rounded-lg shadow-sm bg-white dark:bg-discord-dark-bg border border-gray-200 dark:border-discord-border-dark",
        className,
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

function CardHeader({ children, className, ...props }) {
  return (
    <div className={cn("p-4 border-b border-gray-200 dark:border-discord-border-dark", className)} {...props}>
      {children}
    </div>
  )
}

function CardTitle({ children, className, ...props }) {
  return (
    <h3 className={cn("text-lg font-semibold text-gray-900 dark:text-white", className)} {...props}>
      {children}
    </h3>
  )
}

function CardDescription({ children, className, ...props }) {
  return (
    <p className={cn("text-sm text-gray-600 dark:text-discord-gray-text", className)} {...props}>
      {children}
    </p>
  )
}

function CardContent({ children, className, ...props }) {
  return (
    <div className={cn("p-4", className)} {...props}>
      {children}
    </div>
  )
}

function CardFooter({ children, className, ...props }) {
  return (
    <div className={cn("p-4 border-t border-gray-200 dark:border-discord-border-dark", className)} {...props}>
      {children}
    </div>
  )
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
