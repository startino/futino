import { writable, get } from 'svelte/store';

export function createStore() {
	// No chosen journeys
	const emptyStore: string[] = [];

	const store = writable(emptyStore);
	const { subscribe, set } = store;
	const isBrowser = typeof window !== 'undefined';

	// Empties the chosen journeys list.
	function reset() {
		isBrowser && (localStorage.storable = JSON.stringify(emptyStore));
		set(emptyStore);
		store.update(() => {
			return emptyStore;
		});
	}

	isBrowser && localStorage.storable && set(JSON.parse(localStorage.storable));

	return {
		subscribe,
		reset,
		set: (storedValue: string[]) => {
			isBrowser && (localStorage.storable = JSON.stringify(storedValue));
			set(storedValue);
		},
	};
}

export let journeysStore = createStore();

export function addChosenJourney(id: string) {
	let currentList: string[] = get(journeysStore);
	// Validate for no duplicates
	if (!currentList.includes(id)) {
		// Saves it to local storage and store.
		currentList.push(id);
		journeysStore.set(currentList);
	}
}
