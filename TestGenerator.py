from openai import OpenAI
from dotenv import load_dotenv
import JsonProcessing as jp

def __init__():
    load_dotenv()
    global client
    client = OpenAI()
    with open('./data/Prompts/SystemPrompt.txt', 'r') as f:
        global SYSTEM_PROMPT
        SYSTEM_PROMPT = f.read()

def query_gpt(prompt: str, gpt_temperature = 0, gpt_model = 'gpt-4o') -> str:
    print('Querying GPT...')
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

def get_prompt(program_name: str):
    prompt = ''
    with open(f'./data/Prompts/{program_name}_Prompt.txt', 'r') as f:
        prompt = f.read()
    return prompt

def main():
    prompt = get_prompt('Archery')
    response = query_gpt(prompt)
    print('Writing response to files')
    jp.write_JSON('Archery', response)
    jp.write_testfile('Archery', response)

if __name__ == '__main__':
    __init__()
    main()
