import React from 'react'
import { render, screen } from '@testing-library/react'
import { DashboardLayout } from '../components/layout/DashboardLayout'
import { SidebarProvider } from '../context/SidebarContext'
import { ThemeProvider } from '../context/ThemeContext'
describe('DashboardLayout', () => {
  it('renders children correctly', () => {
    render(
        <ThemeProvider>

        <SidebarProvider>


      <DashboardLayout>
        <div>Test Child</div>
      </DashboardLayout>
        </SidebarProvider>
        </ThemeProvider>
    )
    expect(screen.getByText('Test Child')).toBeInTheDocument()
  })
})
