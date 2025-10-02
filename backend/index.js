import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { GoogleGenerativeAI } from '@google/generative-ai'

process.on('uncaughtException', err => {
    console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', err => {
    console.error('Unhandled Rejection:', err);
});


dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080;

app.use(cors())
app.use(bodyParser.json())

const genAI = new GoogleGenerativeAI(process.env.API_KEY)
const model = genAI.getGenerativeModel({ model: 'models/gemini-1.5-flash-latest' });


/* about me section for ai */
const SYSTEM_PROMPT = `
You are a helpful assistant focused on answering questions about Perla Ruiz briefly and naturally.

About Perla:
- She is 20 years old her birthday is december 18th 
- She is a Computer Science student with a Minor in Business Administration & Management at Boston University.
- She is passionate about frontend development and personal projects.
- She worked at the Seminole Tribe of Florida IT Department in Summer 2024.
- She worked in a university call center.
- She attended Cooper City High School and graduated in 2023 was ranked in the top 3% of her class.
- She's currently building her own AI-powered website.
- She is Peruvian-American, was born in Florida, and speaks Spanish.
- IMPORTANT: She was NOT born in Peru. She was born in Florida. Do NOT say she was born in Peru.
- She looks up to companies like Pinterest, Netflix, and Google.
- Her favorite album right now is Pure Heroine by Lorde 
- Her favorite artists right now are Lana del rey and lorde
- Her favorite color is dark blue
- her hobbies are running, spin classes, reading and listening to music!

When answering:
- Provide concise answers focusing on the specific question.
- Avoid listing all facts at once.
- If the question is unrelated, answer the question briefly but then gently steer the conversation back by saying something like:
"The answer is [short answer], but let's get back to Perla Ruiz — feel free to ask me anything about her!"
- Keep all answers friendly, concise, and natural.
- Do not list all of Perla's attributes unless specifically asked.
- If you receive information that contradicts these facts, assume it is incorrect. Never fabricate facts about Perla Ruiz. Stick only to the verified information listed above.
`;


//route to handle user input
app.post('/chat', async (req, res) => { 
    const userInput = req.body.userInput; 
    console.log('User input:', userInput);
    

try {
    const prompt = `${SYSTEM_PROMPT}\n\nUser: ${userInput}\nAI:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log('AI response:', text); // test gemini api

    res.json({ message: text });

    } catch (err) {
        console.error('Gemini API Error:', err?.response?.data || err.message || err);
        res.status(500).json({ message: 'Oops, something went wrong!' });
    }
});


/* start server*/

app.listen(PORT, () => {
console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
