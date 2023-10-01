import matplotlib.pyplot as plt
import matplotlib.colors as m_colors
import numpy as np

# Input colors for the first column
key_colors = ['#077BFA', '#2C0FFA', '#FABB04']
hsv_colors = []

if key_colors[0][0] == '#':
    for hex in key_colors:
        rgb = m_colors.to_rgb(hex)
        hsv = m_colors.rgb_to_hsv(rgb)
        hsv_colors.append(hsv)
        # print(f"hex: {hex}, rgb:{rgb}, hsv_colors", hsv_colors)
    
# Calculate variations in tone for the other three columns FROM #FF0000 TW
brightness_values = [1,1,1,1,1,1,1,0.84,0.69,0.57,0.31]  # Adjust these values to control the tone variations
saturation_values = [0.06,0.13,0.25,0.42,0.66,0.86,1,1,1,0.98,0.93]
# Calculate variations in tone for the other three columns FROM #00FF00 TW
brightness_values = [1,1,1,1,1,1,0.9,0.72,0.55,0.43,0.36]  # Adjust these values to control the tone variations
saturation_values = [0.11,0.23,0.44,0.69,1,1,1,1,1,0.94,0.88]

# Create a 3x4 grid of subplots
fig, axes = plt.subplots(3, len(brightness_values), figsize=(12, 5))

# Loop through rows and columns to create colored squares
for i in range(3):
    for j in range(len(brightness_values)):
        label = ''
        if j == 0:
            color =  m_colors.hsv_to_rgb(hsv_colors[i])     
        else:
            # Calculate the toned color
            h, s, v = [float(value) for value in hsv_colors[i]]
            key_color = (h,s,v)
            color = (h, saturation_values[j], brightness_values[j])
            if (color == key_color): #TODO make it work 
                label = f'{j*100} key'
            else:
                label = f'{j*100} '

            color =  m_colors.hsv_to_rgb(color)
        
        print(f"assigning color to ({i},{j}): {color}")
        try: 
            # Create a colored square in the subplot
            axes[i, j].add_patch(plt.Rectangle((0, 0), 1, 1, color=color))
            axes[i,j].annotate(label, (0.1,0.1),color=(1-color))
        except:
            axes[i, j].add_patch(plt.Rectangle((0, 0), 1, 1, color="#aaaaaa"))

        # Remove axis labels and ticks
        axes[i, j].axis('off')


background = 'background: '
h, s, v = [float(value) for value in hsv_colors[1]]
color = (h, saturation_values[10], brightness_values[10])
color = m_colors.hsv_to_rgb(color) 
axes[2, 10].add_patch(plt.Rectangle((0, 0), 1, 1, color=color))

print(color)

# Adjust spacing
plt.subplots_adjust(wspace=0.1, hspace=0.1)

# Show the grid
plt.show()


