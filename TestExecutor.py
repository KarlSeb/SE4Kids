import os
import subprocess
import argparse

whisker_path = os.path.abspath('./whisker')
solution_path = os.path.abspath('./data/SampleSolutions')
tests_path = os.path.abspath('./data/Tests/js')
results_path = os.path.abspath('./data/Results')

def generate_paths(program_name:str, baseline:bool):
    if program_name is None or len(program_name) == 0:
        raise Error("Program name cannot be None or an empty string")
    paths = {}
    sep = '/baseline/' if baseline else '/'
    paths['scratch_path'] = solution_path + '/' + program_name + '.sb3'
    paths['tests_path'] = tests_path + sep
    if not baseline:
        paths['tests_path'] += program_name + '_Tests.js'
    paths['csv_path'] = results_path + '/csv' + sep + program_name + '_Results.csv'
    return paths

def process_output(output:str):
    output = output.split('\n')
    output = output[0].split('\\n')
    output[0] = output[0][3:]
    output = output[:-1]
    return output

def build_command(program_name:str, csv:bool = True, baseline:bool = False):
    cmd = ['node', 'servant']
    if baseline:
        cmd.extend(['generate', \
                    '-c', f'{whisker_path}/config/mio.json', \
                    '-r', '10'])
    else:
        cmd.append('run')

    paths = generate_paths(program_name, baseline)
    cmd.extend(['-s', f'{paths["scratch_path"]}', \
                '-t', f'{paths["tests_path"]}'])
    if csv:
        cmd.extend(['-v', f'{paths["csv_path"]}'])

    cmd.extend(['-d', '-a', '10'])
    return cmd

def execute_command(cmd:str, execution_path:str):
    temp = subprocess.Popen(cmd, stdout = subprocess.PIPE, stderr = subprocess.STDOUT, cwd = execution_path)
    return str(temp.communicate())

def get_tests():
    names = []
    with open('program_names.txt', 'r') as f:
        names = f.readlines()
    for i in range(len(names)):
        names[i] = names[i].strip()
    return names

def rename_testfile(program_name:str):
    old_name = tests_path + '/baseline/tests.js'
    new_name = tests_path + f'/baseline/{program_name}_Tests.js'
    os.rename(old_name, new_name)

def run_all_tests(baseline:bool = False):
    testable_programs = get_tests()
    output = {}
    for program_name in testable_programs:
        print(f'Running tests for {program_name}')
        cmd = build_command(program_name, baseline=baseline)
        output[program_name] = execute_command(cmd, whisker_path)
        if baseline:
            rename_testfile(program_name)
    return output

def run_test(program_name:str, generate_csv:bool = False, baseline:bool=False):
    testable_programs = get_tests()

    if program_name not in testable_programs:
        raise Error(f"No program with name '{program_name}'!")

    cmd = build_command(program_name, generate_csv, baseline)
    return execute_command(cmd, whisker_path)

def write_output(output, baseline:bool = False):
    sep = '/txt/whisker/' if baseline else '/txt/'
    for name in output.keys():
        lines = output[name].split('\\n')
        with open(f'{results_path}{sep}{name}.txt', 'w') as f:
            for line in lines:
                f.write(f'{line}\n')

def main():
    parser = argparse.ArgumentParser(description='Executes the whisker test(s) specified')
    parser.add_argument('-n', '--names', action='extend', type=str, nargs='+', help='names of the programs to test')
    parser.add_argument('-b', dest='baseline', action='store_true', help='generates tests using WHISKERS built in MIO')
    parser.set_defaults(baseline=False)
    names = parser.parse_args().names
    baseline = parser.parse_args().baseline
    output = {}
    if names is None:
        pass
        output = run_all_tests(baseline)
    else:
        for name in names:
            print(f'Running tests for {name}')
            output[name] = run_test(name, True, baseline)
            if baseline:
                rename_testfile(name)
    write_output(output, baseline)

if __name__ == '__main__':
    main()
