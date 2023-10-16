import os
import requests
from bs4 import BeautifulSoup

# Define the team's Dribbble URL
team_url = "https://dribbble.com/OWWStudio/collections/6775390-One-Week-Wonders-Landing-Page"  # Replace with the actual team URL

# Send an HTTP GET request to the team's Dribbble page
response = requests.get(team_url)

# Check if the request was successful
if response.status_code == 200:
    print("successful response!")
    # Parse the HTML content of the page
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Create a directory to store the downloaded images
    if not os.path.exists("team_images"):
        os.makedirs("team_images")
    
    # Find and download images with the aspect ratio of 0.8 (portrait)
    for shot in soup.find_all('a', {'class': 'shot-thumbnail-link'}):
        shot_url = "https://dribbble.com" + shot.get('href')
        shot_response = requests.get(shot_url)
        if shot_response.status_code == 200:
            print("Shot found at ", shot_url)
            # Parse the HTML content of the page
            shot_soup = BeautifulSoup(shot_response.text, 'html.parser')
            for shot in soup.find_all('img', {'class': 'v-img'}):
                img_url = img.get('src')
                if img_url:
                    print("image found at ", img_url)
                    if "aspect_ratio_0-8" in img_url:
                        image_response = requests.get(img_url)
                        if image_response.status_code == 200:
                            print("image of aspect ratio found at ", img_url)
                            # Extract the image name from the URL and save it to the directory
                            image_name = img_url.split('/')[-1]
                            with open(os.path.join("team_images", image_name), 'wb') as f:
                                f.write(image_response.content)
                            print(f"Downloaded: {image_name}")
            print("Download completed.")
        else:
            print("shot response status not 200")
else:
    print("Failed to retrieve the Dribbble page.")


