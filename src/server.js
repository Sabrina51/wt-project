import express from 'express';

const app = express();
const port = '7070';

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
