import React, { useRef, useEffect } from 'react';
import ChatBubble from './ChatBubble';
import AudioMessage from './AudioMessage';

interface Message {
  id: number;
  type: 'text' | 'audio';
  content: string;
  sender: 'me' | 'partner';
  avatar: string;
}

interface MessageChatProps {
    messages: Message[];
}

const MessageChat: React.FC<MessageChatProps> = ({ messages }) => {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(scrollToBottom, [messages]);

    return (
        <div className="h-full space-y-4">
            {messages.map(msg => (
                msg.type === 'text' ?
                <ChatBubble key={msg.id} message={msg.content} isSender={msg.sender === 'me'} />
                : <AudioMessage key={msg.id} audioSrc={msg.content} isSender={msg.sender === 'me'} />
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default MessageChat;