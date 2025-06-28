"use client"

import { useState, useMemo } from "react"
import { Plus, Search, ArrowUp, ArrowDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../../components/ui/Table"
import { Input } from "../../components/ui/Input"
import { Button } from "../../components/ui/Button"
import { Pagination } from "../../components/ui/Pagination"
import { AddMemberModal } from "../../components/members/AddMemberModal"
import { mockUsers } from "../../lib/mockData"
import { cn } from "../../lib/utils"

function MembersPage() {
  const [users, setUsers] = useState(mockUsers)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterRole, setFilterRole] = useState("All")
  const [sortConfig, setSortConfig] = useState({ key: "joinDate", direction: "descending" })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const roles = useMemo(() => ["All", ...new Set(mockUsers.map((user) => user.role))], [])

  const sortedAndFilteredUsers = useMemo(() => {
    let filtered = users.filter((user) => user.username.toLowerCase().includes(searchTerm.toLowerCase()))

    if (filterRole !== "All") {
      filtered = filtered.filter((user) => user.role === filterRole)
    }

    filtered.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1
      }
      return 0
    })

    return filtered
  }, [users, searchTerm, filterRole, sortConfig])

  const totalPages = Math.ceil(sortedAndFilteredUsers.length / itemsPerPage)
  const currentUsers = sortedAndFilteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const requestSort = (key) => {
    let direction = "ascending"
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending"
    }
    setSortConfig({ key, direction })
  }

  const handleAddMember = (newMemberData) => {
    const newUser = {
      id: String(users.length + 1),
      avatar: "/placeholder.svg?height=40&width=40",
      joinDate: new Date().toISOString().split("T")[0],
      status: "offline",
      ...newMemberData,
    }
    setUsers((prevUsers) => [...prevUsers, newUser])
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Members</h1>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Server Members</CardTitle>
          <Button onClick={() => setIsModalOpen(true)} variant="primary" size="sm">
            <Plus className="h-4 w-4 mr-2" /> Add Member
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Search members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-discord-gray-text" />
            </div>
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="block w-full md:w-auto rounded-md border border-gray-300 bg-white py-2 px-3 text-base text-gray-900 dark:border-discord-border-dark dark:bg-discord-dark-gray dark:text-white focus:outline-none focus:ring-discord-blurple focus:border-discord-blurple sm:text-sm"
            >
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Avatar</TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    onClick={() => requestSort("username")}
                    className="flex items-center gap-1 text-gray-500 dark:text-discord-gray-text"
                  >
                    Username
                    {sortConfig.key === "username" &&
                      (sortConfig.direction === "ascending" ? (
                        <ArrowUp className="h-3 w-3" />
                      ) : (
                        <ArrowDown className="h-3 w-3" />
                      ))}
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    onClick={() => requestSort("joinDate")}
                    className="flex items-center gap-1 text-gray-500 dark:text-discord-gray-text"
                  >
                    Join Date
                    {sortConfig.key === "joinDate" &&
                      (sortConfig.direction === "ascending" ? (
                        <ArrowUp className="h-3 w-3" />
                      ) : (
                        <ArrowDown className="h-3 w-3" />
                      ))}
                  </Button>
                </TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentUsers.length > 0 ? (
                currentUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div
                      className="w-8 h-8 rounded-full bg-random text-gray-500 dark:text-discord-gray-text bg-zinc-300 dark:bg-zinc-100 flex justify-center items-center text-base font-bold uppercase"
                      >
                        {user.username.charAt(0)}
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{user.username}</TableCell>
                    <TableCell>{new Date(user.joinDate).toLocaleDateString()}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <span
                        className={cn(
                          "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                          user.status === "online" && "bg-discord-green/20 text-discord-green",
                          user.status === "offline" && "bg-gray-400/20 text-gray-600 dark:text-discord-gray-text",
                          user.status === "idle" && "bg-yellow-400/20 text-yellow-600",
                          user.status === "dnd" && "bg-discord-red/20 text-discord-red",
                        )}
                      >
                        {user.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan="5" className="text-center py-4 text-gray-500 dark:text-discord-gray-text">
                    No members found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          {totalPages > 1 && (
            <div className="mt-4">
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </div>
          )}
        </CardContent>
      </Card>

      <AddMemberModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAddMember={handleAddMember} />
    </div>
  )
}

export default MembersPage
