# Multi-Page React Application: User Directory

A responsive React application built to manage and view user information. This project demonstrates how to use **React Router** for seamless navigation between multiple pages and how to handle dynamic user data.

## 🚀 Live Demo
**Vercel Link:** [https://multi-page-react-routing-applicatio.vercel.app]

## ✨ Key Features

- **Home Page:** A welcoming landing page that explains the purpose of the User Directory.
- **User List:** A dedicated page displaying a list of users (John Doe, Jane Smith, etc.).
- **User Detail Page:** A dynamic route (`/users/:id`) that fetches the User ID from the URL and displays specific details like name and email.
- **About Page:** Provides details about the application's objective and technology.
- **Persistent Navigation:** A professional Navbar that stays at the top across all pages with active link highlighting.
- **Go Back Functionality:** Easy navigation to return to the Home or Users list from any sub-page.

## 🛠️ Technologies Used

- **React.js** (Functional Components & Hooks like `useParams`, `useNavigate`)
- **React Router Dom v6** (For Routing)
- **Tailwind CSS** (For Responsive Styling)

## 📁 Project Structure

```text
src/
├── components/
│   └── Navbar.jsx      # Navigation links (Home, About, Users)
├── pages/
│   ├── Home.jsx        # Landing page
│   ├── About.jsx       # App purpose & info
│   ├── Users.jsx       # List of all users
│   └── UserDetail.jsx  # Detailed view of a single user
├── App.jsx             # Main routing configuration
└── main.jsx            # Entry point
