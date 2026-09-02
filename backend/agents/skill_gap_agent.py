from services.granite_service import ask_granite


def analyze_skill_gap(student_skills, target_career):

    prompt = f"""
You are the Skill Gap Analysis Agent of CareerPilot AI.

Analyze the student's current skills and compare them with the
requirements of the selected target career.

Student Skills:
{student_skills}

Target Career:
{target_career}

Provide the analysis using exactly these sections:

1. CURRENT STRENGTHS
List the student's existing skills that are useful for the target career.

2. SKILL GAPS
List important skills that the student should develop.

3. PRIORITY SKILLS
Categorize the missing skills into:
- High Priority
- Medium Priority
- Low Priority

4. IMPROVEMENT SUGGESTIONS
Give practical suggestions for developing the missing skills.

5. READINESS ASSESSMENT
Briefly assess the student's current readiness for the target career.

Keep the response practical, personalized, and concise.
Do not guarantee employment.
"""

    response = ask_granite(prompt)

    return response