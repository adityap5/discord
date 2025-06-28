# Discord Server Admin Dashboard (Frontend Only)

This project is a frontend-only simulation of a Discord server administration dashboard, built with Next.js 14 (App Router), Tailwind CSS, and React Hooks/Context API. It demonstrates a custom UI implementation without relying on external component libraries, focusing on responsiveness, accessibility, and a Discord-like aesthetic.

## Approach

The dashboard is structured around Next.js's App Router, with distinct pages for different sections (Dashboard, Members, Roles, Messages). Global state management for theme and sidebar visibility is handled using React's Context API. All UI components, such as buttons, cards, tables, modals, and switches, are built from scratch using raw HTML elements and styled with Tailwind CSS to meet the "no UI libraries" requirement. Mock data is used throughout to simulate server statistics and user interactions. Framer Motion is integrated for smooth UI transitions and animations.

## Features

-   **Dashboard**: Displays key server metrics and a mock member growth chart.
-   **Members Page**: A searchable, paginated table of mock users with filtering and a modal for adding new members.
-   **Roles Page**: Lists server roles with toggle switches for visibility and an option to rename roles.
-   **Messages Page**: Shows a list of mock messages with a "Delete" action.
-   **Responsive Design**: Adapts to desktop, tablet, and mobile screen sizes, with a collapsible sidebar on smaller viewports.
-   **Accessibility**: Implemented with semantic HTML, ARIA attributes, and keyboard navigation support.
-   **Animations**: Smooth transitions powered by Framer Motion.
-   **Theme Toggle**: Switches between light and dark modes.

## Stack & Tools

-   **Framework**: Next.js 14+ (App Router)
-   **Styling**: Tailwind CSS
-   **Icons**: Lucide React
-   **State Management**: React Hooks, Context API
-   **Animations**: Framer Motion

## How to Run the Project

1.  **Clone the repository:**
    \`\`\`bash
    git clone <repository-url>
    cd discord-server-admin-dashboard
    \`\`\`
2.  **Install dependencies:**
    \`\`\`bash
    npm install
    # or
    yarn install
    \`\`\`
3.  **Run the development server:**
    \`\`\`bash
    npm run dev
    # or
    yarn dev
    \`\`\`
4.  **Open in your browser:**
    The application will be accessible at `http://localhost:3000`.

## Optional: Screenshots

(Placeholder for screenshots of the dashboard on different devices and themes)
