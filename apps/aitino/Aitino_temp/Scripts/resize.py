import os
from PIL import Image

def resize_images():
    for filename in os.listdir(directory):
        if filename.endswith(".jpg") or filename.endswith(".png"):
                image = Image.open(os.path.join(directory, filename))
    image = Image.open(source_path)
    image.thumbnail((500,500), Image.ANTIALIAS)
    image.save(dest_path, "JPEG")

path = input("path to folder: ")
resize_images(path)
