import os
from PIL import Image, ImageFile
import numpy as np

def check_images(directory):
    # ImageFile.LOAD_TRUNCATED_IMAGES = True
    for filename in os.listdir(directory):
        if filename.endswith(".jpg") or filename.endswith(".png"):
            try: 
                image = Image.open(os.path.join(directory, filename))
                if not image.mode == "RGB":
                    image = image.convert("RGB")
                img = np.array(image, np.uint8)                
            except (IOError, SyntaxError) as e:
                print('error file:', filename) 				
                print('error message:', e)

path = input("path to folder: ")
check_images(path)
