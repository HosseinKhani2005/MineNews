<!--
  README.md for MineNews – A Modern Minecraft News Platform
  Author: Hossein Khani
-->

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Redux_Toolkit-1.9-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="MIT License" />
</p>

<h1 align="center">⛏️ MineNews – A Modern Minecraft News Platform</h1>

<p align="center">
  <strong>Real-time news, guides, and community hub for Minecraft enthusiasts</strong>
  <br />
  <a href="https://hosseinkhani20.ir/">🔗 Live Demo</a>
  ·
  <a href="#-getting-started">🚀 Getting Started</a>
  ·
  <a href="#-key-technical-challenges--solutions">⚙️ Challenges</a>
  ·
  <a href="#-technologies-used">🛠️ Tech Stack</a>
</p>

<br />

![Project Screenshot](https://hosseinkhani20.ir/your-screenshot-path.png)  
*(Replace with an actual screenshot of your project)*

---

## 📖 Table of Contents

- [📌 Project Overview](#-project-overview)
- [✨ Key Features](#-key-features)
- [⚙️ Key Technical Challenges & Solutions](#️-key-technical-challenges--solutions)
  - [1. Google reCAPTCHA Integration](#1-google-recaptcha-integration)
  - [2. Authorization & Cookie Management](#2-authorization--cookie-management)
  - [3. Error Handling & Loading States](#3-error-handling--loading-states)
  - [4. Caching Hooks & Performance Optimization](#4-caching-hooks--performance-optimization)
  - [5. Responsive Design Mastery](#5-responsive-design-mastery)
  - [6. Auto-Login with Token Persistence](#6-auto-login-with-token-persistence)
  - [7. Dark Mode Implementation](#7-dark-mode-implementation)
- [🛠️ Technologies Used](#️-technologies-used)
- [🚦 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🙏 Acknowledgments](#-acknowledgments)

---

## 📌 Project Overview

**MineNews** is a full‑featured, modern web application tailored for the **Minecraft community**. It delivers the latest news, updates, guides, tutorials, and community events in a clean, responsive interface. The platform includes user authentication, comment systems, and real‑time content feeds.

This project was built as a comprehensive front‑end challenge to deepen my expertise in **React**, **Next.js**, state management (Redux Toolkit), performance optimization (caching hooks), and secure authentication flows. Every aspect – from UI/UX to security – has been carefully implemented to provide a seamless experience across all devices.

---

## ✨ Key Features

- ✅ **User Authentication** – Register, login, and logout with JWT-based sessions.
- ✅ **Auto-Login** – Persistent sessions using HTTP-only cookies.
- ✅ **Google reCAPTCHA** – Protects forms from spam and bots.
- ✅ **Dark Mode** – Toggle between light and dark themes (custom-built, no external library).
- ✅ **Responsive Design** – Fully optimized for desktops, tablets, and mobile phones.
- ✅ **Real-time News Feed** – Dynamic content updates with caching for performance.
- ✅ **Form Handling** – Powered by React Hook Form for efficient validation.
- ✅ **Toast Notifications** – Beautiful feedback via React Hot Toast.
- ✅ **Global State Management** – Redux Toolkit for predictable state.

---

## ⚙️ Key Technical Challenges & Solutions

This project pushed my front‑end skills to the next level. Below are the major challenges I encountered and how I solved them.

### 1. Google reCAPTCHA Integration
**Challenge** – Prevent spam and automated submissions on registration and comment forms.  
**Solution** – Integrated `react-google-recaptcha`. Configured the site key, generated a verification token on the client side, and sent it to the backend for validation. This ensured that only genuine users could post content.

### 2. Authorization & Cookie Management
**Challenge** – Securely manage user sessions without exposing tokens to XSS attacks.  
**Solution** – Used **JWT (JSON Web Tokens)** stored in **HTTP‑only cookies**. This prevents client‑side JavaScript from accessing the token, mitigating XSS risks. Learned how to set, retrieve, and expire cookies effectively for a stateless authentication flow.

### 3. Error Handling & Loading States
**Challenge** – Provide a smooth UX by gracefully handling API errors and asynchronous operations.  
**Solution** – Implemented a global error‑handling layer using `react-hot-toast` for user‑friendly notifications. Added comprehensive loading spinners and skeleton screens for all data‑fetching operations, eliminating UI jank and improving perceived performance.

### 4. Caching Hooks & Performance Optimization
**Challenge** – Reduce unnecessary API calls and boost rendering speed.  
**Solution** – Gained a deep understanding of memoization and caching hooks like `useMemo`, `useCallback`, and `React.memo`. Strategically cached news data, user profiles, and component states to minimise re‑renders, resulting in a snappier and more responsive interface.

### 5. Responsive Design Mastery
**Challenge** – Deliver a flawless experience on every screen size, from large desktops to compact phones.  
**Solution** – Adopted a **mobile‑first** approach using **Tailwind CSS**. Went beyond basic media queries, leveraging flexbox, grid, and Tailwind’s utility classes to achieve pixel‑perfect, adaptive layouts. This improved my understanding of responsive design principles significantly.

### 6. Auto‑Login with Token Persistence
**Challenge** – Automatically log in returning users if a valid token exists in cookies.  
**Solution** – On app initialisation, check for an authentication token in cookies. If present and valid, dispatch an API request to re‑authenticate the user and populate the Redux state. This provides a seamless “remember me” experience without requiring manual login.

### 7. Dark Mode Implementation
**Challenge** – Build a dark mode toggle without third‑party libraries.  
**Solution** – Initially implemented using CSS custom properties (variables) and React Context to manage the theme state. While this was an excellent learning exercise in theming and state management, I later discovered the `next-themes` library, which would have simplified the process. This taught me the value of researching existing solutions before reinventing the wheel.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **JavaScript (ES6+)** | Core programming language |
| **React 18** | UI library for building component‑based interfaces |
| **Next.js 14** | React framework with SSR, SSG, and file‑based routing |
| **Tailwind CSS 3** | Utility‑first CSS framework for rapid, responsive styling |
| **React Hook Form** | Efficient form handling and validation |
| **React Hot Toast** | Beautiful, customisable toast notifications |
| **Google reCAPTCHA** | Security against spam and bots |
| **Lucide React** | Clean, open‑source icon set |
| **Redux Toolkit** | Global state management with a predictable store |
| **TypeScript** *(optional)* | Type safety and better developer experience |

---

🙏 Acknowledgments
This project was a significant milestone in my journey as a Full‑Stack Developer. It encompassed a wide range of challenges – from security (reCAPTCHA, cookies) to performance (caching hooks) and responsive design. Building MineNews from the ground up has solidified my understanding of modern React, Next.js, and state management.

I am grateful to the open‑source community for the incredible tools and libraries that made this project possible.

<p align="center"> Built with ❤️ by <strong>Hossein Khani</strong> <br /> <a href="https://hosseinkhani20.ir/">🌐 Portfolio</a> · <a href="https://github.com/your-username">🐙 GitHub</a> · <a href="https://linkedin.com/in/your-profile">💼 LinkedIn</a> </p> ```
   ```bash
   git clone https://github.com/your-username/minenews.git
   cd minenews
