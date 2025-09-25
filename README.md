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

## 📁 Cấu trúc thư mục
```tes
TodoApp/
│── backend/     # Source code backend (Node.js + Express + MySQL)
│── frontend/    # Source code frontend (ReactJS)
│── package.json # Script quản lý build & start
```
### Backend (`/backend`)
```test
backend/
│── src/
│ ├── config/ # Cấu hình DB
│ ├── controllers/ # Xử lý logic (tasksControllers.js)
│ ├── models/ # Định nghĩa schema (Task.js)
│ ├── routes/ # Định nghĩa API routes
│ └── server.js # Điểm khởi chạy Express server
│
├── package.json
```
### Frontend (`/frontend`)
```test
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
```
---
## ⚙️ Cài đặt & Chạy dự án

### 1. Clone repo
```bash
git clone https://github.com/thanhhuynh1202/TodoApp
cd TodoApp
```
### 2. Cài đặt dependencies & build frontend
```bash
npm run build
```
### 3. Chạy dự án
```bash
npm run start
```
Sau đó mở [http://localhost:5001](http://localhost:5001) để xem ứng dụng.
## 🌐 API Backend (Express + MongoDB)

| Method | Endpoint       | Mô tả                                                |
|--------|----------------|------------------------------------------------------|
| GET    | `/api/tasks`   | Lấy tất cả task (có filter: today, week, month, all) |
| POST   | `/api/tasks`   | Tạo task mới                                         |
| PUT    | `/api/tasks/:id` | Cập nhật task                                      |
| DELETE | `/api/tasks/:id` | Xóa task                                           |

