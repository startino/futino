const cspDirectives = {
	'base-uri': ['self'],
	'child-src': ['self'],
	'frame-src': ['self', 'https://cal.com/'],
	'object-src': ['none'],
	'script-src': [
		'strict-dynamic',
		'sha256-5YL4/7jQ2wHbIW+/6gQCDXi0r4rVPpoJKFeviOAmwEs=', // Theme loading hash in app.html
		'sha256-/uH9FfnpPf+sbDTuH//T/mjmP8A+oq+GfugZGxsm4+g=',
	],
	'worker-src': ['self'],
};

export default cspDirectives;
