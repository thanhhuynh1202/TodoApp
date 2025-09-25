# 📝 ToDoX - Fullstack Task Management App

Ứng dụng quản lý công việc (**ToDo App**) được xây dựng với **Node.js, Express.js, MongoDB, ReactJS, Tailwind v4, Shadcn UI**.

---

## 🚀 Công nghệ sử dụng
- **Backend**
  - Node.js
  - Express.js
  - MongoDB (Mongoose)
- **Frontend**
  - ReactJS (Vite)
  - TailwindCSS v4
  - Shadcn UI
  - Axios

---

## 📂 Cấu trúc thư mục

### Backend (`/backend`)
backend/
│── src/
│ ├── config/ # Cấu hình DB
│ ├── controllers/ # Xử lý logic (tasksControllers.js)
│ ├── models/ # Định nghĩa schema (Task.js)
│ ├── routes/ # Định nghĩa API routes
│ └── server.js # Điểm khởi chạy Express server
│
├── package.json

### Frontend (`/frontend`)
frontend/
│── public/
│── src/
│ ├── assets/
│ ├── components/
│ │ └── ui/ # Các component UI (TaskCard, TaskList, AddTask,...)
│ ├── lib/ # axios.js, data.js
│ ├── pages/ # HomePage, NotFound
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── package.json

---
