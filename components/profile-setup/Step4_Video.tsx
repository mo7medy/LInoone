import React from 'react';
import { VideoCameraIcon, UploadCloudIcon } from '../icons/Icons';

interface Props {
    data: { video: any; };
    updateData: (data: Partial<Props['data']>) => void;
}

const Step4_Video: React.FC<Props> = ({ data, updateData }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-900">Video Introduction</h2>
            <p className="mt-1 text-sm text-gray-500">Tutors with a video get 5x more students. Make a great first impression!</p>
            <div className="mt-6">
                <div className="flex items-start p-4 rounded-md bg-blue-50 border border-blue-200">
                    <VideoCameraIcon className="flex-shrink-0 h-6 w-6 text-blue-500"/>
                    <div className="ml-3">
                        <h3 className="text-sm font-medium text-blue-800">Video Tips</h3>
                        <div className="mt-2 text-sm text-blue-700">
                            <ul className="list-disc space-y-1 pl-5">
                                <li>Record in a quiet, well-lit place.</li>
                                <li>Be friendly and smile!</li>
                                <li>Keep it short (1-2 minutes).</li>
                                <li>Mention your experience and what makes you a great tutor.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                     <label className="block text-sm font-medium text-gray-700">Upload your video</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            <UploadCloudIcon className="mx-auto h-12 w-12 text-gray-400" />
                            <div className="flex text-sm text-gray-600">
                                <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-cyan-600 hover:text-cyan-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500"
                                >
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">MP4, MOV, AVI up to 500MB</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step4_Video;
