import json

def format_test(test:str):
    line_break = test.find('{') + 1
    formated_test = test[:line_break] +'\n'

    old_line_break = line_break
    line_break = test.find(';', old_line_break) + 1
    while line_break > 0:
        formated_test += '\t' + test[old_line_break : line_break] + '\n'
        old_line_break = line_break
        line_break = test.find(';', old_line_break) + 1

    formated_test += test[len(test)-1] + '\n' + '\n'
    return formated_test

def write_JSON(program_name: str, generated: str):
    with open(f'./data/JSON/{program_name}_Tests.json', 'w') as f:
        for line in generated:
            f.write(line)

def write_Test(program_name: str, generated_json: str):
    data = json.loads(generated_json)
    with open(f'{program_name}_Tests.js', 'w') as f:
        for item in data['tests']:
            test = item['code']
            f.write(test)
            f.write('\n'*2)
            print(test)
