import express from 'express'
import cors from 'cors';
import fs from 'fs'

const app = express()
const PORT = 3001


app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to GreenTechIO Server!')
})

app.use(express.json()); // middleware to parse JSON body

app.listen(PORT, () => {
    console.log(`GreenTechIO server running at  http://localhost:${PORT}`);
});

/**
 * Route: POST /api/signup
 * Description: Handles user registration
 * Expects: JSON body with { name, email, password }
 */
app.post('/api/signup', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Missing required field(s)' });
    }

    let users = [];

    try {
        users = JSON.parse(fs.readFileSync('./db/users.json', 'utf-8'));
    } catch (err) {
        return res.status(500).json({ error: 'Failed to read/write users data' });
    }

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(409).json({ error: 'Email already registered' });
    }

    const newUser = { name, email, password };
    users.push(newUser);

    try {
        fs.writeFileSync('./db/users.json', JSON.stringify(users, null, 2));
    } catch (err) {
        return res.status(500).json({ error: 'Failed to save user' });
    }

    console.log('User added successfully.');
    res.status(201).json({ message: 'User added successfully' });
});


/**
 * Route: POST /api/signin
 * Description: Handles user login
 * Expects: JSON body with { email, password }
 */
app.post('/api/signin', (req, res) => {
    const { email, password } = req.body;


    if (!email || !password) {
        return res.status(400).json({ error: 'Missing email or password' });
    }

    let users;

    try {
        users = JSON.parse(fs.readFileSync('./db/users.json', 'utf-8'));
    } catch (err) {
        return res.status(500).json({ error: 'Failed to read users data' });
    }

    const foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
        res.status(200).json({ message: 'User signed in successfully', user: foundUser });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});
