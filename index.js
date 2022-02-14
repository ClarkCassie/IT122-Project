// Imports
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

//When a request is made to the server, an HTML file is served - This is my 'about' route
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/index.html'))
);

app.post('/newItem', (req, res) =>
  res.send(`a post request with /newItem route on port ${PORT}`)
);

app.put('/item', (req, res) =>
  res.send(`a put request with /item route on port ${PORT}`)
);

app.delete('/item', (req, res) =>
  res.send(`a delete request with /item route on port ${PORT}`)
);

//Here is the default welcome message
app.listen(PORT, () =>
  console.log(`Welcome.  This server is running on port ${PORT}.  Connect to localhost:3000 to see my routes in action!`)
);


