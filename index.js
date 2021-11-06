const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = ['apple', 'banana', 'orange', 'watermelon'];

app.get('/', (req, res) => {
  res.send('Welcome To Node Learning.............');
});

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const name = users[id];
  res.send({id, name});
});


//post 
app.post('/addUser', (req, res) => {
  console.log('abc',req.body);
})

app.listen(9000, () => console.log('Listenting to port 9000'));
