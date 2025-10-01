import React from 'react';

interface Props {
    data: { fullName: string; country: string; languages: string; };
    updateData: (data: Partial<Props['data']>) => void;
}

const Step1_PersonalInfo: React.FC<Props> = ({ data, updateData }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
            <p className="mt-1 text-sm text-gray-500">This information will be displayed on your public profile.</p>
            <div className="mt-6 space-y-6">
                 <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={data.fullName}
                        onChange={(e) => updateData({ fullName: e.target.value })}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                        placeholder="e.g. Jane Doe"
                    />
                </div>
                 <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country of Origin</label>
                    <input
                        type="text"
                        name="country"
                        id="country"
                        value={data.country}
                        onChange={(e) => updateData({ country: e.target.value })}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                        placeholder="e.g. United States"
                    />
                </div>
                 <div>
                    <label htmlFor="languages" className="block text-sm font-medium text-gray-700">Languages you speak</label>
                    <input
                        type="text"
                        name="languages"
                        id="languages"
                        value={data.languages}
                        onChange={(e) => updateData({ languages: e.target.value })}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                        placeholder="e.g. English (Native), Spanish (Fluent)"
                    />
                    <p className="mt-2 text-sm text-gray-500">Separate languages with commas.</p>
                </div>
            </div>
        </div>
    );
};

export default Step1_PersonalInfo;
