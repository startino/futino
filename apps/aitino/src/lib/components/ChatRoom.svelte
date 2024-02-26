<script lang="ts">
	import { ArrowDown, Loader, Send, User } from "lucide-svelte";
	import { Input } from "./ui/input";
	import { Button } from "./ui/button";
	import * as Card from "$lib/components/ui/card";
	import { afterUpdate, onMount } from "svelte";
	import SvelteMarkdown from "svelte-markdown";

	let messages = [
		{
			id: 1,
			status: "success",
			data: {
				id: "a15e6b9a-c850-4ef0-919c-10259d92e5de",
				session_id: "76e4f0cf-4678-4ace-8d90-75815d5df78b",
				recipient: "BrandConsultant-SarahPatel",
				content:
					"We're gearing up for the launch of our latest digital marketing campaign, and I need each of you to bring your A-game to the table. Your mission is clear: Ignite brand brilliance and drive unprecedented success for our client. Here are your directives:\n\nStrategy Development: Craft a comprehensive marketing strategy that leverages data-driven insights and innovative approaches to capture our target audience's attention.\n\nContent Creation: Develop captivating content that resonates with our audience across various digital platforms. Think outside the box and deliver content that sparks engagement and drives conversions.\n\nSocial Media Management: Manage our client's social media channels with finesse. Keep the conversation flowing, respond promptly to inquiries, and capitalize on trending topics to amplify our brand's presence.\n\nBrand Consultancy: Provide expert guidance on maintaining brand consistency and authenticity throughout the campaign. Ensure every touchpoint reflects our client's values and resonates with their audience.",
				role: "user",
				name: "Admin",
				created_at: "2024-02-26 16:15:39.805090+00:00"
			}
		},
		{
			id: 2,
			status: "success",
			data: {
				id: "25c13dac-73f6-473b-9dff-65143faab3ae",
				session_id: "76e4f0cf-4678-4ace-8d90-75815d5df78b",
				recipient: "ContentCreator-IvyAnderson",
				content:
					"Given the directives outlined for the launch of the digital marketing campaign, here's a tailored approach for each area to ensure we achieve our objectives and drive success for our client:\n\n### Strategy Development\n\n1. **Audience Analysis**: Begin with a deep dive into the target audience's demographics, interests, and online behaviors. Utilize tools like Google Analytics, social media insights, and market research to gather data.\n\n2. **Competitor Benchmarking**: Analyze competitors' digital marketing strategies to identify gaps and opportunities. Look for patterns in their successes and failures to refine our approach.\n\n3. **Channel Selection**: Based on the audience analysis, select the most effective digital channels for our campaign. Consider a mix of social media, email marketing, SEO, and paid advertising to maximize reach.\n\n4. **KPIs and Metrics**: Define clear, measurable goals for the campaign. Focus on KPIs such as engagement rates, conversion rates, website traffic, and ROI to track and measure success.\n\n### Content Creation\n\n1. **Content Calendar**: Develop a comprehensive content calendar that outlines what to post, when, and on which platforms. Ensure the content aligns with key dates, product launches, and industry events.\n\n2. **Multimedia Content**: Create a mix of videos, blogs, infographics, and interactive content to engage the audience. Tailor content formats to the preferences of the target audience and the strengths of each digital platform.\n\n3. **Storytelling**: Use storytelling to connect with the audience on an emotional level. Share customer success stories, behind-the-scenes looks, and content that highlights the brand's values and mission.\n\n### Social Media Management\n\n1. **Engagement Strategy**: Develop a strategy for engaging with the audience in a meaningful way. This includes prompt responses to comments and messages, user-generated content campaigns, and interactive polls or quizzes.\n\n2. **Content Scheduling**: Utilize social media management tools to schedule posts for optimal times. Ensure a consistent posting schedule to keep the audience engaged and informed.\n\n3. **Trend Monitoring**: Stay on top of social media trends and viral topics. Find creative ways to incorporate relevant trends into the brand's content to increase visibility and engagement.\n\n### Brand Consultancy\n\n1. **Brand Audit**: Conduct a thorough review of all current and planned campaign materials to ensure they align with the brand's identity, values, and messaging guidelines.\n\n2. **Consistency Checks**: Implement regular checks for brand consistency across all digital platforms. This includes visual elements, tone of voice, and messaging.\n\n3. **Feedback Loop**: Establish a system for gathering and analyzing feedback from the target audience and stakeholders. Use this feedback to make informed adjustments to the campaign and improve brand resonance.\n\nBy following these tailored approaches, we can ensure that our digital marketing campaign not only meets but exceeds our client's expectations, driving brand brilliance and achieving unprecedented success.",
				role: "user",
				name: "BrandConsultant-SarahPatel",
				created_at: "2024-02-26 16:15:40.023219+00:00"
			}
		},
		{
			id: 3,
			status: "success",
			data: {
				id: "599bd33b-2b24-437a-89c5-54c998c87598",
				session_id: "76e4f0cf-4678-4ace-8d90-75815d5df78b",
				recipient: "SocialMediaManager-OliviaHarris",
				content: "CONTINUE",
				role: "user",
				name: "ContentCreator-IvyAnderson",
				created_at: "2024-02-26 16:15:40.195499+00:00"
			}
		}
	];

	function handleKeyDown(event: { key: string }) {
		if (event.key === "Enter") {
			sendMessage();
		}
	}

	function handleInputChange(event: { target: { value: string } }) {
		newMessageContent = event.target.value;
	}

	let newMessageContent = "";
	const sendMessage = () => {
		if (newMessageContent.trim() !== "") {
			const newMessage = {
				id: messages.length + 1,
				status: "success",
				data: {
					id: "599bd33b-2b24-437a-89c5-54c998c87598",
					session_id: "76e4f0cf-4678-4ace-8d90-75815d5df78b",
					recipient: "SocialMediaManager-OliviaHarris",
					content: newMessageContent,
					role: "not user",
					name: "new user",
					created_at: new Date().toLocaleTimeString()
				}
			};
			messages = [...messages, newMessage];
			newMessageContent = "";
		}
	};

	let chatContainerElement: HTMLDivElement;

	afterUpdate(() => {
		if (chatContainerElement) {
			chatContainerElement.scrollTop = chatContainerElement.scrollHeight;
		}
	});

	const handeNewMessage = async () => {
		const queryParams = new URLSearchParams({
			id: "dfb9ede1-3c08-462f-af73-94cf6aa9185a"
		}).toString();
		console.log(queryParams, "query params");

		try {
			const response = await fetch(`/api/v1/meave?${queryParams}`);
			const data = await response.json();
			const jsonResponseString = data.content;

			// Splitting the string on '}}\n' to handle multiple JSON objects concatenated together.
			// Ensure to add back the removed characters that are required for valid JSON syntax.
			const jsonStrings = jsonResponseString
				.split("}}\n")
				.map((str) => (str.endsWith("}") ? str : str + "}}"));

			// Parsing each string to JSON, filtering out the 'done' message or any non-JSON strings
			const jsonObjects = jsonStrings
				.filter((str) => str.trim() && !str.includes('"status": "success", "data": "done"'))
				.map((str) => JSON.parse(str));

			// Adding parsed objects to the messages array
			messages = [...messages, ...jsonObjects];
			console.log(messages, "updated messages");
		} catch (error) {
			console.error("Error fetching chat maeave:", error);
		}
	};
</script>

<div class="container -mb-6 flex h-screen max-w-6xl flex-col justify-end p-6">
	<div class="no-scrollbar max-h-full overflow-y-auto" bind:this={chatContainerElement}>
		<!-- add scroll to the bottom of the chat  -->
		{#each messages as message}
			<div>
				{#if  message.data && 'content' in message.data && message.data.role === "user"}
					
					<div class="space-y-2 border-none">
						<Card.Root class=" max-w-2xl">
							<Card.Content class="grid gap-4 p-6">
								{#if message.data.content.startsWith("```") || message.data.content.includes("<")}
									<SvelteMarkdown source={message.data.content} />
								{:else}
									<p class="prose text-sm font-medium leading-5 tracking-widest">
										{message.data.content}
									</p>
								{/if}
							</Card.Content>
						</Card.Root>
						<Card.Root class="bg-background max-w-2xl border-none">
							<Card.Content class="grid w-full grid-cols-2 items-center justify-between gap-4 ">
								<div class="flex items-center gap-4">
									<p class="prose text-xs font-medium leading-none dark:text-blue-950">
										<User size="16" />
									</p>

									<p
										class="prose text-xs font-medium leading-none tracking-widest dark:text-blue-950"
									>
										{message.data.name} - Agent
									</p>
								</div>
								<p class="prose text-sm font-medium dark:text-blue-950">
									sent: {message.data.created_at}
								</p>
							</Card.Content>
						</Card.Root>
					</div>
				{:else}
					<div class="space-y-2">
						<Card.Root class=" ml-auto flex max-w-2xl flex-wrap rounded-bl-3xl border">
							<Card.Content class="prose grid gap-4 p-6">
								{#if message.data && 'content' in message.data && message.data.content.startsWith("```")}
									<SvelteMarkdown source={message.data.content} />
								{:else}
									<p class="prose text-sm font-medium leading-5 tracking-widest">
										{message.data.content}
									</p>
								{/if}
							</Card.Content>
						</Card.Root>
						<Card.Root class="ml-auto max-w-2xl border-none bg-transparent">
							<Card.Content class="grid w-full grid-cols-2 items-center justify-between gap-4">
								<p class="prose text-xs font-medium leading-8 dark:text-green-300">you</p>
								<p class="prose text-xs font-medium leading-8 dark:text-green-300">
									sent: {message.data.created_at}
								</p>
							</Card.Content>
						</Card.Root>
					</div>
				{/if}
			</div>
		{/each}
	</div>

	<div class="mb-2 space-y-16">
		<Card.Root class="border-secondary mt-4 max-w-full border">
			<Card.Content class="grid gap-4 p-2">
				<div class="flex justify-between">
					<p class="prose text-sm font-medium leading-8 tracking-widest">
						Waiting on your response...
					</p>
					<Loader class="prose" />
				</div>
			</Card.Content>
		</Card.Root>

		<form class="relative flex w-full max-w-full items-center" on:submit={handeNewMessage}>
			<Input
				bind:value={newMessageContent}
				on:input={handleInputChange}
				on:keydown={handleKeyDown}
				class="border-input  placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-6 text-sm shadow-sm ring-offset-0 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
				placeholder="Join the conversation by typing a message..."
			/>
			<Button
				variant="ghost"
				class="hover:bg-default absolute right-0 hover:scale-95"
				disabled={newMessageContent.length === 0}
				on:click={sendMessage}
			>
				<Send class="hover:text-primary" />
			</Button>
		</form>
	</div>
</div>
