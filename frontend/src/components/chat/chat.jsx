import {useState } from 'react'
import './chat.css'

function Chat() {
    const [ messeges, setMesseges] = useState([])
    const [ userInput, setUserInput] = useState('')

    async function getResponse(){
        try{
            if(!userinput) return 
            const response = await fetch('http://localhost:4000/chat', {
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userInput})
            }) 
            if (!response.ok){
                throw new Error('oops, something went wrong')
            }
            const {message} = await response.json()
            setMesseges([...messeges, userInput, message])
        } catch(error){
            console.log(error)
            return 'Someting went wrong!'
        }
    }
    return (
        <div id = "chat">
            <form onSubmit = {(e) => e.preventDefault ()}>
                <h2>Ask a question</h2>
                <input type = "text" name = "user-input" id="questionInput" 
                    placeholder= "what would you like to ask" 
                    onChange = {e => setUserInput(e.target.value)}/>
                <button type = "submit" onClick={getResponse} >Submit</button>
            </form>
            {
                messeges && messeges.map((text, index)=> (
                    <div key={index} className = "chatbox">
                        <p className={index % 2 == 0 ? "user-message" : "chatbot-response"}>{text}</p>
                        </div>
                ))
            }
        </div>
        
    )
}
export default Chat