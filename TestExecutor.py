import subprocess
import os
from enum import Enum

whisker_path = os.path.abspath('./whisker')
solution_path = os.path.abspath('./data/SampleSolutions')
tests_path = os.path.abspath('./data/Tests')
results_path = os.path.abspath('./data/Results')

def generate_paths(program_name:str):
    if program_name is None or len(program_name) == 0:
        raise Error("Program name cannot be None or an empty string")
    paths = {}
    paths['scratch_path'] = solution_path + '/' + program_name + '.sb3'
    paths['tests_path'] = tests_path + '/' + program_name + '_Tests.js'
    paths['csv_path'] = results_path + '/' + program_name + '_Results.csv'
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

    return cmd

def execute_command(cmd:str, execution_path:str):
    temp = subprocess.Popen(cmd, stdout = subprocess.PIPE, cwd = execution_path)
    return str(temp.communicate())

def get_tests():
    output = process_output(execute_command('ls', tests_path))
    testable_programs = []
    for line in output:
        line = line.split('_Tests.js')[0]
        testable_programs.append(line)

    if len(testable_programs) == 0:
        raise Error("No tests found!")

    return testable_programs

def run_all_tests():
    testable_programs = get_tests()
    output = {}
    for program_name in testable_programs:
        cmd = build_command(program_name)
        output[program_name] = execute_command(cmd, whisker_path)
    return output

def run_test(program_name:str):
    testable_programs = get_tests()

    if program_name not in testable_programs:
        raise Error(f"No program with name '{program_name}'!")

    cmd = build_command(program_name)
    return execute_command(cmd)

if __name__ == '__main__':
    run_all_tests()
