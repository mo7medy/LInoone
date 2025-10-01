import React from 'react';
import { UploadCloudIcon } from '../icons/Icons';

interface Props {
    data: { headline: string; bio: string; photo: any; };
    updateData: (data: Partial<Props['data']>) => void;
}

const Step3_About: React.FC<Props> = ({ data, updateData }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-900">About You</h2>
            <p className="mt-1 text-sm text-gray-500">A great profile photo and bio helps you stand out to students.</p>
            <div className="mt-6 space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Profile Photo</label>
                    <div className="mt-1 flex items-center space-x-6">
                        <span className="inline-block h-20 w-20 rounded-full overflow-hidden bg-gray-100">
                             <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 20.993V24H0v-2.997A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </span>
                        <button
                            type="button"
                            className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                        >
                            Change
                        </button>
                    </div>
                </div>

                 <div>
                    <label htmlFor="headline" className="block text-sm font-medium text-gray-700">Profile Headline</label>
                    <input
                        type="text"
                        name="headline"
                        id="headline"
                        value={data.headline}
                        onChange={(e) => updateData({ headline: e.target.value })}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                        placeholder="e.g. Certified TEFL tutor with 5 years of experience."
                    />
                    <p className="mt-2 text-sm text-gray-500">This is the first thing students will see in search results.</p>
                </div>

                 <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700">About Me / Teaching Style</label>
                    <textarea
                        id="bio"
                        name="bio"
                        rows={6}
                        value={data.bio}
                        onChange={(e) => updateData({ bio: e.target.value })}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                        placeholder="Tell students about yourself, your teaching style, and what they can expect from your lessons."
                    ></textarea>
                </div>
            </div>
        </div>
    );
};

export default Step3_About;
