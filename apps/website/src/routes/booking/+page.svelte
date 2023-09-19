<script lang="js" type="text/javascript">
	import { onMount } from 'svelte';

	onMount(() => {
		(function (C, A, L) {
			// @ts-ignore
			let p = function (a, ar) {
				a.q.push(ar);
			};
			let d = C.document;
			// @ts-ignore
			C.Cal =
				C.Cal ||
				function () {
					// @ts-ignore
					let cal = C.Cal;
					let ar = arguments;
					if (!cal.loaded) {
						cal.ns = {};
						cal.q = cal.q || [];
						d.head.appendChild(d.createElement('script')).src = A;
						cal.loaded = true;
					}
					if (ar[0] === L) {
						const api = function () {
							p(api, arguments);
						};
						const namespace = ar[1];
						// @ts-ignore
						api.q = api.q || [];
						typeof namespace === 'string' ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar);
						return;
					}
					p(cal, ar);
				};
		})(window, 'https://app.cal.com/embed/embed.js', 'init');
		// @ts-ignore
		Cal('init', { origin: 'https://cal.com' });

		// @ts-ignore
		Cal('inline', {
			elementOrSelector: '#my-cal-inline',
			calLink: 'futino/15-minute-intro-call',
			layout: 'month_view',
		});

		// @ts-ignore
		Cal('ui', {
			cssVarsPerTheme: { branding: { brandColor: '#00b951' } },
			hideEventTypeDetails: false,
			layout: 'month_view',
		});
	});
</script>

<main>
	<section>
		<div class="inner-section w-full h-fit mt-20">
			<!-- Cal inline embed code begins -->
			<div style="width:100%;height:100%;overflow:scroll" id="my-cal-inline" />
			<!-- Cal inline embed code ends -->
		</div>
	</section>
</main>
