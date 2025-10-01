import React, { useState } from 'react';
import { SendIcon, PaperclipIcon, MicIcon, EmojiHappyIcon } from '../icons/Icons';

interface ChatInputProps {
    onSendMessage: (message: string) => void;
    onSendVoiceMessage: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, onSendVoiceMessage }) => {
    const [message, setMessage] = useState('');
    const [isRecording, setIsRecording] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(message.trim()){
            onSendMessage(message);
            setMessage('');
        }
    };

    const handleMicPress = () => {
        setIsRecording(true);
        // Add recording logic here
    };
    
    const handleMicRelease = () => {
        setIsRecording(false);
        // In a real app, you'd check if the recording is long enough
        onSendVoiceMessage();
    };
    
    return (
        <div className="flex items-center space-x-2">
            <div className="flex-1 flex items-center bg-white rounded-full p-1 shadow-sm">
                <button type="button" className="p-2 text-gray-500 hover:text-gray-700 rounded-full">
                    <EmojiHappyIcon className="w-6 h-6" />
                </button>
                <form onSubmit={handleSubmit} className="flex-1">
                    <input 
                        type="text" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Message"
                        className="w-full px-3 py-2 text-gray-700 bg-transparent border-none focus:outline-none focus:ring-0"
                    />
                </form>
                <button type="button" className="p-2 text-gray-500 hover:text-gray-700 rounded-full">
                    <PaperclipIcon className="w-6 h-6" />
                </button>
            </div>
            {message.trim() ? (
                <button onClick={handleSubmit} type="submit" className="flex-shrink-0 p-3 bg-teal-600 text-white rounded-full shadow-md hover:bg-teal-700">
                    <SendIcon className="w-6 h-6" />
                </button>
            ) : (
                <button 
                    onMouseDown={handleMicPress}
                    onMouseUp={handleMicRelease}
                    onTouchStart={handleMicPress}
                    onTouchEnd={handleMicRelease}
                    type="button" 
                    className={`flex-shrink-0 p-3 text-white rounded-full shadow-md transition-colors ${isRecording ? 'bg-red-500' : 'bg-teal-600 hover:bg-teal-700'}`}
                >
                    <MicIcon className="w-6 h-6" />
                </button>
            )}
        </div>
    );
};

export default ChatInput;