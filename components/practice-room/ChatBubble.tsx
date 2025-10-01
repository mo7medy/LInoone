import React from 'react';

interface ChatBubbleProps {
    message: string;
    isSender: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isSender }) => {
    const bubbleClasses = isSender
        ? 'bg-teal-600 text-white rounded-l-xl rounded-t-xl'
        : 'bg-white text-gray-800 rounded-r-xl rounded-t-xl shadow-sm';
    const containerClasses = isSender ? 'justify-end' : 'justify-start';

    return (
        <div className={`flex items-end gap-2 ${containerClasses}`}>
            <div className={`px-4 py-2 rounded-lg max-w-xs lg:max-w-md ${bubbleClasses}`}>
                <p className="text-sm">{message}</p>
            </div>
        </div>
    );
};

export default ChatBubble;