from services.granite_service import ask_granite


def recommend_careers(profile_analysis):

    prompt = f"""
You are the Career Recommendation Agent of CareerPilot AI.

Based on the following student profile analysis:

{profile_analysis}

Recommend the 3 most suitable career paths.

For each career path, provide:

1. CAREER NAME
2. MATCH LEVEL (Excellent Match / Strong Match / Good Match)
3. WHY IT MATCHES
4. KEY SKILLS REQUIRED
5. NEXT STEP FOR THE STUDENT

Finally, provide a section called:

BEST OVERALL RECOMMENDATION

Choose the career path that appears most suitable based on
the student's skills, interests, and projects.

Keep the response personalized, practical, and concise.
Do not guarantee employment.
"""

    response = ask_granite(prompt)

    return response