// server.js for the chat responses

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
dotenv.config()


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/chat', (req, res) => {
const { userInput } = req.body;

let response;

if (/hello/i.test(userInput)) {
    response = "Hi there! 👋 How can I help you today?";
} else if (/hours|open/i.test(userInput)) {
    response = "We're open from 9 AM to 5 PM, Monday through Friday.";
} else {
    response = "I'm sorry, I didn't understand that. Can you rephrase?";
}

res.json({ message: response });
});

const PORT = 4000;
app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});
