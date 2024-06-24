from openai import OpenAI
from dotenv import load_dotenv
import time
import argparse

def __init__():
    load_dotenv()
    global client
    client = OpenAI()
    with open('./data/Prompts/SystemPrompt.txt', 'r') as f:
        global SYSTEM_PROMPT
        SYSTEM_PROMPT = f.read()

def query_gpt(prompt: str, gpt_temperature = 0, gpt_model = 'gpt-4o-2024-05-13') -> str:
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

def get_names():
    names = []
    with open('program_names.txt', 'r') as f:
        names = f.readlines()
    for i in range(len(names)):
        names[i] = names[i].strip()
    return names

def write_JSON(program_name: str, generated: str):
    with open(f'./data/JSON/{program_name}_Tests.json', 'w') as f:
        for line in generated:
            f.write(line)

def main():
    parser = argparse.ArgumentParser(description='Querys the large language model for the programs specified')
    parser.add_argument('-n', '--names', action='extend', type=str, nargs='+', help='names of the programs')
    names = parser.parse_args().names
    if names is None:
        names = get_names()
    for program_name in names:
        print(f'Generating tests for {program_name}')
        prompt = get_prompt(program_name)
        response = query_gpt(prompt)
        print('Writing response to files')
        write_JSON(program_name, response)
        print('Waiting for 10 seconds...')
        time.sleep(10)


if __name__ == '__main__':
    __init__()
    main()
