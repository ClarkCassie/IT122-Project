// Imports
const express = require('express');
const app = express();
//const port = 5000;


// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

// Set views
app.set('views', './views');
app.set('view engine', 'ejs');

// Set routes
app.get('', (req, res) => {
  res.render('index', { text: 'This is EJS'})
});

app.get('/about', (req, res) => {
  re.render('about', {text: 'This is about' })
});

let listener = app.listen();
console.log(`Listening to port number ${listener.address().port}`);

//app.listen(port, () => console.info(`App listen on port ${port}`));

