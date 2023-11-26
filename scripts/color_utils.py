import re
import colorsys

def hex_to_rgb(hex_color):
    # Remove the '#' character if present
    hex_color = hex_color.lstrip('#')
    
    # Check if the hex_color is in a valid format (either 3 or 6 characters)
    if len(hex_color) != 3 and len(hex_color) != 6:
        raise ValueError("Invalid hex color format. It should be either 3 or 6 characters long.")

    # If the hex_color is 3 characters long, expand it to 6 characters
    if len(hex_color) == 3:
        hex_color = ''.join([c * 2 for c in hex_color])

    # Convert hex values to integers for red, green, and blue
    r = int(hex_color[0:2], 16)
    g = int(hex_color[2:4], 16)
    b = int(hex_color[4:6], 16)

    return r, g, b


def format_css(file_path):
    with open(file_path, 'r') as file:
            content = file.read()

    # Remove brackets and commas
    content = content.replace('(', '').replace(')', '').replace(',', '')

    with open(file_path, 'w') as file:
        file.write(content)

    print(f'{file_path} has been formatted to fit tailwinds standards.')

def rgb_to_hsl(rgb):
    r,g,b = rgb
    r /= 255
    g /= 255
    b /= 255
    h,l,s = colorsys.rgb_to_hls(r,g,b)
    return { h,s,l }

def hsl_to_255rgb(hsl):
    h,s,l = hsl
    r,g,b = colorsys.hls_to_rgb(h,l,s)
    return round(r*255),round(g*255),round(b*255)

def hsl_to_rgb(hsl):
    h,s,l = hsl
    r,g,b = colorsys.hls_to_rgb(h,l,s)
    return r,g,b



def generate_tonal_palette(key_color, tones):
    tonal_palette = []
    key_color = hex_to_rgb(key_color)
    key_color = rgb_to_hsl(key_color)
    h,s,l = key_color
    for tone in tones:
        hsl = (h,s, 1-(tone/1000))
        tonal_palette.append(hsl_to_255rgb(hsl))
    
    return tonal_palette

def rgb_to_normalized(rgb):
    r,g,b = rgb
    r/=255
    g/=255
    b/=255
    return r,g,b

def remove_light_dark(file_path):
            # Open the file in read mode
        with open(file_path, 'r') as file:
            # Read the contents of the file
            file_contents = file.read()

        # Replace '-light' with an empty string
        file_contents = file_contents.replace('-light', '')

        # Replace '-dark' with an empty string
        file_contents = file_contents.replace('-dark', '')

        # Open the file in write mode and overwrite its contents
        with open(file_path, 'w') as file:
            file.write(file_contents)

        print(f'Removed references to "-light" and "-dark" in {file_path}.')

  
