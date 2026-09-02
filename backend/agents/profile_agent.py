from services.granite_service import ask_granite


def analyze_profile(degree, semester, skills, interests, projects):

    prompt = f"""
You are the Profile Analysis Agent of CareerPilot AI.

Analyze the following student profile:

Degree: {degree}
Semester: {semester}

Skills:
{skills}

Interests:
{interests}

Projects:
{projects}

Provide a structured career profile with exactly these sections:

1. PROFILE SUMMARY
2. TECHNICAL STRENGTHS
3. INTEREST AREAS
4. SUITABLE CAREER DOMAINS
5. AREAS FOR IMPROVEMENT

Keep the analysis personalized, practical, and concise.
Do not guarantee employment or career success.
"""

    response = ask_granite(prompt)

    return response