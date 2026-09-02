from agents.skill_gap_agent import analyze_skill_gap
from agents.roadmap_agent import generate_roadmap


student_skills = """
Python
Machine Learning
Power BI
Data Analysis
React
"""

target_career = "Machine Learning Engineer"


# First identify skill gaps
skill_gap_analysis = analyze_skill_gap(
    student_skills,
    target_career
)


# Generate personalized roadmap
roadmap = generate_roadmap(
    student_skills,
    target_career,
    skill_gap_analysis
)


print("\n--- CAREERPILOT LEARNING ROADMAP ---\n")
print(roadmap)