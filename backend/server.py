# backend/server.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
from pathlib import Path
from datetime import datetime
import os, smtplib
from email.mime.text import MIMEText

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017")
DB_NAME = os.getenv("DB_NAME", "test_database")

SMTP_HOST = os.getenv("SMTP_HOST")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER")
SMTP_PASS = os.getenv("SMTP_PASS")
TO_EMAIL  = os.getenv("TO_EMAIL")   # where you want to receive contact messages

app = FastAPI()

# CORS for your frontend
FRONTEND_ORIGIN = os.getenv("FRONTEND_ORIGIN", "*")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[FRONTEND_ORIGIN] if FRONTEND_ORIGIN != "*" else ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]

class ContactMessage(BaseModel):
    name: str = Field(..., min_length=1, max_length=200)
    email: EmailStr
    company: str | None = ""
    subject: str = Field(..., min_length=1, max_length=200)
    message: str = Field(..., min_length=1, max_length=5000)

def send_email(msg: ContactMessage):
    if not all([SMTP_HOST, SMTP_USER, SMTP_PASS, TO_EMAIL]):
        # Skip silently if email creds not set
        return
    body = (
        f"New portfolio inquiry\n\n"
        f"Name: {msg.name}\n"
        f"Email: {msg.email}\n"
        f"Company: {msg.company}\n"
        f"Subject: {msg.subject}\n\n"
        f"{msg.message}\n"
        f"\nSent at: {datetime.utcnow().isoformat()}Z"
    )
    mime = MIMEText(body)
    mime["Subject"] = f"[Portfolio] {msg.subject}"
    mime["From"] = SMTP_USER
    mime["To"] = TO_EMAIL

    with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as s:
        s.starttls()
        s.login(SMTP_USER, SMTP_PASS)
        s.send_message(mime)

@app.post("/api/contact")
async def create_contact(payload: ContactMessage):
    doc = payload.model_dump() | {"created_at": datetime.utcnow()}
    await db.contact_messages.insert_one(doc)
    send_email(payload)
    return {"ok": True}
