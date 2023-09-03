const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/LoginFormPractice")
    .then(() => {
        console.log('mongoose connected');
    })
    .catch((e) => {
        console.log('failed');
    })

const logInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

app.get('/data', async(req, res) => {
    try {
        const result = await performAsyncOperation();
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

function performAsyncOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: 'Async operation complete' };
            resolve(data);
        }, 2000); // Simulating a 2-second delay
    });
}

var List = mongoose.model("List", schema)
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.sendFile('/todo.html', { root: __dirname })
});
app.post('/', (req, res) => {
    const data = new List(req.body)
    data.save().then(item => {
        res.send("saved")
    })
});
app.get('/show', async(req, res) => {
    const lists = await List.find();
    res.render('showlist', { lists })
})

app.post('/delete', (req, res) => {
    List.findOneAndDelete({ title: req.body.title }).then(() => {
        console.log("Deleted");
        res.redirect('/show');
    }).catch(err => console.log(err));
});


const LogInCollection = new mongoose.model('LogInCollection', logInSchema)

module.exports = LogInCollection