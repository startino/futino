export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/MJP_20230927_Mui_Wo_jiu-jitsu_9137.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9151.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9172.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9200.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9219.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9223.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9286.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9288.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9291.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9297.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9326.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9335.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9342.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9350.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9376.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9380.jpg","images/Screenshot.png","images/buffalo_travel_times.jpg","images/buffalo_travel_times_1.jpg","images/relaxed_bjj.gif","mermaid-diagram-2023-11-01-133919.svg","videos/1280_high.mp4","videos/1280_high.webm","videos/1920_high.mp4","videos/1920_high.webm","videos/1920_med.mp4","videos/buffalo_hero_vid_4k.webm","videos/slow_bjj.mp4"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".gif":"image/gif",".svg":"image/svg+xml",".mp4":"video/mp4",".webm":"video/webm"},
	_: {
		client: {"start":"_app/immutable/entry/start.ba109545.js","app":"_app/immutable/entry/app.6363c354.js","imports":["_app/immutable/entry/start.ba109545.js","_app/immutable/chunks/scheduler.72dec800.js","_app/immutable/chunks/singletons.d342ba67.js","_app/immutable/entry/app.6363c354.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.72dec800.js","_app/immutable/chunks/index.67aeaf3b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
