const express = require('express');
const { spawn } = require('child_process');
const app = express();
const port = 5000;

app.use(express.json());

app.post('/run-script/:input', (req, res) => {
    // const input = req.body.input;
    const input = req.params.input;

    const pythonProcess = spawn('python', ['test_script.py', input]);
    

    let scriptOutput = '';
    let scriptError = '';

    // Collect data from the script's stdout
    pythonProcess.stdout.on('data', (data) => {
        scriptOutput += data.toString();
    });

    // Collect data from the script's stderr
    pythonProcess.stderr.on('data', (data) => {
        scriptError += data.toString();
    });

    // Handle the close event
    pythonProcess.on('close', (code) => {
        if (code === 0) {
            res.json({ output: scriptOutput });
        } else {
            res.status(500).json({ error: scriptError });
        }
    });

    // Handle other potential errors
    pythonProcess.on('error', (err) => {
        res.status(500).json({ error: err.message });
    });
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