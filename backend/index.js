import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { GoogleGenerativeAI } from '@google/generative-ai'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000;

app.use(cors())
app.use(bodyParser.json())

const genAI = new GoogleGenerativeAI(process.env.API_KEY)
const model = genAI.getGenerativeModel({ model: 'models/gemini-1.5-flash' });


/* about me section for ai */
const SYSTEM_PROMPT = `
You are a helpful assistant that answers questions about Perla Ruiz.

About Perla:
- She is 20 years old her birthday is december 18th 
- She is a Computer Science student at Boston University.
- She is passionate about frontend development and personal projects.
- She worked at the Seminole Tribe of Florida IT Department in Summer 2024.
- She worked in a university call center.
- She restarted her high school Spanish club and grew it to 120+ members.
- She's currently building her own AI-powered website.
- She is from Peru and speaks spanish
- She looks up to companies like Pinterest, Netflix, and Google.
- Her favorite album right now is Pure Heroine by Lorde 
- Her favorite artists right now are Lana del rey and lorde
- Her favorite color is blue

Answer questions as if you're introducing Perla to someone new.
`;


const chat = model.startChat({
    history: [
        {author: 'system', content: SYSTEM_PROMPT }
    ],
    generationConfig: {
    temperature: 0.7,
    },
});
//route to handle user input
app.post('/chat', async (req, res) => { 
    const userInput = req.body.userInput; 
    console.log('User input:', userInput);

try {
    const result = await chat.sendMessage(userInput);
    const response = await result.response;
    const text = response.text();
    res.json({ message: text });

}catch(err) {
    console.error('Error!', err)
    return res.status(500).json({ message: 'Oops, something went wrong!' });
} 
})
/* start server*/
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})