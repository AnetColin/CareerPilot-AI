from career_workflow import run_career_workflow


result = run_career_workflow(
    degree="B.Tech Computer Science and Engineering",
    semester="5",
    skills="Python, Machine Learning, Power BI, Data Analysis, React",
    interests="Artificial Intelligence, Data Science, Web Development",
    projects="""
    AI-Based Network Intrusion Detection System,
    College Placement and Student Outcome Analysis,
    AI Travel Planner
    """,
    target_career="Machine Learning Engineer"
)


print("\n========== CAREERPILOT AI COMPLETE REPORT ==========\n")

print("----- PROFILE ANALYSIS -----\n")
print(result["profile_analysis"])

print("\n----- CAREER RECOMMENDATIONS -----\n")
print(result["career_recommendations"])

print("\n----- SKILL GAP ANALYSIS -----\n")
print(result["skill_gap_analysis"])

print("\n----- LEARNING ROADMAP -----\n")
print(result["learning_roadmap"])

print("\n========== END OF REPORT ==========")