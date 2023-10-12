import json

# Function to read paths from a JSON file
def read_paths_from_json_file(file_path):
    try:
        with open(file_path, 'r') as json_file:
            paths = json.load(json_file)
        return paths
    except FileNotFoundError:
        print(f"File not found: {file_path}")
        return []

# Read paths from the JSON file
file_path = 'output.json'  # Replace with your JSON file path
paths = read_paths_from_json_file(file_path)


tree = {}

# Function to add a path to the tree
def add_path_to_tree(node, path_parts):
    if not path_parts:
        return

    part = path_parts.pop(0)

    if part not in node:
        node[part] = {}

    add_path_to_tree(node[part], path_parts)

# Build the tree structure
for path in paths:
    path_parts = path.strip("/").split("/")
    add_path_to_tree(tree, path_parts)

# Function to print the tree structure
def print_tree(node, prefix=""):
    for key in node:
        sub_prefix = f"{prefix} --- {key}" if prefix else key
        print(sub_prefix)
        print_tree(node[key], sub_prefix)

# Print the tree structure
print_tree(tree)