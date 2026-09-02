from agents.profile_agent import analyze_profile
from agents.career_agent import recommend_careers


# Step 1: Analyze the student profile
profile_analysis = analyze_profile(
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


# Step 2: Send profile analysis to Career Agent
career_recommendations = recommend_careers(profile_analysis)


print("\n--- STUDENT PROFILE ANALYSIS ---\n")
print(profile_analysis)

print("\n--- CAREER RECOMMENDATIONS ---\n")
print(career_recommendations)