import json
import xmltodict

# Replace 'your_input.xml' with the path to your XML file
input_file = 'input.xml'
output_file = 'output.json'

with open(input_file, "rb") as xml_file:
    data_dict = xmltodict.parse(xml_file)

# Extract and keep only the "url" objects you want
url_objects = data_dict['urlset']['url']

# Create a new JSON object with only the "loc" key from each "url" object
filtered_urls = [{"loc": url_object["loc"]} for url_object in url_objects]

# Convert the filtered data back to a JSON string
filtered_json_data = json.dumps(filtered_urls, indent=2)

simplified_json = []

for json_obj in filtered_urls:
    url = json_obj.get("loc", "")
    if url.startswith("https://"):
        url = url[8:]  # Remove "https://"
    elif url.startswith("http://"):
        url = url[7:]  # Remove "http://"
    
     # Remove the domain "wonderlee.com/"
    simplified_url = url.split("wonderlee.com")[1] if "wonderlee.com" in url else url
    simplified_json.append(simplified_url)

# Write the modified XML to the output file
with open(output_file, 'w', encoding='utf-8') as file:
    file.write(str(simplified_json))