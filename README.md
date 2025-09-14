# CareerCoachAI

A modern web application designed to assist users with career development and job search activities.

## Project Overview

This application provides AI-powered career coaching features including resume building, interview preparation, and career guidance tools.

## Tech Stack

- **Frontend**: Next.js with React components
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk
- **AI Integration**: Gemini API
- **Deployment**: Vercel

## Project Structure

```
├── actions/          # Server actions
├── app/             # Next.js app directory
├── components/      # React components
├── data/            # Data utilities and configurations
├── hooks/           # Custom React hooks
├── lib/             # Utility libraries
├── prisma/          # Database schema and migrations
├── public/          # Static assets
└── configuration files
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd CareerCoachAI
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Database
DATABASE_URL=your_postgresql_connection_string

# Gemini API
GEMINI_API_KEY=your_gemini_api_key

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
```

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000]to view the application.

## Features

- User authentication and authorization
- AI-powered career recommendations
- Resume building tools
- Interview preparation resources
- Industry insights and trends
- Responsive design for all devices

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Database Management

- `npx prisma studio` - Open Prisma Studio for database management
- `npx prisma generate` - Generate Prisma client
- `npx prisma db push` - Push schema changes to database

## Deployment

This application is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch
 
