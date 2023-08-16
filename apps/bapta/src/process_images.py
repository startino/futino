import os
from PIL import Image

def convert_and_set_quality(input_path, output_path, quality=72):
    try:
        # Open the input image
        img = Image.open(input_path)
        
        # Convert and save the resized image in WebP format with the specified quality
        img.save(output_path, format="WEBP", quality=quality)
        
        print(f"Image resized, converted to WebP, and saved to {output_path}")
    except Exception as e:
        print(f"An error occurred: {e}")


input_folder = "D:/Development/Futino/futino/apps/bapta/static/images/kilimanjaro/original"  # Change this to the folder containing input images
output_folder = input_folder # Change this to the folder where you want to save output images

# Create the output folder if it doesn't exist
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Loop through all image files in the input folder
for filename in os.listdir(input_folder):
    if filename.endswith(".jpg") or filename.endswith(".jpeg") or filename.endswith(".png"):
        input_image_path = os.path.join(input_folder, filename)
        output_image_path = os.path.join(output_folder, f"{os.path.splitext(filename)[0]}.webp")
        
        convert_and_set_quality(input_image_path, output_image_path)
