import re

def hex_to_rgb(value):
    value = value.lstrip('#')
    lv = len(value)
    r, g, b = tuple(int(value[i:i + lv // 3], 16) for i in range(0, lv, lv // 3))
    return f"{r} {g} {b}"

def hex_to_twRGB(file_path):
    with open(file_path, 'r') as f:
        text = f.read()
    new_text = re.sub(r'#(?:[a-fA-F\d]{3}){1,2}', lambda x: hex_to_rgb(x.group()), text)
    with open(file_path, 'w') as f:
        f.write(new_text)

def remove_light_dark(file_path):
            # Open the file in read mode
        with open(file_path, 'r') as file:
            # Read the contents of the file
            file_contents = file.read()

        # Replace '-light' with an empty string
        file_contents = file_contents.replace('-light', '')

        # Replace '-dark' with an empty string
        file_contents = file_contents.replace('-dark', '')

        # Open the file in write mode and overwrite its contents
        with open(file_path, 'w') as file:
            file.write(file_contents)

        print(f'Removed references to "-light" and "-dark" in {file_path}.')

   
project = input("Project name: ")
path = f'../apps/{project}/src/app.postcss'
try:
    hex_to_twRGB(path)
    remove_light_dark(path)
except FileNotFoundError:
    print(f'File not found: {path}')
except Exception as e:
    print(f'An error occurred: {str(e)}')

