import { writable } from 'svelte/store';
import type { Tables } from './server/supabase.types';

export const createCurrentProfile = (profile: Tables<'profiles'>) => writable(profile);
