express = require('express');

var app = express();

app.get('/', function(req, res) {
	html  = '<h1>Express</h1><p>Welcome to my node.js express project!</p>';
	html += '<h2>My Pages</h2>';
		pages = ['hello.txt'];

		links = '<ul>';
		for(var i = 0; i < pages.length; ++i) {
			links += '<li><a href="'+pages[i]+'">'+pages[i]+'</a></li>';
		}
		links += '</ul>';

	html += links;

	res.send(html);
});

app.get('/hello.txt', function(req, res) {
	var body = 'Hello World!!!';
	res.setHeader('Content-Type', 'text/plain');
	res.setHeader('Content-Length', body.length);
	res.end(body);

	/* NOTE: The above could be simply written as
	 *
	 * res.send('Hello World!!!');
	 *
	 * */
});

app.listen(3000);
console.log('Listening on port 3000');