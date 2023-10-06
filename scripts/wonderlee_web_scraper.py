import requests
from bs4 import BeautifulSoup
import re

url = "https://wonderlee.hk/job_ref.html"
response = requests.get(url)

print(response)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Locate the elements containing project information
    projects = soup.find_all('table', style="width: 87%")

    for project in projects:
        print(project.prettify())
        try:
            # Extract project title
            title = project.find('h5').text.strip()

            # Extract project date
            date = re.findall(r'\(.*?\)', title)
            # Extract project description
            description = project.find('ul').text.strip()

            # Print or store the extracted data as needed
            print(f"Title: {title}")
            print(f"Date: {date}")
            print(f"Description: {description}")
        except:
            print("")
else:
    print("Failed to retrieve the webpage.")

