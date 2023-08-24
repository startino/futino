import { goto } from '$app/navigation';
import { writable } from 'svelte/store';

export const selectedTier = writable<string>('');

export function selectTier(id: string) {
    selectedTier.set(id);
    console.log("selecttier");
    goto('/checkout')
}