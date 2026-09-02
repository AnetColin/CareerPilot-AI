import os
from dotenv import load_dotenv

from ibm_watsonx_ai import Credentials, APIClient
from ibm_watsonx_ai.foundation_models import ModelInference


# Load environment variables
load_dotenv()


# Get credentials
api_key = os.getenv("WATSONX_APIKEY")
project_id = os.getenv("WATSONX_PROJECT_ID")
url = os.getenv("WATSONX_URL")


# IBM watsonx.ai credentials
credentials = Credentials(
    url=url,
    api_key=api_key
)


# IBM watsonx.ai API client
api_client = APIClient(
    credentials,
    project_id=project_id
)


# Generation parameters
parameters = {
    "max_tokens": 700,
    "temperature": 0.4
}


# IBM Granite model
model = ModelInference(
    model_id="ibm/granite-4-h-small",
    api_client=api_client,
    project_id=project_id,
    params=parameters
)


def ask_granite(prompt):
    """
    Send a prompt to IBM Granite and return only the AI response text.
    """

    messages = [
        {
            "role": "system",
            "content": (
                "You are CareerPilot AI, an intelligent and supportive "
                "career counseling assistant for students. "
                "Provide personalized, practical, and structured career guidance. "
                "Do not make unrealistic guarantees about jobs or salaries."
            )
        },
        {
            "role": "user",
            "content": prompt
        }
    ]

    response = model.chat(messages=messages)

    # Extract only the generated text
    answer = response["choices"][0]["message"]["content"]

    return answer