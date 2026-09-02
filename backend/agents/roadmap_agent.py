from services.granite_service import ask_granite


def generate_roadmap(student_skills, target_career, skill_gap_analysis):

    prompt = f"""
You are the Learning Roadmap Agent of CareerPilot AI.

Create a personalized learning roadmap for a student.

Student's Current Skills:
{student_skills}

Target Career:
{target_career}

Skill Gap Analysis:
{skill_gap_analysis}

Create a practical roadmap with exactly these sections:

1. CURRENT POSITION
Briefly describe the student's current level.

2. PHASE 1 - FOUNDATION
List the first concepts and skills the student should strengthen.

3. PHASE 2 - CORE SKILLS
List important technical skills required for the target career.

4. PHASE 3 - ADVANCED SKILLS
List advanced concepts and tools.

5. PHASE 4 - PROJECT BUILDING
Suggest 2-3 practical projects suitable for building a portfolio.

6. PHASE 5 - CAREER PREPARATION
Include resume, GitHub, LinkedIn, interview preparation, and portfolio suggestions.

7. FINAL ROADMAP SUMMARY
Provide a short motivational summary.

Keep the roadmap realistic and practical.
Do not guarantee employment or career success.
"""

    return ask_granite(prompt)