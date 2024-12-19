// Chatbot.jsx
import React, { useState, useEffect } from "react"
import API from "./ChatbotAPI" // Make sure to keep the API import
import { MessageCircle, Send, X } from "lucide-react"
import "./Css/chatbotstyles.css" // Import the CSS file

const Chatbot = () => {
    const [isChatOpen, setIsChatOpen] = useState(false)
    const [messages, setMessages] = useState([])
    const [inputMessage, setInputMessage] = useState("")

    // Load welcome message on component mount
    useEffect(() => {
        async function loadWelcomeMessage() {
            const welcomeMessage = await API.GetChatbotResponse("hi")
            setMessages([{ id: 0, text: welcomeMessage, sender: "bot" }])
        }
        loadWelcomeMessage()
    }, [])

    // Toggle chat visibility
    const toggleChat = () => setIsChatOpen(!isChatOpen)

    // Handle sending messages
    const sendMessage = async (e) => {
        e.preventDefault()
        if (inputMessage.trim()) {
            const userMessage = {
                id: messages.length + 1,
                text: inputMessage,
                sender: "user",
            }
            const botResponse = await API.GetChatbotResponse(inputMessage)
            const botMessage = {
                id: messages.length + 2,
                text: botResponse,
                sender: "bot",
            }

            setMessages([...messages, userMessage, botMessage])
            setInputMessage("")
        }
    }

    return (
        <div>
            <button onClick={toggleChat} className="chat-toggle-btn">
                <MessageCircle size={24} />
            </button>

            {isChatOpen && (
                <div className="chat-box">
                    <div className="chat-header">
                        <h2>Chat Support</h2>
                        <button className="close-btn" onClick={toggleChat}>
                            <X size={25} />
                        </button>
                    </div>

                    <div className="chat-messages">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`chat-message ${
                                    message.sender === "user"
                                        ? "user-message"
                                        : "bot-message"
                                }`}
                            >
                                {message.sender === "bot" && (
                                    <div className="bot-avatar">🤖</div>
                                )}
                                <div className="message-text">
                                    {message.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    <form onSubmit={sendMessage} className="chat-input-form">
                        <input
                            type="text"
                            placeholder="Enter your Query..."
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            className="chat-input"
                        />
                        <button type="submit" className="send-btn">
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Chatbot
