# Indumukhi — Personal Portfolio

A personal portfolio website built with **React 18 + Vite + Tailwind CSS** (frontend) and **FastAPI** (backend).

## Project Structure

```
├── frontend/          # React + Vite + Tailwind CSS
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── backend/           # FastAPI
│   ├── main.py
│   └── requirements.txt
└── README.md
```

## Setup

### Prerequisites

- **Node.js** >= 18
- **Python** >= 3.11

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

The API starts on **http://localhost:8000**.

#### Endpoints

| Method | Path           | Description                        |
| ------ | -------------- | ---------------------------------- |
| GET    | `/api/health`  | Health check — returns `{"status": "ok"}` |
| POST   | `/api/contact` | Save a contact message to `contacts.json` |

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The app starts on **http://localhost:5173**.

The Vite dev server proxies `/api` requests to `http://localhost:8000`.

## Sections

1. **Hero** — Name, title, tagline, and a CTA button.
2. **About** — Short bio and skills list.
3. **Projects** — Three project cards with tech tags and GitHub links.
4. **Contact** — Form that POSTs to the FastAPI backend.

## Tech Stack

- React 18, Vite, Tailwind CSS
- FastAPI, Pydantic, Uvicorn
