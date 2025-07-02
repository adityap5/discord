"use client"
import React from 'react'
import { useState } from "react"
import { cn } from "../../lib/utils"

function Switch({ checked, onCheckedChange, className, ...props }) {
  const [isChecked, setIsChecked] = useState(checked)

  const handleToggle = () => {
    const newState = !isChecked
    setIsChecked(newState)
    if (onCheckedChange) {
      onCheckedChange(newState)
    }
  }

  return (
    <button
      role="switch"
      aria-checked={isChecked}
      onClick={handleToggle}
      className={cn(
        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-discord-blurple focus:ring-offset-2",
        isChecked ? "bg-discord-blurple" : "bg-gray-200 dark:bg-discord-dark-gray",
        className,
      )}
      {...props}
    >
      <span className="sr-only">Toggle switch</span>
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
          isChecked ? "translate-x-5" : "translate-x-0",
        )}
      />
    </button>
  )
}

export { Switch }
