<div class={$$props.class}>
	{#if $$props.icon.toLowerCase() == 'plus'}
		<svg
			width={$$props.width}
			height={$$props.height}
			viewBox="0 0 90 90"
			fill={$$props.fillColor}
			stroke={$$props.strokeColor}>
			<path
				d="M 86.5 41.5 h -38 v -38 C 48.5 1.567 46.933 0 45 0 c -1.933 0 -3.5 1.567 -3.5 3.5 v 38 h -38 C 1.567 41.5 0 43.067 0 45 s 1.567 3.5 3.5 3.5 h 38 v 38 c 0 1.933 1.567 3.5 3.5 3.5 c 1.933 0 3.5 -1.567 3.5 -3.5 v -38 h 38 c 1.933 0 3.5 -1.567 3.5 -3.5 S 88.433 41.5 86.5 41.5 z" />
		</svg>
	{:else if $$props.icon.toLowerCase() == 'minus'}
		<svg
			width={$$props.width}
			height={$$props.height}
			viewBox="0 0 90 90"
			fill={$$props.fillColor}
			stroke={$$props.strokeColor}>
			<path
				d="M 86.5 48.5 h -83 C 1.567 48.5 0 46.933 0 45 s 1.567 -3.5 3.5 -3.5 h 83 c 1.933 0 3.5 1.567 3.5 3.5 S 88.433 48.5 86.5 48.5 z" />
			<path
				d="M 86.5 48.5 h -83 C 1.567 48.5 0 46.933 0 45 s 1.567 -3.5 3.5 -3.5 h 83 c 1.933 0 3.5 1.567 3.5 3.5 S 88.433 48.5 86.5 48.5 z" />
		</svg>
	{:else if $$props.icon.toLowerCase() == 'calendar'}
		<svg
			width={$$props.width}
			height={$$props.height}
			viewBox="0 0 24 24"
			fill={$$props.fillColor}
			stroke={$$props.strokeColor}>
			<path
				d="M4 8H20M4 8V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V8M4 8V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H8M20 8V7.19691C20 6.07899 20 5.5192 19.7822 5.0918C19.5905 4.71547 19.2837 4.40973 18.9074 4.21799C18.4796 4 17.9203 4 16.8002 4H16M16 2V4M16 4H8M8 2V4"
				stroke-width="2" /></svg>
	{:else if $$props.icon.toLowerCase() == 'down-arrow'}
		<svg
			viewBox="0 0 24 24"
			fill={$$props.fillColor}
			xmlns="http://www.w3.org/2000/svg"
			width={$$props.width}
			height={$$props.height}
			><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round" /><g id="SVGRepo_iconCarrier">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z"
					fill={$$props.fillColor} />
			</g></svg>
	{:else}
		'icon' not given...
	{/if}
</div>
