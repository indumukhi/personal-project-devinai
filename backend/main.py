import json
from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr

app = FastAPI(title="Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

CONTACTS_FILE = Path(__file__).parent / "contacts.json"


class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    message: str


@app.get("/api/health")
def health():
    return {"status": "ok"}


@app.post("/api/contact")
def create_contact(contact: ContactRequest):
    contacts: list[dict] = []
    if CONTACTS_FILE.exists():
        contacts = json.loads(CONTACTS_FILE.read_text())

    contacts.append(contact.model_dump())
    CONTACTS_FILE.write_text(json.dumps(contacts, indent=2))

    return {"message": "Contact saved successfully"}
