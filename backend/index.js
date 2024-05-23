const express = require('express');
const { spawn } = require('child_process');
const app = express();
const port = 5000;

app.use(express.json());

app.post('/run-script', (req, res) => {
    const input = req.body.input;
    // Simulate running a script
    const output = `Processed input: ${input}`;
    res.json({ output });
});

app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`hello, world. Or should I say ... ${name}`);
});

app.get('/hello', (req, res) => {
    const name = req.query.name || 'world';
    res.send(`hello, world. Or should I say ... ${name}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});