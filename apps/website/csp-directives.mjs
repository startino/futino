const cspDirectives = {
	'base-uri': ['self'],
	'child-src': ['self'],
	'object-src': ['none'],
	'script-src': [
		'strict-dynamic',
		'sha256-5YL4/7jQ2wHbIW+/6gQCDXi0r4rVPpoJKFeviOAmwEs=', // Theme loading hash in app.html
	],
	'worker-src': ['self'],
};

export default cspDirectives;
