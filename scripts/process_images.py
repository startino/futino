from PIL import Image
import os

def convert_images_to_webp(input_folder, output_folder):
    # Create the output folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # List all files in the input folder
    for filename in os.listdir(input_folder):
        if not filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            continue

        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, os.path.splitext(filename)[0] + ".webp")

        # Open and convert the image to WEBP format
        try:
            with Image.open(input_path) as img:
                img.save(output_path, "WEBP")
        except Exception as e:
            print(f"Error converting {input_path} to WEBP: {e}")

if __name__ == "__main__":
    project = input("Project: ")
    input_folder = f"../apps/{project}/static/media"  # Replace with the path to your input folder
    output_folder = f"../apps/{project}/static/media"  # Replace with the path to your output folder

    convert_images_to_webp(input_folder, output_folder)