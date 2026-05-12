---
name: testing-portfolio
description: Test the portfolio website end-to-end. Use when verifying frontend sections, contact form, or backend API changes.
---

## Local Setup

1. Start the backend:
   ```bash
   cd backend && source venv/bin/activate && uvicorn main:app --reload --port 8000
   ```
2. Start the frontend (in a separate shell):
   ```bash
   cd frontend && npm run dev
   ```
3. The frontend runs on `http://localhost:5173` and proxies `/api` requests to `http://localhost:8000` via Vite config.

## Test Checklist

### 1. Section Rendering
- Open `http://localhost:5173`
- **Hero**: Verify heading "Indumukhi", subtitle "Senior Gen AI Developer", tagline "Full Stack Engineer", and "View Projects" CTA button
- **About** (`#about`): Verify "About Me" heading, bio paragraph, and 5 skill badges (Python, FastAPI, React, LangChain, Docker)
- **Projects** (`#projects`): Verify 3 project cards with titles, descriptions, tech tags, and GitHub links
- **Contact** (`#contact`): Verify form with Name, Email, Message fields and "Send Message" button

### 2. Navigation
- Click "View Projects" CTA in Hero — page should smooth-scroll to Projects section
- Navbar links (About, Projects, Contact) should smooth-scroll to respective sections

### 3. Contact Form E2E
- Delete `backend/contacts.json` before testing to start fresh
- Fill in Name, Email, Message fields and click "Send Message"
- Expect: green "Message sent successfully!" text appears, form fields clear
- Verify `backend/contacts.json` contains the submitted data with correct name, email, and message

### 4. Backend Health Check
- `curl http://localhost:8000/api/health` should return `{"status":"ok"}` with HTTP 200

### 5. Dark Theme
- Page should have dark background (gray-950), white headings, purple accents
- Navbar should have dark translucent background with backdrop blur

## Tips
- The Vite proxy handles `/api` routing in dev mode, so contact form submissions from the frontend go through `http://localhost:5173/api/contact` which proxies to the backend
- `contacts.json` is gitignored — it's created at runtime in the `backend/` directory
- Backend uses Pydantic `EmailStr` for email validation — invalid emails will return 422

## Devin Secrets Needed
None — this app runs fully locally with no external services.
