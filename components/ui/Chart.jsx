"use client"
import React from 'react'
import { cn } from "../../lib/utils"

function Chart({ data, className, ...props }) {
  if (!data || data.length === 0) {
    return <div className="text-center text-gray-500 dark:text-discord-gray-text">No chart data available.</div>
  }

  const values = data.map((d) => d.members)
  const maxVal = Math.max(...values)
  const minVal = Math.min(...values)

  const width = 600
  const height = 180
  const padding = 30
  const chartWidth = width - 2 * padding
  const chartHeight = height - 2 * padding

  const xScale = (index) => padding + (index / (data.length - 1)) * chartWidth
  const yScale = (value) => {
    if (maxVal === minVal) return padding + chartHeight / 2
    return padding + chartHeight - ((value - minVal) / (maxVal - minVal)) * chartHeight
  }

  const points = data.map((d, i) => `${xScale(i)},${yScale(d.members)}`).join(" ")

  return (
    <div className={cn("w-full overflow-x-auto", className)} {...props}>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto" aria-labelledby="chartTitle chartDescription">
        <title id="chartTitle">Member Growth Over Time</title>
        <desc id="chartDescription">A line chart showing member growth per month.</desc>

        <line
          x1={padding}
          y1={padding + chartHeight}
          x2={padding + chartWidth}
          y2={padding + chartHeight}
          stroke="currentColor"
          className="text-gray-300 dark:text-discord-border-dark"
          strokeWidth="1"
        />

        <line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={padding + chartHeight}
          stroke="currentColor"
          className="text-gray-300 dark:text-discord-border-dark"
          strokeWidth="1"
        />

        {data.map((d, i) => (
          <text
            key={d.month}
            x={xScale(i)}
            y={height - padding / 2}
            textAnchor="middle"
            fontSize="10"
            fill="currentColor"
            className="text-gray-600 dark:text-discord-gray-text"
          >
            {d.month}
          </text>
        ))}

        <text
          x={padding / 2}
          y={padding + chartHeight}
          textAnchor="end"
          alignmentBaseline="middle"
          fontSize="10"
          fill="currentColor"
          className="text-gray-600 dark:text-discord-gray-text"
        >
          {minVal}
        </text>
        <text
          x={padding / 2}
          y={padding}
          textAnchor="end"
          alignmentBaseline="middle"
          fontSize="10"
          fill="currentColor"
          className="text-gray-600 dark:text-discord-gray-text"
        >
          {maxVal}
        </text>

        <polyline fill="none" stroke="currentColor" className="text-discord-blurple" strokeWidth="2" points={points} />

        {data.map((d, i) => (
          <circle
            key={d.month}
            cx={xScale(i)}
            cy={yScale(d.members)}
            r="3"
            fill="currentColor"
            className="text-discord-blurple"
          />
        ))}
      </svg>
    </div>
  )
}

export { Chart }
