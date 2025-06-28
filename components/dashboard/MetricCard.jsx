import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card"
import { cn } from "../../lib/utils"

function MetricCard({ title, value, icon: Icon, className, ...props }) {
  return (
    <Card className={cn("flex flex-col", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600 dark:text-discord-gray-text">{title}</CardTitle>
        {Icon && <Icon className="h-4 w-4 text-gray-500 dark:text-discord-gray-text" />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
      </CardContent>
    </Card>
  )
}

export { MetricCard }
