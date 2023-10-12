import markdown
import random
import uuid
class TreeNode:
    def __init__(self, data):
        self.data = data
        self.children = []

def parse_markdown_to_tree(filename):
    node_id = 0
    with open(filename, 'r') as file:
        lines = file.readlines()  
    root = TreeNode(domain)
    current_page = None
    current_section = None

    for line in lines:
        node_id += 1
        line = line.strip()
        if line.startswith("## "):  # Page
            page_name = f'{node_id}["{line[3:]}"]'
            new_page = TreeNode(page_name)
            root.children.append(new_page)
            current_page = new_page
            current_section = None
        elif line.startswith("### "):  # Section
            section_name =  f'{node_id}["{line[4:]}"]'
            new_section = TreeNode(section_name)
            if current_page is not None:
                current_page.children.append(new_section)
            current_section = new_section
        elif line.startswith("- "):  # Item
            item_name = f'{node_id}["{line[2:]}"]'
            if current_section is not None:
                current_section.children.append(TreeNode(item_name))
        elif line.startswith("  - "):  # Item
            item_name = f'{node_id}["{line[4:]}"]'
            if current_section is not None:
                current_section.children.append(TreeNode(item_name))

    return root

def build_tree_string(node, parent_name="root"):
    tree_string = ""
    if node.data != "domain":
        tree_string += f"  {parent_name} --- {node.data}\n"
    for child in node.children:
        tree_string += build_tree_string(child, node.data)
    return tree_string

def write_tree_to_file(tree_string, output_file):
    with open(output_file, 'w') as file:
        file.write("```mermaid\nflowchart LR\n")
        file.write(tree_string)
        file.write("\n```")
       

domain = "wonderlee.com"
input_filename = "raw_outline.md"  # Replace with the actual file path
output_filename = "outline_tree.md"  # Replace with the desired output file path
root_node = parse_markdown_to_tree(input_filename)
tree_string = build_tree_string(root_node, domain)
write_tree_to_file(tree_string, output_filename)

