import requests
from bs4 import BeautifulSoup
import re
import os

url = "https://wonderlee.hk/job_ref.html"
response = requests.get(url)

print(response)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Locate the elements containing project information
    projects = soup.find_all('tr')

    for project in projects:
        # print(project.prettify())
        try:
            # image processing
            img = project.find(attrs={'width':"200"})
            thumbnail = re.findall(r'src="([^"]+)"', str(img))[0]
            link = f'https://wonderlee.hk/{thumbnail}'
            output_file = f'../apps/wonderlee/static/projects/{thumbnail.replace("%","_")}'
            with open(output_file, "xb") as f:
                f.write(requests.get(link).content)
            # text processing
            project = project.find('table')
            # Extract project title
            title = project.find('h5').text.strip()
            # Extract project date
            date = re.findall(r'\(.*?\)', title)[0]
            title = title.replace(date, '').replace(':', '').strip()
            id = title.lower().replace(" ","-").replace("'", "")

            # Extract project date
            date = date.replace("(", "").replace(")", "")
            # Extract project description
            description = project.find_all('li')
            for i in range(0, len(description)):
                description[i] = description[i].text.strip().replace('\n', '')
                
            #Print or store the extracted data as needed
            #print(f''' '{id}': new Project({{
            #name: "{title}",
            #date: {date},
            #thumbnail: "{thumbnail}",
            #description : [
            #      {str(description).replace('[', '').replace(']', '')}
            #]
            #}}),
            #''')
        except Exception as e:
            # print(e)
            needs=''
else:
    print("Failed to retrieve the webpage.")

