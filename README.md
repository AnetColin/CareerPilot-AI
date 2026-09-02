
# CareerPilot AI 🤖🎓

> **An AI-Powered Agentic Career Counseling Companion built using IBM Granite, watsonx.ai, FastAPI, and React.**

CareerPilot AI is an intelligent career counseling system designed to help students identify suitable career paths based on their **education, skills, interests, projects, and career goals**.

The system uses a **multi-agent AI workflow** powered by **IBM Granite** to analyze a student's profile, recommend career paths, identify skill gaps, and generate a personalized learning roadmap.

---

 ## 🌐 Live Demo
🔗 Frontend: https://career-pilot-dn8rxgopb-anetcolins-projects.vercel.app/


🔗 Backend API: https://careerpilot-ai-backend-uydp.onrender.com/


## 🌟 Features

### 🤖 Multi-Agent AI System

CareerPilot AI uses four specialized AI agents:

#### 👤 Profile Analysis Agent

Analyzes the student's:

* Degree
* Semester
* Technical skills
* Interests
* Academic or personal projects

#### 🎯 Career Recommendation Agent

Suggests suitable career paths based on the student's profile and background.

#### 📊 Skill Gap Analysis Agent

Identifies important skills the student should develop for their target career.

#### 🗺️ Learning Roadmap Agent

Generates a personalized roadmap to help students progress toward their chosen career goal.

---

### 📈 Career Readiness Score

CareerPilot AI calculates a **Career Readiness Score out of 100** based on the student's profile information.

The score considers factors such as:

* Skills provided
* Projects completed
* Career interests
* Target career goal

---

### ⚡ AI Agent Processing Visualization

While the AI analyzes the student's profile, the frontend displays the progress of the multi-agent workflow:

```text
Profile Agent
     ↓
Career Agent
     ↓
Skill Gap Agent
     ↓
Roadmap Agent
```

This provides an interactive visualization of the agentic AI workflow.

---

### 📄 Download Career Report as PDF

Users can download their complete AI-generated career analysis as a PDF report.

The report includes:

* Profile Analysis
* Career Recommendations
* Skill Gap Analysis
* Learning Roadmap
* Career Readiness Score

---

## 🏗️ System Architecture

```text
                    ┌──────────────────┐
                    │      React       │
                    │    Frontend      │
                    └────────┬─────────┘
                             │
                             │ Student Profile
                             ▼
                    ┌──────────────────┐
                    │     FastAPI      │
                    │     Backend      │
                    └────────┬─────────┘
                             │
                             ▼
              ┌────────────────────────────┐
              │    CareerPilot Workflow    │
              └─────────────┬──────────────┘
                            │
       ┌────────────────────┼────────────────────┐
       ▼                    ▼                    ▼
┌──────────────┐    ┌──────────────┐    ┌────────────────┐
│   Profile    │    │    Career    │    │   Skill Gap    │
│    Agent     │    │    Agent     │    │     Agent      │
└──────┬───────┘    └──────┬───────┘    └───────┬────────┘
       │                   │                    │
       └───────────────────┼────────────────────┘
                           ▼
                  ┌─────────────────┐
                  │ Roadmap Agent   │
                  └────────┬────────┘
                           │
                           ▼
                  ┌─────────────────┐
                  │   IBM Granite   │
                  │     watsonx     │
                  └─────────────────┘
```

---

# 🛠️ Technology Stack

## Frontend

* React
* Vite
* CSS
* React Markdown
* jsPDF
* html2canvas

## Backend

* Python
* FastAPI
* Pydantic
* Uvicorn

## Artificial Intelligence

* IBM watsonx.ai
* IBM watsonx Runtime
* IBM Granite Foundation Model
* Multi-Agent AI Workflow

---

# 📂 Project Structure

```text
CareerPilot-AI/
│
├── backend/
│   │
│   ├── agents/
│   │   ├── profile_agent.py
│   │   ├── career_agent.py
│   │   ├── skill_gap_agent.py
│   │   └── roadmap_agent.py
│   │
│   ├── services/
│   │   └── granite_service.py
│   │
│   ├── career_workflow.py
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   │
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

# ⚙️ Installation and Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/AnetColin/CareerPilot-AI.git
```

Move into the project directory:

```bash
cd CareerPilot-AI
```

---

# 🔧 Backend Setup

Move to the backend folder:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the virtual environment.

### Windows

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

## 🔑 IBM watsonx Configuration

Create a `.env` file inside the `backend` folder.

Example:

```env
IBM_CLOUD_API_KEY=your_ibm_cloud_api_key
IBM_PROJECT_ID=your_watsonx_project_id
```

⚠️ Never upload your API key to GitHub.

Make sure your `.gitignore` contains:

```text
.env
venv/
__pycache__/
```

---

# 🚀 Run the Backend

From the `backend` directory:

```bash
uvicorn main:app --reload
```

The backend will run at:

```text
http://127.0.0.1:8000
```

API documentation will be available at:

```text
http://127.0.0.1:8000/docs
```

---

# 🎨 Frontend Setup

Open another terminal and move to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The application will typically run at:

```text
http://localhost:5173
```

---

# 🔄 How It Works

### Step 1

The student enters:

* Degree
* Semester
* Skills
* Interests
* Projects
* Target Career

### Step 2

The frontend sends the profile to the FastAPI backend.

### Step 3

The backend runs the multi-agent workflow.

### Step 4

The Profile Agent analyzes the student's academic and technical background.

### Step 5

The Career Agent recommends suitable career paths.

### Step 6

The Skill Gap Agent identifies missing or important skills.

### Step 7

The Roadmap Agent generates a personalized learning roadmap.

### Step 8

The AI-generated report is returned to the React frontend.

### Step 9

The student can view their:

* Career Readiness Score
* Career Recommendations
* Skill Gap Analysis
* Personalized Learning Roadmap

### Step 10

The complete report can be downloaded as a PDF.

---

# 🤖 Multi-Agent Workflow

```text
Student Profile
       │
       ▼
Profile Agent
       │
       ▼
Career Agent
       │
       ▼
Skill Gap Agent
       │
       ▼
Roadmap Agent
       │
       ▼
IBM Granite AI
       │
       ▼
Personalized Career Report
```

---

# 🎯 Key Objectives

* Provide personalized career guidance for students.
* Identify suitable career opportunities based on student skills.
* Detect skill gaps between current abilities and career goals.
* Generate personalized learning roadmaps.
* Reduce dependency on traditional one-to-one career counseling.
* Demonstrate the use of Agentic AI in education.
* Integrate IBM Granite into an AI-powered application.

---

# 🔮 Future Improvements

Potential future enhancements include:

* Student login and authentication
* Saving career reports
* Career trend analysis
* Job market integration
* Resume analysis
* Skill recommendation tracking
* Progress dashboards
* Multilingual career counseling
* Personalized course recommendations

---

# 🧠 IBM Technologies Used

This project uses IBM technologies for AI-powered career guidance:

* **IBM watsonx.ai**
* **IBM watsonx Runtime**
* **IBM Granite Foundation Model**
* **IBM Cloud Lite Services**

IBM Granite is used to generate intelligent responses for the different agents in the CareerPilot AI workflow.

---

# 👨‍💻 Author

**Anet Colin Rockey**

Computer Science Engineering Student

🔗 GitHub: https://github.com/AnetColin/CareerPilot-AI.git

🔗 LinkedIn: https://www.linkedin.com/in/anetrockey

---

# 📜 License

This project is created for **educational and academic purposes**.

---

## ⭐ If you like this project

Give the repository a ⭐ on GitHub!

