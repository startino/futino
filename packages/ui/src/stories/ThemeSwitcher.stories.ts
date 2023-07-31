import type { Meta, StoryObj } from '@storybook/svelte';

import ThemeSwitcher from './ThemeSwitcher.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'Atoms/ThemeSwitcher',
	component: ThemeSwitcher,
	tags: ['autodocs']
} satisfies Meta<ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
