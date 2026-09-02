from agents.profile_agent import analyze_profile


result = analyze_profile(
    degree="B.Tech Computer Science and Engineering",
    semester="5",
    skills="Python, Machine Learning, Power BI, Data Analysis, React",
    interests="Artificial Intelligence, Data Science, Web Development",
    projects="""
    AI-Based Network Intrusion Detection System,
    College Placement and Student Outcome Analysis,
    AI Travel Planner
    """
)


print("\n--- CAREERPILOT PROFILE ANALYSIS ---\n")
print(result)