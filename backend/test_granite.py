from services.granite_service import ask_granite


question = """
I am a Computer Science student with skills in Python,
Machine Learning, Power BI, and Data Analysis.

Suggest three suitable career paths for me.

For each career path provide:
1. Career name
2. Why it matches my skills
3. Important skills I should learn next

Keep the response structured and concise.
"""


response = ask_granite(question)

print("\n--- CAREERPILOT AI RESPONSE ---\n")
print(response)


response = ask_granite(question)

print("\n--- CAREERPILOT AI RESPONSE ---\n")
print(response)