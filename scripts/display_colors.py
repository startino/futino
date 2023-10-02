import matplotlib.pyplot as plt
import matplotlib.colors as m_colors
import numpy as np
import color_utils

def display(keys, tones):
    # Create a 3x4 grid of subplots
    fig, axes = plt.subplots(len(keys), len(tones[0]), figsize=(12, 5))

    # Loop through rows and columns to create colored squares
    for i in range(len(keys)):
        for j in range(len(tones[0])):
            label = ''
            if j == 0:
                color = color_utils.hex_to_rgb(keys[i])
                r,g,b = color
                r /= 255
                g /= 255
                b /= 255
                color = r,g,b
            else:
                color = color_utils.rgb_to_normalized(tones[i][j])
                if (color == keys[i]): #TODO make it work 
                    label = f'{j*100} key'
                else:
                    label = f'{j*100} '

            
            print(f"assigning color to ({i},{j}): {color_utils.hsl_to_255rgb(color)}")
            try: 
                # Create a colored square in the subplot
                axes[i, j].add_patch(plt.Rectangle((0, 0), 1, 1, color=color))
            except:
                axes[i, j].add_patch(plt.Rectangle((0, 0), 1, 1, color="#aaaaaa"))

            # Remove axis labels and ticks
            axes[i, j].axis('off')

    # Adjust spacing
    plt.subplots_adjust(wspace=0.1, hspace=0.1)

    # Show the grid
    plt.show()




