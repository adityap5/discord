"use client"
import React from 'react'
import { Users, MessageSquare, Shield, Activity } from "lucide-react"
import { MetricCard } from "../../components/dashboard/MetricCard"
import { Chart } from "../../components/ui/Chart"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card"
import { mockMetrics, mockChartData } from "../../lib/mockData"

function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Members"
          value={mockMetrics.totalMembers}
          icon={Users}
          className="bg-white dark:bg-discord-dark-bg"
        />
        <MetricCard
          title="Online Users"
          value={mockMetrics.onlineUsers}
          icon={Activity}
          className="bg-white dark:bg-discord-dark-bg"
        />
        <MetricCard
          title="Active Roles"
          value={mockMetrics.activeRoles}
          icon={Shield}
          className="bg-white dark:bg-discord-dark-bg"
        />
        <MetricCard
          title="Messages Today"
          value={mockMetrics.messagesToday}
          icon={MessageSquare}
          className="bg-white dark:bg-discord-dark-bg"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Member Growth Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <Chart data={mockChartData} />
        </CardContent>
      </Card>
    </div>
  )
}

export default DashboardPage
