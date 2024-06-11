from openai import OpenAI
import tiktoken
import os
from dotenv import load_dotenv

def __init__():
    load_dotenv()
    global client
    client = OpenAI()
    with open('./data/Prompts/SystemPrompt.txt', 'r') as f:
        global SYSTEM_PROMPT
        SYSTEM_PROMPT = f.read()

def query_gpt(prompt: str, gpt_temperature = 0, gpt_model = "gpt-3.5-turbo") -> str:
    completion = client.chat.completions.create(
      model= gpt_model,
      response_format={ "type": "json_object" },
      temperature = gpt_temperature,
      messages=[
        {"role": "system", "content": SYSTEM_PROMPT},
        {"role": "user", "content": prompt}
      ]
    )
    return completion.choices[0].message.content

def main():
    prompt = ""
    with open('./data/Prompts/Archery_Prompt.txt', 'r') as f:
        prompt = f.read()
    response = query_gpt(prompt, gpt_model = 'gpt-4o')
    print(response)
    with open("GenerationTest.txt", 'w') as f:
        for line in response:
            f.write(line)

if __name__ == '__main__':
    __init__()
    main()
