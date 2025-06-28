import { cn } from "../../lib/utils"

function Input({ className, type = "text", ...props }) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-discord-blurple focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        "dark:border-discord-border-dark dark:bg-discord-dark-gray dark:text-white dark:ring-offset-discord-dark-bg dark:placeholder:text-discord-gray-text dark:focus-visible:ring-discord-blurple",
        className,
      )}
      {...props}
    />
  )
}

export { Input }
