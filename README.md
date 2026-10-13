# 🏥 Medical Camp Registration Portal

A simple and user-friendly web application that allows patients to register for medical camps online. The application provides a registration form and an admin dashboard to view submitted registrations.

## 🌐 Live Demo

**Live Website:** https://medical-camp-registration-portal-t98g.onrender.com/

**Admin Dashboard:** https://medical-camp-registration-portal-t98g.onrender.com/admin.html

> Note: The admin dashboard must be protected with authentication before displaying real patient information publicly.

## ✨ Features

- Patient registration form
- Patient details validation
- Registration data storage using JSON
- Admin dashboard to view registrations
- Total registration count
- Refresh registrations option
- Responsive and simple user interface
- Express.js backend API

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- JSON for data storage
- Render for deployment
- Git and GitHub for version control

## 📂 Project Structure

```text
Medical_Camp_Registration_Portal/
├── data/
│   └── registrations.json
├── admin.html
├── index.html
├── script.js
├── style.css
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## ⚙️ Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/surajchowdary2005/Medical_Camp_Registration_Portal.git
```

### 2. Open the project folder

```bash
cd Medical_Camp_Registration_Portal
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the application

```bash
npm start
```

### 5. Open in your browser

Main Website: http://localhost:3000/

Admin Dashboard: http://localhost:3000/admin.html

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/registrations` | Retrieve registrations |
| POST | `/api/registrations` | Submit a new registration |

## 💾 Data Storage

Registration details are stored in a JSON file at `data/registrations.json`.

**Deployment note:** Local JSON file storage may not persist reliably across Render deployments or restarts, depending on the service's filesystem configuration. Use a persistent disk or database for production data.

## 🔐 Security

- Validate all registration data on the server.
- Protect the admin dashboard with authentication and authorization.
- Do not expose patient personal information publicly.
- Use secure persistent storage for real patient records.

## 🚀 Deployment

The application is deployed using Render. Push changes to the connected GitHub repository to trigger a new deployment when automatic deployment is enabled.

## 👨‍💻 Author

**Suraj Chowdary**

GitHub: https://github.com/surajchowdary2005

## 📄 License

This project is intended for educational and learning purposes.
