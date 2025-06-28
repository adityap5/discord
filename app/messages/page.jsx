"use client"

import { useState } from "react"
import Image from "next/image"
import { Trash2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card"
import { Button } from "../../components/ui/Button"
import { mockMessages } from "../../lib/mockData"

function MessagesPage() {
  const [messages, setMessages] = useState(mockMessages)

  const handleDeleteMessage = (id) => {
    setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id))
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Messages</h1>

      <Card>
        <CardHeader>
          <CardTitle>Recent Server Messages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {messages.length > 0 ? (
              messages.map((message) => (
                <div
                  key={message.id}
                  className="flex items-start gap-4 p-4 rounded-md border border-gray-200 dark:border-discord-border-dark bg-gray-50 dark:bg-discord-dark-gray"
                >
                  <Image
                    src={message.avatar || "/placeholder.svg"}
                    alt={`${message.username}'s avatar`}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-900 dark:text-white">{message.username}</span>
                      <span className="text-xs text-gray-500 dark:text-discord-gray-text">
                        {new Date(message.timestamp).toLocaleString()}
                      </span>
                    </div>
                    <p className="text-gray-800 dark:text-white">{message.content}</p>
                  </div>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDeleteMessage(message.id)}
                    aria-label={`Delete message from ${message.username}`}
                    className="flex-shrink-0"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              ))
            ) : (
              <div className="text-center py-4 text-gray-500 dark:text-discord-gray-text">No messages to display.</div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default MessagesPage
