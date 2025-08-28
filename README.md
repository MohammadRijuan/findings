# Findings - Next.js + Firebase Product App

**Live Demo:** [https://findings.vercel.app](https://findings.vercel.app)

---

## Overview

Findings is a modern, responsive product management application built with **Next.js 15 (App Router)** and **Firebase**. It features both public and protected pages with authentication via **Firebase Google Sign-In**.

Users can:

- Browse a landing page with hero, product highlights, and footer.
- View a list of products fetched from Firebase.
- See detailed information for individual products.
- Log in using Google and access a protected page to add new products.

---

## Core Features

### 1. Landing Page (`/`)
- **Sections:** Navbar, Hero, Product Highlights, Footer
- Navigation to Login and Products
- Publicly accessible

### 2. Login Page (`/login`)
- Google authentication via Firebase
- Redirects to `/products` on successful login

### 3. Product List Page (`/products`)
- Publicly accessible
- Fetches products from Firebase Firestore
- Shows product name, description, price, and "View Details" button

### 4. Product Details Page (`/products/[id]`)
- Displays full details of a single product
- Publicly accessible

### 5. Protected Add Product Page (`/add-product`)
- Only accessible when logged in
- Form to add a new product (name, description, price)
- Stores data in Firebase Firestore
- Shows success toast after adding

### Optional Enhancements
- Theme toggle (light/dark mode)
- Responsive design
- Loading spinners and toast notifications

---

## Technologies Used
- **Next.js 15** (App Router)
- **React**
- **Firebase** (Auth & Firestore)
- **Tailwind CSS** for styling
- **Vercel** for deployment

---

## Folder Structure

