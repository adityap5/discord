"use client"
import React from 'react'
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card"
import { Switch } from "../../components/ui/Switch"
import { Input } from "../../components/ui/Input"
import { mockRoles } from "../../lib/mockData"

function RolesPage() {
  const [roles, setRoles] = useState(mockRoles)

  const handleToggleRole = (id) => {
    setRoles((prevRoles) => prevRoles.map((role) => (role.id === id ? { ...role, enabled: !role.enabled } : role)))
  }

  const handleRenameRole = (id, newName) => {
    setRoles((prevRoles) => prevRoles.map((role) => (role.id === id ? { ...role, name: newName } : role)))
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Roles</h1>

      <Card>
        <CardHeader>
          <CardTitle>Server Roles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {roles.map((role) => (
              <div
                key={role.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-md border border-gray-200 dark:border-discord-border-dark bg-gray-50 dark:bg-discord-dark-gray"
              >
                <div className="flex items-center gap-3 mb-2 sm:mb-0">
                  <span
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: role.color }}
                    aria-label={`Role color: ${role.color}`}
                  ></span>
                  <Input
                    type="text"
                    value={role.name}
                    onChange={(e) => handleRenameRole(role.id, e.target.value)}
                    className="text-lg font-medium bg-transparent border-none focus:ring-0 focus:outline-none p-0 h-auto text-gray-900 dark:text-white"
                    aria-label={`Rename role ${role.name}`}
                  />
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600 dark:text-discord-gray-text">
                    {role.enabled ? "Enabled" : "Disabled"}
                  </span>
                  <Switch
                    checked={role.enabled}
                    onCheckedChange={() => handleToggleRole(role.id)}
                    aria-label={`Toggle visibility for role ${role.name}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default RolesPage
