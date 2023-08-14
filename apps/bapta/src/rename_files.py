import os

def rename_images(folder_path, prefix):
    image_list = os.listdir(folder_path)
    for index, image in enumerate(image_list):
        _, ext = os.path.splitext(image)
        new_name = f"{prefix}{index + 1}{ext}"
        os.rename(os.path.join(folder_path, image), os.path.join(folder_path, new_name))
        print(f"Renamed {image} to {new_name}")

# For Usage. Change as needed.
folder_path = "static/images/kilimanjaro/"
prefix = ""

rename_images(folder_path, prefix)