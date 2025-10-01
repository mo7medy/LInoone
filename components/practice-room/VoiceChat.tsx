import React, { useState } from 'react';
import { MicIcon, MicOffIcon, PhoneMissedIcon } from '../icons/Icons';

interface VoiceChatProps {
    onEndCall: () => void;
}

const VoiceChat: React.FC<VoiceChatProps> = ({ onEndCall }) => {
    const [isMuted, setIsMuted] = useState(false);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex flex-col items-center justify-center p-4">
            <div className="text-center text-white mb-8">
                <img 
                    src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop" 
                    alt="Kenji T." 
                    className="w-32 h-32 rounded-full object-cover mx-auto ring-4 ring-white mb-4" 
                />
                <h2 className="text-3xl font-bold">Kenji T.</h2>
                <p className="text-lg text-gray-300">Calling...</p>
            </div>
            
            <div className="absolute bottom-10 flex justify-center items-center space-x-6">
                <button 
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-4 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
                >
                    {isMuted ? <MicOffIcon className="w-8 h-8 text-white" /> : <MicIcon className="w-8 h-8 text-white" />}
                </button>
                <button 
                    onClick={onEndCall}
                    className="p-4 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
                >
                    <PhoneMissedIcon className="w-8 h-8 text-white" />
                </button>
            </div>
        </div>
    );
};

export default VoiceChat;