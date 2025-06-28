import { cn } from "../../lib/utils"

function Table({ children, className, ...props }) {
  return (
    <div className="w-full overflow-auto">
      <table className={cn("w-full caption-bottom text-sm border-collapse", className)} {...props}>
        {children}
      </table>
    </div>
  )
}

function TableHeader({ children, className, ...props }) {
  return (
    <thead className={cn("[&_tr]:border-b border-gray-200 dark:border-discord-border-dark", className)} {...props}>
      {children}
    </thead>
  )
}

function TableBody({ children, className, ...props }) {
  return (
    <tbody className={cn("[&_tr:last-child]:border-0", className)} {...props}>
      {children}
    </tbody>
  )
}

function TableFooter({ children, className, ...props }) {
  return (
    <tfoot
      className={cn(
        "border-t bg-gray-100/50 font-medium [&_tr]:last:border-b-0 dark:bg-discord-dark-gray/50",
        className,
      )}
      {...props}
    >
      {children}
    </tfoot>
  )
}

function TableRow({ children, className, ...props }) {
  return (
    <tr
      className={cn(
        "border-b border-gray-100 transition-colors hover:bg-gray-50 data-[state=selected]:bg-gray-50",
        "dark:border-discord-border-dark dark:hover:bg-discord-dark-gray/50 dark:data-[state=selected]:bg-discord-dark-gray/50",
        className,
      )}
      {...props}
    >
      {children}
    </tr>
  )
}

function TableHead({ children, className, ...props }) {
  return (
    <th
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-gray-500 dark:text-discord-gray-text [&:has([role=checkbox])]:pr-0",
        className,
      )}
      {...props}
    >
      {children}
    </th>
  )
}

function TableCell({ children, className, ...props }) {
  return (
    <td
      className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0 text-gray-800 dark:text-white", className)}
      {...props}
    >
      {children}
    </td>
  )
}

function TableCaption({ children, className, ...props }) {
  return (
    <caption className={cn("mt-4 text-sm text-gray-500 dark:text-discord-gray-text", className)} {...props}>
      {children}
    </caption>
  )
}

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption }
