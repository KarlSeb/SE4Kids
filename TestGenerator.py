from openai import OpenAI
from dotenv import load_dotenv
import time
import argparse
from pathlib import Path

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
    second_prompt = None
    path = Path(f'./data/Prompts/{program_name}_Prompt.txt')
    path2 = Path(f'./data/Prompts/{program_name}_Prompt2.txt')
    if path.exists():
        with open(path, 'r') as f:
            prompt = f.read()
    else:
        raise Exception(f'No prompt file for program name {program_name}')
    if path2.exists():
        with open(path2, 'r') as f:
            second_prompt = f.read()
    return prompt, second_prompt

def get_names():
    names = []
    with open('program_names.txt', 'r') as f:
        names = f.readlines()
    for i in range(len(names)):
        names[i] = names[i].strip()
    return names

def write_JSON(program_name: str, generated: str):
    generated = generated.replace('  ]\n}{\n  "tests": [', ',')
    generated = generated.replace('  ]\n}\n{\n  "tests": [', ',')
    with open(f'./data/Tests/JSON/{program_name}_Tests.json', 'w') as f:
        for line in generated:
            f.write(line)

def generate_tests(names):
    for program_name in names:
        print(f'Generating tests for {program_name}')
        prompt, second_prompt = get_prompt(program_name)
        response = query_gpt(prompt)
        if second_prompt != None:
            response = response + query_gpt(second_prompt)
        print('Writing response to files')
        write_JSON(program_name, response)
        print('Waiting for 10 seconds...')
        time.sleep(10)

def main():
    parser = argparse.ArgumentParser(description='Querys the large language model for the programs specified')
    parser.add_argument('-n', '--names', action='extend', type=str, nargs='+', help='names of the programs')
    names = parser.parse_args().names
    if names is None:
        names = get_names()
    generate_tests(names)


if __name__ == '__main__':
    __init__()
    main()
