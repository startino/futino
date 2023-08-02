<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';

	import type { Database } from '$lib/database.types';

	import { createClient } from '@supabase/supabase-js';
	import { onMount } from 'svelte';

	// Create a Supabase client object
	const supabase = createClient<Database>(
		'https://ekushmqbxanusqyxyzkk.supabase.co',
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrdXNobXFieGFudXNxeXh5emtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEzODQ1NzMsImV4cCI6MTk5Njk2MDU3M30.RTlWWjf6n2PCDkMdN43B0lBjsXe_aEIfTIs2bDCxfSE',
	);

	// Define arrays for months, days, and weekdays
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday'];
	const weekdays = [3, 5]; // Specify weeks to include

	// Define a mapping of month abbreviations to numbers
	const monthToNumber: { [key: string]: number } = {
		Jan: 0,
		Feb: 1,
		Mar: 2,
		Apr: 3,
		May: 4,
		Jun: 5,
		Jul: 6,
		Aug: 7,
		Sep: 8,
		Oct: 9,
		Nov: 10,
		Dec: 11,
	};

	// Define custom variables for the number of weeks, weekdays, and time
	const numWeeks = 12;
	const time = '19:00 - 21:00';

	let weeks: { day: string; month: number; date: number }[][] = [];

	let name: string = '';

	onMount(async () => {
		name = localStorage.getItem('name') ? <string>localStorage.getItem('name') : name;
		(<HTMLInputElement>document.getElementById('name')).value = name;
	});

	function saveName(_name: string) {
		localStorage.setItem('name', _name);
		name = _name;

		(<HTMLInputElement>document.getElementById('name')).value = name;
	}

	function readName() {
		let _name = (<HTMLInputElement>document.getElementById('name')).value;
		if (!_name) {
			alert('Please enter a valid name.');
			return false;
		}
		saveName(_name);

		return true;
	}

	// Create an array of weeks, each containing an array of days
	for (let w = 0; w < numWeeks; ++w) {
		let week: { day: string; month: number; date: number }[] = [];

		for (let d = 0; d < weekdays.length; ++d) {
			let curr = new Date();

			let day = new Date(curr.setDate(curr.getDate() - curr.getDay() + weekdays[d] + w * 7));

			week.push({
				day: days[day.getDay()].substring(0, 3),
				month: day.getMonth(),
				date: day.getDate(),
			});
		}

		weeks.push(week);
	}

	// Define a function to get the list of attendees for a given month and day
	async function getAttending(
		Attendance: Database['public']['Tables']['Attendance']['Row'][],
		month: number,
		day: number,
	) {
		if (!Attendance) return null;

		let attending: string[] = [];
		for (let i = 0; i < Attendance.length; ++i) {
			if (month === Attendance[i].month && day === Attendance[i].day)
				attending.push(Attendance[i].name);
		}
		return attending;
	}

	// Define a function to get the list of checked sessions
	function getCheckedSessions() {
		let checkedSessions: { m: number; d: number }[] = [];

		for (let week = 0; week < weeks.length; ++week) {
			for (let weekday = 0; weekday < weekdays.length; ++weekday) {
				let session = <HTMLInputElement>(
					document.getElementById(
						`session-${weeks[week][weekday].month.toString()}|${weeks[week][
							weekday
						].date.toString()}`,
					)
				);

				let date = session.id.split('-')[1].split('|');
				if (session.checked) checkedSessions.push({ m: parseInt(date[0]), d: parseInt(date[1]) });
			}
		}
		return checkedSessions;
	}

	// Define a function to register attendance for the selected sessions
	async function register() {
		if (!readName()) return; // Read name, return if invalid

		let checkedSessions = getCheckedSessions();

		for (let i = 0; i < checkedSessions.length; ++i) {
			await supabase.from('Attendance').insert([
				{
					name: name,
					month: checkedSessions[i].m,
					day: checkedSessions[i].d,
				},
			]);
		}
		location.reload();
		return false;
	}

	// Define a function to unregister attendance for the selected sessions
	async function unregister() {
		if (!readName()) return; // Read name, return if invalid

		let checkedSessions = getCheckedSessions();

		// Loop over the checkedSessions array
		for (let i = 0; i < checkedSessions.length; ++i) {
			// Delete rows from the Attendance table where name, month, and day match
			console.log(
				await supabase
					.from('Attendance')
					.delete()
					.eq('name', name)
					.eq('month', checkedSessions[i].m)
					.eq('day', checkedSessions[i].d),
			);
		}
		location.reload();
		return false;
	}
</script>

<Header />

<section
	class="py-20 px-4 border-b shadow-2xl sm:px-6 md:px-8 border-primary-light/40 dark:border-primary-dark/40">
	<div class="grid justify-items-center space-y-12 mx-auto">
		<h1 class="display-large">Schedule</h1>
		<h2 class="headline-large text-center">
			Please enter your name and select sessions.<br />
			After that click the "Register" button or click "Unregister" to unregister from them.
		</h2>

		<input
			id="name"
			class="bg-primary-light dark:bg-primary-dark p-2 text-center placeholder-primary-on-light/60 dark:placeholder-primary-on-dark/60 text-primary-on-light dark:text-primary-on-dark headline-large"
			placeholder="Your Name" />
	</div>
</section>

<section class="py-5 px-4 shadow-2xl sm:px-6 md:px-8">
	<div class="grid grid-cols-2 justify-items-center">
		<button
			on:click={register}
			id="register"
			class="p-5 shadow-lg rounded-lg text-center bg-secondary-light dark:bg-secondary-dark text-secondary-on-light dark:text-secondary-on-dark display-small">
			Register
		</button>

		<button
			on:click={unregister}
			id="unregister"
			class="p-5 shadow-lg rounded-lg text-center bg-secondary-light dark:bg-secondary-dark text-secondary-on-light dark:text-secondary-on-dark display-small">
			Unregister
		</button>
	</div>
</section>

<section
	class="w-full h-full grid gap-y-5 gap-x-12 lg:grid-cols-2 2xl:grid-cols-3 justify-center place-items-center p-12 xl:px-20 2xl:px-30">
	<!-- svelte-ignore empty-block -->
	{#await supabase.from('Attendance').select('*')}
		<p>Loading...</p>
	{:then Attendance}
		{#if Attendance.data}
			{#each weeks as week, index (index)}
				<div
					class="w-full h-full flex flex-row gap-5 p-5 bg-white/5 shadow-lg shadow-black rounded-lg">
					{#each week as { day, month, date }}
						<label
							class="h-full w-full p-3 shadow-lg rounded-lg text-center bg-secondary-light dark:bg-secondary-dark text-secondary-on-light dark:text-secondary-on-dark">
							<input id="session-{month}|{date}" type="checkbox" class="w-10 h-10" />
							<p class="headline-large">{day}</p>
							<p class="display-large lg:display-medium">{months[month].substring(0, 3)}. {date}</p>
							<p class="title-large">{time}</p>
							{#await getAttending(Attendance.data, month, date)}
								<p>Loading...</p>
							{:then attending}
								{#if attending}
									{#each attending as attendee, index (index)}
										<p>{attendee}</p>
									{/each}
								{/if}
							{/await}
						</label>
					{/each}
				</div>
			{/each}
		{/if}
	{/await}
</section>

<Footer />;
