export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/MJP_20230927_Mui_Wo_jiu-jitsu_9137.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9151.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9172.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9200.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9219.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9223.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9286.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9288.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9291.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9297.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9326.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9335.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9342.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9350.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9376.jpg","images/MJP_20230927_Mui_Wo_jiu-jitsu_9380.jpg","images/Screenshot.png","images/buffalo_travel_times.jpg","mermaid-diagram-2023-11-01-133919.svg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.67597a00.js","app":"_app/immutable/entry/app.e03ae245.js","imports":["_app/immutable/entry/start.67597a00.js","_app/immutable/chunks/scheduler.b5cb2f20.js","_app/immutable/chunks/singletons.ea7f411d.js","_app/immutable/entry/app.e03ae245.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.b5cb2f20.js","_app/immutable/chunks/index.b54eaf43.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
