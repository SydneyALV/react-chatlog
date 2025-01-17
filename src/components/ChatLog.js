import React from 'react'
import './ChatLog.css'
import ChatEntry from './ChatEntry'

const ChatLog = ({ entries, likeMessage, colorChoice }) => {
    const entryComponents = entries.map(entry => {
        return (
            <ChatEntry 
            id= {entry.id}
            sender= {entry.sender}
            body= {entry.body}
            timeStamp= {entry.timeStamp}
            liked= {entry.liked}
            likeMessage= {likeMessage} 
            colorChoice={colorChoice}
            />
        )
    })

    return (
    <div className="chat-log">
        <section>{entryComponents}</section>
    </div>
    )
}

export default ChatLog