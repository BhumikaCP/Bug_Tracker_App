# 🐛 Bug Tracker App

A full-stack web application for reporting, updating, and managing bugs using a Node.js + Express backend, SQLite database, and a clean React frontend.

---

## 🚀 Features

- Submit new bug reports with title, description, severity, and status
- View all reported bugs in a clean UI
- Update or delete existing bugs
- SQLite-powered backend with RESTful API
- React frontend with a black & purple theme
- Clean, modular code structure

---

## 🧱 Tech Stack

### Backend
- **Node.js** + **Express**
- **SQLite** (via `sqlite3` npm package)
- RESTful API with full CRUD support

### Frontend
- **React**
- Custom styles with responsive layout
- Components for bug form & bug list

---

## 📂 Project Structure

```

bug-tracker-app/
│
├── backend/
│   ├── controllers/
│   │   └── bugController.js
│   ├── db/
│   │   └── db.js
│   ├── routes/
│   │   └── bugRoutes.js
│   └── index.js
│
├── frontend/
│   └── bug-tracker-frontend/
│       ├── src/
│       │   ├── components/
│       │   │   ├── BugForm.js
│       │   │   └── BugList.js
│       │   ├── styles/
│       │   │   └── App.css
│       │   └── App.js
│       └── package.json

````

---

## ⚙️ Getting Started

### 🐘 Backend Setup

1. Clone the repo and navigate to the backend folder:

```bash
git clone https://github.com/your-username/bug-tracker-app.git
cd bug-tracker-app/backend
````

2. Install dependencies:

```bash
npm install
```

3. Start the backend server:

```bash
node index.js
```

> This will start your Express server at `http://localhost:3000` and create `bugtracker.db` if it doesn't exist.

---

### 💻 Frontend Setup

1. Navigate to the frontend directory:

```bash
cd ../frontend/bug-tracker-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the frontend:

```bash
npm start
```

> App will be live at `http://localhost:3001` [backend runs at 3000]

---

## 📬 API Endpoints

| Method | Endpoint    | Description      |
| ------ | ----------- | ---------------- |
| POST   | `/bugs`     | Create a new bug |
| GET    | `/bugs`     | Fetch all bugs   |
| GET    | `/bugs/:id` | Get a bug by ID  |
| PUT    | `/bugs/:id` | Update a bug     |
| DELETE | `/bugs/:id` | Delete a bug     |

### Bug Object Format

```json
{
  "title": "String",
  "description": "String",
  "severity": "Low | Medium | High",
  "status": "Open | In Progress | Resolved | Closed"
}
```


## 🧪 Testing the API

You can test the backend using tools like:

* **Postman**
* **curl** (example below):

```
curl -X POST http://localhost:3000/bugs \
  -H "Content-Type: application/json" \
  -d '{"title":"UI Bug","description":"Button misaligned","severity":"Medium","status":"Open"}'
```


## 🖌️ Frontend Design

* Black & purple theme
* Responsive cards for each bug
* Alerts for user feedback on creation/deletion
* Clear UI separation of form & list components


## 📦 Dependencies

### Backend

* express
* sqlite3
* dotenv (optional)

### Frontend

* react
* react-dom
* custom CSS (no UI library used)


## 📌 Future Improvements

* ✏️ Edit bugs via frontend
* 📄 API documentation (Swagger/Markdown)
* 📲 Deploy backend (e.g., Render) and frontend (e.g., Vercel)
* ✅ Toast notifications (e.g., react-toastify)
* 🔒 User authentication (optional)
