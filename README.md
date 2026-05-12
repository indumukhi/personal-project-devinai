# Indumukhi — Personal Portfolio

A personal portfolio website built with **React 18 + Vite + Tailwind CSS** (frontend) and **FastAPI** (backend).
<img width="1900" height="856" alt="image" src="https://github.com/user-attachments/assets/7218c965-16a6-4700-8582-44c4358a7446" />
<img width="1873" height="959" alt="image" src="https://github.com/user-attachments/assets/29bc21b9-b5cc-4bd0-8ec5-6c2aa2097ff0" />

<img width="1865" height="928" alt="image" src="https://github.com/user-attachments/assets/8dac0206-8291-498b-a938-23ec84b49895" />

<img width="1807" height="834" alt="image" src="https://github.com/user-attachments/assets/48504522-7727-4c4c-8ac3-2269b09b5ca8" />

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
