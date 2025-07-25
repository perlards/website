import {useState } from 'react'
import './chat.css'

function Chat() {
    const [ messages, setMessages] = useState(["Hello! How can I help you?"])
    const [ userInput, setUserInput] = useState('')
    const [loading, setLoading] = useState(false) // loading icon

    async function getResponse(){
        if (!userInput.trim()) return
        const userMessage = userInput;

            setMessages(prev => {
                const newMessages = [...prev, userInput];
                // Keep last 6 messages max (3 questions + 3 answers)
                return newMessages.slice(-6);
            });
            setUserInput('')
            setLoading(true)
            try{
            const response = await fetch('http://localhost:4000/chat', {
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userInput: userMessage })
            }) 
            if (!response.ok){
                throw new Error('Oops, something went wrong!')
            }
            const {message} = await response.json()
            setMessages(prev => {
                const newMessages = [...prev, message];
                return newMessages.slice(-6);
            });
            

        } catch(error){
            console.error(error)
            setMessages(prev => {
                const newMessages = [...prev, "Something went wrong!"];
                return newMessages.slice(-6);
            });
        }
        setLoading(false);
    }
    return (
        <div id = "chat">
            <form onSubmit={(e) => { e.preventDefault(); getResponse(); }}>    
                <h2>Have a question?</h2>
                <div className="input-group"> 
                <input 
                type = "text" 
                name = "user-input" 
                id="questionInput" 
                placeholder= "Type your question here..." 
                value={userInput}
                onChange = {e => setUserInput(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </div>
            </form>
            
            <div className="chat-history">
            {messages.map((text, index) => (
                <div key={index} className="chatbox">
                    <p className={
                        index === 0
                            ? "chatbot-greeting"
                            : index % 2 === 0
                            ? "user-message"
                            : "chatbot-response"
                    }>
                        {text}
                    </p>
                </div>
            ))}
            {/* Show loading indicator */}
        {loading && <div className="chatbox">
            <p className="chatbot-response">AI is typing...</p>
            </div>
            }
        </div>
    </div>
    );
}

export default Chat

