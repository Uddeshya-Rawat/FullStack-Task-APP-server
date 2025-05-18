# Task Management App – Server

This is the backend server for the **Task Management App**, built using **Node.js**, **Express**, and **MongoDB (Mongoose)**. It handles API endpoints for creating, reading, updating, and deleting tasks.

---

## 📦 Tech Stack

- **Node.js** – JavaScript runtime environment
- **Express** – Web framework for Node.js
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **CORS** – Middleware for handling Cross-Origin Resource Sharing
- **dotenv** – For environment variable management
- **nodemon** – Dev tool for auto-restarting server on changes

---

## 📂 Folder Structure

```bash
├── CONTROLLERS/ # Controller functions for APIs
├── MODELS/ # Mongoose schema and models
├── .env # Environment variables
├── package.json
└── README.md
├── server.js # Main server file

```

## 📌 Features

- 🌐 Connects to MongoDB using Mongoose
- 📤 API endpoints to:
  - Create a task
  - Read all tasks
  - Update task status (e.g., mark as completed)
  - Delete a task
- 🔄 Cross-Origin support for frontend integration using `cors`

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Uddeshya-Rawat/FullStack-Task-APP-server.git   ## clone the file    
npm install    ## install node modules
npm install nodemon express cors mongoose dotenv  ## get these dependencies
cd server     ## change directory to server.js

```

### 2. Create a Database and  add cluster URL in .env file

```bash
  MONGO_URI=<mongodb_url>
```

### 3. Start Server

```bash
   npm start 
```



### API ENDPOINTS
| Method | Endpoint          | Description         |
| ------ | ----------------- | ------------------- |
| POST   | `/createTask`     | Create a new task   |
| GET    | `/getTasks`       | Get all tasks       |
| DELETE | `/deleteTask/:id` | Delete a task by ID |
| PUT    | `/updateTask/:id` | Update task status  |



### DEPENDENCIES
```json
{
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.5.0",
    "express": "^5.1.0",
    "mongoose": "^8.14.3",
    "nodemon": "^3.1.10"
  },
  "scripts": {
    "start": "nodemon server.js"
  }
}
```


## 👤 Author

 
📧 Email: [uddeshyarawat4@gmail.com](mailto:uddeshyarawat4@gmail.com)





