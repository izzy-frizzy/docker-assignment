const app = require('express')();

const port  = 8080;

app.get('/', (req, res) =>
res.json({message: 'hi'})
);

app.listen(port, () => console.log('app lostening on http://localhost:'));