from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from career_workflow import run_career_workflow


app = FastAPI(
    title="CareerPilot AI",
    description="AI-Powered Agentic Career Counseling Companion",
    version="1.0.0"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173",
    "https://career-pilot-dn8rxgopb-anetcolins-projects.vercel.app",
    "https://career-pilot-ai-sigma-six.vercel.app",
],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class StudentProfile(BaseModel):
    degree: str
    semester: str
    skills: str
    interests: str
    projects: str
    target_career: str


@app.get("/")
def home():
    return {
        "message": "Welcome to CareerPilot AI",
        "status": "Backend is running"
    }


@app.post("/analyze")
def analyze_career(profile: StudentProfile):

    result = run_career_workflow(
        degree=profile.degree,
        semester=profile.semester,
        skills=profile.skills,
        interests=profile.interests,
        projects=profile.projects,
        target_career=profile.target_career
    )

    return result