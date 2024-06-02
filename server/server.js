const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3001;

const corsOptions = {
    origin: ['http://localhost:5178/'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.json());

app.post('/server/register', (req, res) => {
    const newUser = req.body;
    const filePath = path.join(__dirname, '../aplikacija/src/baza/baza.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Server error');
        }

        const users = JSON.parse(data);
        const userExists = users.some(user => user.username === newUser.username);

        if (userExists) {
            return res.status(400).send('User already exists');
        }

        users.push(newUser);

        fs.writeFile(filePath, JSON.stringify(users, null, 2), 'utf8', (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return res.status(500).send('Server error');
            }

            res.status(200).send('User registered successfully');
        });
    });
});

app.get('/server/users', (req, res) => {
    const filePath = path.join(__dirname, '../aplikacija/src/baza/baza.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Server error');
        }

        res.status(200).json(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
