import React, { useState, useRef, useEffect } from 'react';
import { Page } from '../App';
import PracticeRoomHeader from '../components/practice-room/PracticeRoomHeader';
import VoiceChat from '../components/practice-room/VoiceChat';
import MessageChat from '../components/practice-room/MessageChat';
import ChatInput from '../components/practice-room/ChatInput';

interface Message {
  id: number;
  type: 'text' | 'audio';
  content: string;
  sender: 'me' | 'partner';
  avatar: string;
}

const initialMessages: Message[] = [
    { id: 1, type: 'text', content: 'Hey! Ready to practice some English?', sender: 'partner', avatar: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop' },
    { id: 2, type: 'text', content: 'Hi Kenji! Yes, absolutely. I want to talk about travel today.', sender: 'me', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop' },
    { id: 3, type: 'audio', content: 'audio_placeholder.mp3', sender: 'partner', avatar: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop' },
    { id: 4, type: 'text', content: "Great topic! Where is the most interesting place you've ever traveled to?", sender: 'partner', avatar: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop' }
];

const PracticeRoomPage: React.FC<{ navigateTo: (page: Page) => void }> = ({ navigateTo }) => {
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [isCallActive, setIsCallActive] = useState(false);

    const handleSendMessage = (message: string) => {
        if (message.trim() === '') return;
        const newMessage: Message = {
            id: messages.length + 1,
            type: 'text',
            content: message,
            sender: 'me',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop'
        };
        setMessages(prev => [...prev, newMessage]);
    };

    const handleSendVoiceMessage = () => {
        const newVoiceMessage: Message = {
            id: messages.length + 1,
            type: 'audio',
            content: 'new_audio.mp3',
            sender: 'me',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop'
        };
        setMessages(prev => [...prev, newVoiceMessage]);
    }

    return (
        <div className="flex flex-col h-screen bg-gray-200">
            <PracticeRoomHeader 
                partnerName="Kenji T." 
                partnerImage="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop"
                navigateTo={navigateTo} 
                onStartCall={() => setIsCallActive(true)}
            />
            
            <main 
                className="flex-1 overflow-y-auto p-4"
                style={{
                    backgroundColor: '#E5DDD5',
                    backgroundImage: `url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')`
                }}
            >
                <MessageChat messages={messages} />
            </main>

            <footer className="p-2 bg-gray-100 border-t border-gray-200">
                <ChatInput onSendMessage={handleSendMessage} onSendVoiceMessage={handleSendVoiceMessage} />
            </footer>

            {isCallActive && <VoiceChat onEndCall={() => setIsCallActive(false)} />}
        </div>
    );
};

export default PracticeRoomPage;