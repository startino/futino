import { writable, get } from 'svelte/store';
import journeys from '$lib/journeys';

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
		}
	};
}

export let journeysStore = createStore();

export function addChosenJourney(id: string) {
	let currentList: string[] = get(journeysStore);
	// Validate for no duplicates
	if (currentList.includes(id)) {
		console.log(`Journey with id: ${id} already in list.`);
		return;
	}

	if (id in journeys) {
		// Saves it to local storage and store.
		currentList.push(id);
		journeysStore.set(currentList);
		console.log(`Added journey with id: ${id}`);
	} else {
		console.error(`tried to add id which isn't in journeys. Id: ${id}`);
	}
}
