import fs from 'node:fs';

const requestHandler = (req, res) => {
	const url = req.url;
	const method = req.method;

	if (url === '/') {
		res.write('<html>');
		res.write('<head><title>CRUD</title></head>');
		res.write('<body>');
		res.write('<h3>Welcome<h3>');
		res.write(
			'<form action="/update" method="POST"><input type="text" name="update"><button type="submit">Send</button></form>'
		);
		res.write('</html>');
		res.write('</html>');
		return res.end();
	}

	// res.setHeader('Content-Type', 'text/html');
	// res.write('<html>');
	// res.write('<h3>Sent!<h3>');
	// res.write('</html>');
	// return res.end();

	// if (url === '/create' && method === 'PUT') {
	//   fs.writeFileSync('create.txt', 'create');
	//   res.statusCode = 302;
	//   res.setHeader('Location', '/');

	//   res.setHeader('Content-Type', 'text/html');
	//   res.write('<html><h3>create</h3></html>');
	//   return res.end();
	// }

	// if (url === '/read') {
	// if (url === '/get' && method === 'GET') {
	//   res.setHeader('Content-Type', 'text/html');
	//   res.write('<html><h3>get</h3></html>');
	//   res.end();
	// }

	if (url === '/update' && method === 'POST') {
		const body = [];

		req.on('data', (chunk) => {
			console.log(chunk);
			body.push(chunk);
		});

		req.on('end', () => {
			const parseBody = Buffer.concat(body).toString();
			const content = parseBody.split('=')[1];
			fs.writeFile('create.txt', content, (err) => {
				res.statusCode = 302;
				res.setHeader('Location', '/');
				return res.end();
			});

			console.log(parseBody);
		});
	}

	// if (url === '/delete' && method === 'DELETE') {
	//   res.setHeader('Content-Type', 'text/html');
	//   res.write('<html><h3>delete</h3></html>');
	//   res.end();
	// }

	// res.writeHead(200, { 'Content-Type': 'application/json' });
	//   res.end(JSON.stringify({
	//     data: 'Hello World!',
	//   }));
	// process.exit()
};

export default requestHandler;
