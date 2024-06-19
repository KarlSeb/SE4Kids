import json

def extract_name(code:str):
    name = code.split('const ')[1]
    name = name.split(' ')[0]
    return name

def write_JSON(program_name: str, generated: str):
    with open(f'./data/JSON/{program_name}_Tests.json', 'w') as f:
        for line in generated:
            f.write(line)

def write_Testfile(program_name: str, generated_json: str):
    data = json.loads(generated_json)
    export = {}
    with open(f'./data/Tests/{program_name}_Tests.js', 'w') as f:
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

if __name__ == '__main__':
    response = ''
    with open('./data/JSON/Archery_Tests.json', 'r') as f:
        response = f.read()
    write_Testfile('Archery', response)
