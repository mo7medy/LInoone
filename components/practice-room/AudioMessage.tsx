import React, { useState, useRef } from 'react';
import { PlayIcon, PauseIcon } from '../icons/Icons';

interface AudioMessageProps {
    audioSrc: string;
    isSender: boolean;
}

const AudioMessage: React.FC<AudioMessageProps> = ({ audioSrc, isSender }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlay = () => {
        // This is a mock; in a real app, you'd use an Audio object
        setIsPlaying(!isPlaying);
    };

    const bubbleClasses = isSender
        ? 'bg-teal-600 text-white rounded-l-xl rounded-t-xl'
        : 'bg-white text-gray-800 rounded-r-xl rounded-t-xl shadow-sm';
    const containerClasses = isSender ? 'justify-end' : 'justify-start';
    
    const partnerAvatar = 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop';

    return (
        <div className={`flex items-end gap-2 ${containerClasses}`}>
             {!isSender && <img src={partnerAvatar} alt="avatar" className="w-8 h-8 rounded-full mb-1" />}
            <div className={`px-3 py-2 rounded-lg flex items-center gap-2 ${bubbleClasses}`} style={{ minWidth: '200px' }}>
                <button onClick={togglePlay} className="flex-shrink-0 text-inherit">
                    {isPlaying ? <PauseIcon className="w-6 h-6" /> : <PlayIcon className="w-6 h-6" />}
                </button>
                <div className="flex-grow h-1 bg-white/30 rounded-full cursor-pointer">
                    <div className="w-1/3 h-full bg-white rounded-full relative">
                       <div className="absolute -right-1.5 -top-1 w-3 h-3 bg-white rounded-full"></div>
                    </div>
                </div>
                <span className="text-xs w-10 text-right">0:12</span>
            </div>
        </div>
    );
};

export default AudioMessage;