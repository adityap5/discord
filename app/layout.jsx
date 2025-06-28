import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "../context/ThemeContext"
import { SidebarProvider } from "../context/SidebarContext"
import { DashboardLayout } from "../components/layout/DashboardLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Discord Admin Dashboard",
  description: "A custom Discord server admin dashboard built with Next.js and Tailwind CSS.",
 
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ThemeProvider>
          <SidebarProvider>
            <DashboardLayout>{children}</DashboardLayout>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
