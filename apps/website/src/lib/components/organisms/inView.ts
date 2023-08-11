export function onView(node: Element, params = {}) {
	let observer: IntersectionObserver;

	const handleIntersect = (entry: IntersectionObserverEntry[]) => {
		node.dispatchEvent(
			new CustomEvent('intersect', {
				detail: entry[0].isIntersecting,
			}),
		);
	};

	const setObserver = () => {
		console.log('update');
		const marginTop: number = -10;
		const marginBottom: number = -10;
		const rootMargin: string = `${marginTop}% 0% ${marginBottom}% 0%`;
		const options = { rootMargin, threshold: 0 };
		if (observer) observer.disconnect();
		observer = new IntersectionObserver(handleIntersect, options);
		observer.observe(node);
	};

	setObserver();

	return {
		update() {
			setObserver();
		},

		destroy() {
			if (observer) observer.disconnect();
		},
	};
}
