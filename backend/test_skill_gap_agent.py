from agents.skill_gap_agent import analyze_skill_gap


student_skills = """
Python
Machine Learning
Power BI
Data Analysis
React
"""

target_career = "Machine Learning Engineer"


result = analyze_skill_gap(
    student_skills=student_skills,
    target_career=target_career
)


print("\n--- CAREERPILOT SKILL GAP ANALYSIS ---\n")
print(result)