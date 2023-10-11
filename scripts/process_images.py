from PIL import Image
import os

def convert_images_to_webp(input_folder, output_folder):
    # Create the output folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # List all files in the input folder
    for filename in os.listdir(input_folder):
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, os.path.splitext(filename)[0] + ".webp")

        # Open and convert the image to WEBP format
        with Image.open(input_path) as img:
            img.save(output_path, "WEBP")

if __name__ == "__main__":
    input_folder = input("input_folder_path")  # Replace with the path to your input folder
    output_folder = input_folder  # Replace with the path to your output folder

    convert_images_to_webp(input_folder, output_folder)

