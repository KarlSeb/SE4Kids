import os
import subprocess
import argparse

whisker_path = os.path.abspath('./whisker')
solution_path = os.path.abspath('./data/SampleSolutions')
tests_path = os.path.abspath('./data/Tests/js')
results_path = os.path.abspath('./data/Results')

def generate_paths(program_name:str):
    if program_name is None or len(program_name) == 0:
        raise Error("Program name cannot be None or an empty string")
    paths = {}
    paths['scratch_path'] = solution_path + '/' + program_name + '.sb3'
    paths['tests_path'] = tests_path + '/' + program_name + '_Tests.js'
    paths['csv_path'] = results_path + '/csv/' + program_name + '_Results.csv'
    return paths

def process_output(output:str):
    output = output.split('\n')
    output = output[0].split('\\n')
    output[0] = output[0][3:]
    output = output[:-1]
    return output

def build_command(program_name:str, csv:bool = True):
    paths = generate_paths(program_name)

    cmd = ['node', 'servant', 'run']
    cmd.append('-s')
    cmd.append(f'{paths["scratch_path"]}')
    cmd.append('-t')
    cmd.append(f'{paths["tests_path"]}')
    if csv:
        cmd.append('-v')
        cmd.append(f'{paths["csv_path"]}')
    cmd.append('-d')
    cmd.append('-a')
    cmd.append('10')
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

def run_all_tests():
    testable_programs = get_tests()
    output = {}
    for program_name in testable_programs:
        print(f'Running tests for {program_name}')
        cmd = build_command(program_name)
        output[program_name] = execute_command(cmd, whisker_path)
    return output

def run_test(program_name:str, generate_csv = False):
    testable_programs = get_tests()

    if program_name not in testable_programs:
        raise Error(f"No program with name '{program_name}'!")

    cmd = build_command(program_name, generate_csv)
    return execute_command(cmd, whisker_path)

def write_output(output):
    for name in output.keys():
        lines = output[name].split('\\n')
        with open(f'{results_path}/txt/{name}.txt', 'w') as f:
            for line in lines:
                f.write(f'{line}\n')

def main():
    parser = argparse.ArgumentParser(description='Executes the whisker test(s) specified')
    parser.add_argument('-n', '--names', action='extend', type=str, nargs='+', help='names of the programs to test')
    names = parser.parse_args().names
    output = {}
    if names is None:
        output = run_all_tests()
    else:
        for name in names:
            print(f'Running tests for {name}')
            output[name] = run_test(name, True)
    write_output(output)

if __name__ == '__main__':
    main()
