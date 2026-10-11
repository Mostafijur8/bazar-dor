# 🛒 বাজার দর | BazarDor

**BazarDor** is a web-based application designed to help users explore market prices and make informed shopping decisions. It provides a user-friendly interface for checking product prices and accessing market-related information.

## ✨ Key Features

- **📊 Market Price Information** — Explore product prices and market-related information.
- **🔐 User Authentication** — Sign up and sign in securely using email and password.
- **🌐 Social Login** — Authenticate easily using Google and GitHub.
- **📱 Responsive Design** — Enjoy a smooth experience across desktop, tablet, and mobile devices.
- **⚡ Modern Web Experience** — Fast, interactive, and user-friendly interface built with modern web technologies.

## 🛠️ Technologies Used

- **Next.js** — React framework for building the web application.
- **React** — Component-based user interface development.
- **TypeScript** — Type-safe JavaScript development.
- **Tailwind CSS** — Utility-first styling for responsive layouts.
- **Better Auth** — Authentication and session management.
- **MongoDB** — Database for storing application data.
- **GitHub & Google OAuth** — Social authentication providers.
- **Vercel** — Application deployment and hosting.

## 🚀 Live Demo

Visit BazarDor: [https://bazar-dor-sepia-nine.vercel.app](https://bazar-dor-sepia-nine.vercel.app)

## 💻 Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB database

### Installation

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Navigate to the project directory:

   ```bash
   cd bazar-dor
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and configure the required environment variables.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔑 Environment Variables

Configure the following variables in your local `.env` file:

```env
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_APP_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

**Note:** Replace the placeholder values with your actual credentials. Never commit secrets or API credentials to GitHub.

## 📄 License

This project is developed for educational and practical purposes.
