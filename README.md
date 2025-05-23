# S68_kavin_Capstone_SkillSwap
# SkillSwap

SkillSwap is a platform that connects people who want to teach and learn from each other. Exchange your expertise and grow together.

## Features

- User authentication (register, login, profile management)
- Skill matching based on what users can teach and want to learn
- Real-time messaging between users
- Dashboard with potential matches and activity feed
- Profile pages to showcase skills and experience

## Tech Stack

### Frontend
- React.js with Vite
- React Router for navigation
- Context API for state management
- Tailwind CSS for styling
- Formik and Yup for form handling and validation
- Socket.io client for real-time features

### Backend
- Node.js with Express
- MongoDB with Mongoose for data storage
- JWT for authentication
- Socket.io for real-time communication

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
```
git clone https://github.com/yourusername/skill-swap.git
cd skill-swap
```

2. Install dependencies
```
npm run install:all
```

3. Set up environment variables
```
# In the server directory, create a .env file based on .env.example
cp server/.env.example server/.env
# Edit the .env file with your MongoDB URI and JWT secret
```

4. Start the development servers
```
npm run dev
```

This will start both the frontend and backend servers concurrently.
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Project Structure

```
skill-swap/
├── client/                 # Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── context/        # Context API for state management
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── server/                 # Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
└── README.md
```

## API Endpoints

### Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Authenticate user and return JWT
- GET /api/auth/me - Get current user data

### Users
- GET /api/users/:id - Get user profile
- PUT /api/users/:id - Update user profile
- GET /api/users - Search users

### Skills
- GET /api/skills - List all skills
- POST /api/skills - Add a new skill
- GET /api/skills/search - Search skills

### Matches
- GET /api/matches - Get potential matches for a user

### Conversations
- GET /api/conversations - Get all conversations for current user
- GET /api/conversations/:id - Get a specific conversation
- POST /api/conversations - Create a new conversation

### Messages
- GET /api/messages/:conversationId - Get messages in a conversation
- POST /api/messages - Send a new message

## License

This project is licensed under the MIT License.
