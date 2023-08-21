import { writable , get} from 'svelte/store';

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
		store.update((state) => {
			return emptyStore;
		});
	}

	
 function addChosenJourney(id: string) {
	// Validate for no duplicates
	if (!get(store).includes(id)) {
		// Saves it to local storage and store.
		let journeysStore = [...get(store), id];
		set(journeysStore);
	}
}


	isBrowser && localStorage.storable && set(JSON.parse(localStorage.storable));

	return {
		subscribe,
		reset,
		addChosenJourney,
		set: (storedValue: string[]) => {
			isBrowser && (localStorage.storable = JSON.stringify(storedValue));
			set(storedValue);
		},
	};
}

export let journeysStore = createStore();


