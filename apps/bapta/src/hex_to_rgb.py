import re

def hex_to_rgb(value):
    value = value.lstrip('#')
    lv = len(value)
    r, g, b = tuple(int(value[i:i + lv // 3], 16) for i in range(0, lv, lv // 3))
    return f"{r} {g} {b}"

def replace_hex_rgb(file_path):
    with open(file_path, 'r') as f:
        text = f.read()
    new_text = re.sub(r'#(?:[a-fA-F\d]{3}){1,2}', lambda x: hex_to_rgb(x.group()), text)
    with open(file_path, 'w') as f:
        f.write(new_text)

path = input("File Path: ")
try:
    replace_hex_rgb(path)
except FileNotFoundError:
    print("File Not Found. Please try again.")