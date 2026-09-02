from agents.profile_agent import analyze_profile
from agents.career_agent import recommend_careers
from agents.skill_gap_agent import analyze_skill_gap
from agents.roadmap_agent import generate_roadmap


def calculate_readiness_score(skills, projects, interests, target_career):
    """
    Calculates a basic career readiness score based on
    the student's provided profile information.
    """

    score = 40

    # Skills contribution
    skill_list = [
        skill.strip()
        for skill in skills.split(",")
        if skill.strip()
    ]

    score += min(len(skill_list) * 5, 25)

    # Projects contribution
    project_list = [
        project.strip()
        for project in projects.split(",")
        if project.strip()
    ]

    score += min(len(project_list) * 5, 15)

    # Interest contribution
    if interests.strip():
        score += 10

    # Target career contribution
    if target_career.strip():
        score += 10

    return min(score, 100)


def run_career_workflow(
    degree,
    semester,
    skills,
    interests,
    projects,
    target_career
):
    """
    Runs the complete CareerPilot AI multi-agent workflow.
    """

    # Agent 1: Analyze student profile
    profile_analysis = analyze_profile(
        degree=degree,
        semester=semester,
        skills=skills,
        interests=interests,
        projects=projects
    )

    # Agent 2: Recommend suitable careers
    career_recommendations = recommend_careers(
        profile_analysis
    )

    # Agent 3: Analyze skill gaps
    skill_gap_analysis = analyze_skill_gap(
        student_skills=skills,
        target_career=target_career
    )

    # Agent 4: Generate learning roadmap
    learning_roadmap = generate_roadmap(
        student_skills=skills,
        target_career=target_career,
        skill_gap_analysis=skill_gap_analysis
    )

    # Calculate career readiness score
    readiness_score = calculate_readiness_score(
        skills=skills,
        projects=projects,
        interests=interests,
        target_career=target_career
    )

    # Return complete AI report
    return {
        "career_readiness_score": readiness_score,
        "profile_analysis": profile_analysis,
        "career_recommendations": career_recommendations,
        "skill_gap_analysis": skill_gap_analysis,
        "learning_roadmap": learning_roadmap
    }