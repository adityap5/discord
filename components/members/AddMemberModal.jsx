"use client"

import { useState } from "react"
import { Modal } from "../ui/Modal"
import { Input } from "../ui/Input"
import { Button } from "../ui/Button"

function AddMemberModal({ isOpen, onClose, onAddMember }) {
  const [username, setUsername] = useState("")
  const [role, setRole] = useState("Member")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username.trim()) {
      onAddMember({ username, role })
      setUsername("")
      setRole("Member")
      onClose()
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Member">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
            Username
          </label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            required
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">
            Role
          </label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-base text-gray-900 dark:border-discord-border-dark dark:bg-discord-dark-gray dark:text-white focus:outline-none focus:ring-discord-blurple focus:border-discord-blurple sm:text-sm"
          >
            <option value="Member">Member</option>
            <option value="Moderator">Moderator</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <div className="flex justify-end space-x-2">
          <Button variant="secondary" onClick={onClose} type="button">
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Add Member
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export { AddMemberModal }
