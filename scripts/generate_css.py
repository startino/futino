import color_utils as color
import display_colors as display
# This represents a readonly array of all colour stops within Tailwind's design system.
TONAL_STEPS = [ 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]


# Define your three key colors in RGB format
primary = '#059669'
secondary = '#db2777'
tertiary = '#db2777'

# Defining the standard colors
red = '#ef4444'
emerald = '#10b981'


keys = [primary, secondary, tertiary, red, emerald]


primary_tones, secondary_tones, tertiary_tones, red_tones, emerald_tones =[(color.generate_tonal_palette(key, TONAL_STEPS)) for key in keys] 


# Darker mappings
tokens = {
    'primary': primary_tones[6],
    'primary-on': primary_tones[0],
    'secondary': secondary_tones[6],
    'secondary-on': secondary_tones[0],
    'tertiary': tertiary_tones[5],
    'tertiary-on': tertiary_tones[0],
    'background': primary_tones[10],
    'background-on': primary_tones[0],
    'surface': secondary_tones[8],
    'surface-on': secondary_tones[0],
    'surface-highlight': secondary_tones[7],
    'surface-highlight-on': secondary_tones[0],
    'muted': primary_tones[9],
    'muted-on': primary_tones[0],
    'error': red_tones[8],
    'error-on': red_tones[0],
    'success': emerald_tones[8],
    'success-on': emerald_tones[0]
}

# Define the output PostCSS file path
output_file = '../apps/template/src/app.postcss'

# Generate the PostCSS content
postcss_content = f'''
/* Write your global styles here, in PostCSS syntax */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {{
    :root {{
'''

for token in tokens:
    postcss_content += f'        --universal-{token}: {tokens[token]};\n'

# Close the PostCSS block
postcss_content += '''    }
}
'''

# Write the PostCSS content to the output file
with open(output_file, 'w') as file:
    file.write(postcss_content)

color.format_css(output_file)


tones = [(color.generate_tonal_palette(key, TONAL_STEPS)) for key in keys] 

display.display(keys, tones)
