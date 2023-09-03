const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

const app = express();

app.use('/public', express.static('public'));
app.set('view engine', 'ejs');

app.use(session({
    secret: 'mysecretkey',
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    const user = new User({
        username: username,
        email: email,
        password: password
    });
    user.save()
        .then(() => {
            res.redirect('/login');
        })
        .catch((error) => {
            console.error('Error saving user:', error);
            res.redirect('/signup');
        });
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username: username, password: password })
        .then((user) => {
            if (user) {
                req.session.username = username; // Store the username in session
                res.redirect('/dashboard');
            } else {
                res.redirect('/login');
            }
        })
        .catch((error) => {
            console.error('Error finding user:', error);
            res.redirect('/login');
        });
});

const timeLogger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] - ${req.method} ${req.url}`);
    next();
};

app.use(timeLogger);

app.get('/dashboard', (req, res) => {
    const username = req.session.username; // Retrieve the username from session
    res.render('dashboard', { username });
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/views/contact.html');
});

app.get('/main', (req, res) => {
    res.sendFile(__dirname + '/views/main.html');
});

app.get('/notes', (req, res) => {
    res.sendFile(__dirname + '/views/notes.html');
});

app.get('/rotd', (req, res) => {
    res.sendFile(__dirname + '/views/rotd.html');
});

app.get('/sign', (req, res) => {
    res.sendFile('/views/sign.html', { root: __dirname });
});

app.listen(3001, () => {
    console.log('Server listening on port 3001');
});