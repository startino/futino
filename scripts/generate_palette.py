import matplotlib.pyplot as plt
import matplotlib.colors as m_colors
import numpy as np
from coloraide import Color

# Input colors for the first column
key_colors = ['#0270f9', '#6750A4', '#7F67BE']

if key_colors[0][0] == '#':
    key_colors = [str(m_colors.to_rgb(value)) for value in key_colors] 

# Calculate variations in tone for the other three columns
tones = [0, 1.05, 1.2, 0.8]  # Adjust these values to control the tone variations

# Create a 3x4 grid of subplots
fig, axes = plt.subplots(3, len(tones), figsize=(12, 5))

# Loop through rows and columns to create colored squares
for i in range(3):
    for j in range(len(tones)):
        if j == 0:
            color = key_colors[i]
        else:
            # Calculate the toned color
            r, g, b = [float(value) for value in key_colors[i].strip("()").split(", ")]
            print(f"r: {r}, g: {g}, b: {b}")
            color = (r * tones[j], g * tones[j], b * tones[j])
        
        print(f"assigning color to ({i},{j}): {color}")
        try: 
            # Create a colored square in the subplot
            axes[i, j].add_patch(plt.Rectangle((0, 0), 1, 1, color=color))
        except:
            axes[i, j].add_patch(plt.Rectangle((0, 0), 1, 1, color="#fff"))

        # Remove axis labels and ticks
        axes[i, j].axis('off')

# Adjust spacing
plt.subplots_adjust(wspace=0.1, hspace=0.1)

# Show the grid
plt.show()

