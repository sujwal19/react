💸 Expense Tracker (MERN)
A minimalist full-stack application to track income and expenses, built with the MERN stack and styled with Tailwind CSS.

🛠️ Tech Stack
Frontend: React (Vite), Tailwind CSS, Axios

Backend: Node.js, Express

Database: MongoDB Atlas

Deployment: Vercel

🚀 Getting Started

1. Install Dependencies
   In the root directory, run:

   npm install
   cd client && npm install

2. Setup Environment Variables
   Create a file at config/config.env and add:

   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongodb_atlas_uri

3. Run Locally
   From the root directory:

   npm run dev

📁 Folder Structure

    Plaintext
    ├── client/ # React (Vite) Frontend
    ├── config/ # Environment variables & DB config
    ├── controllers/ # API logic
    ├── models/ # Mongoose schemas
    ├── routes/ # Express API endpoints
    └── server.js # Main entry point

🌍 Production
This project is configured for Vercel.

Build the frontend: npm run build --prefix client.
Push to GitHub and connect to Vercel.
Add MONGO_URI and NODE_ENV=production to Vercel Environment Variables
