import json
import argparse

def extract_name(code:str):
    name = code.split('const ')[1]
    name = name.split(' ')[0]
    return name

def write_testfile(program_name: str, generated_json: str):
    data = json.loads(generated_json)
    export = {}
    with open(f'./data/Tests/js/{program_name}_Tests.js', 'w') as f:
        for item in data['tests']:
            test = item['code']
            name = extract_name(test)
            export[name] = item['name']
            f.write(test)
            f.write('\n'*2)

        f.write('module.exports = [\n')
        for name in export:
            f.write('\t{\n')
            f.write(f'\t\t test: {name},\n')
            f.write(f'\t\t name: "{name}",\n')
            f.write(f'\t\t description: "{export[name]}",\n')
            f.write(f'\t\t categories: []\n')
            f.write('\t},\n')
        f.write(']\n')

def get_names():
    names = []
    with open('program_names.txt', 'r') as f:
        names = f.readlines()
    for i in range(len(names)):
        names[i] = names[i].strip()
    return names

def main():
    parser = argparse.ArgumentParser(description='Processes the JSON into Javascript files for the programs specified')
    parser.add_argument('-n', '--names', action='extend', type=str, nargs='+', help='names of the programs')
    names = parser.parse_args().names
    if names is None:
        names = get_names()
    for program_name in names:
        json = ''
        with open(f'./data/Tests/JSON/{program_name}_Tests.json', 'r') as f:
            json = f.read()
        try:
            write_testfile(program_name, json)
        except Exception:
            print(f'Could not progress JSON for {program_name}!')
            continue

if __name__ == '__main__':
    main()
