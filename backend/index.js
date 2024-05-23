const express = require('express');
const { spawn } = require('child_process');
const app = express();
const port = 5000;

app.use(express.json());

app.post('/hello-world', (req, res) => {
    res.send('hello, world. Or should I say ... Sam');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});