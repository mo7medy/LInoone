import React from 'react';
import { BookOpenIcon, AcademicCapIcon } from '../icons/Icons';

interface Props {
    data: { subjects: string; experience: string; };
    updateData: (data: Partial<Props['data']>) => void;
}

const Step2_ProfessionalInfo: React.FC<Props> = ({ data, updateData }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-900">Professional Information</h2>
            <p className="mt-1 text-sm text-gray-500">Showcase your expertise and qualifications.</p>
            <div className="mt-6 space-y-6">
                 <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                        <BookOpenIcon className="h-6 w-6" />
                    </div>
                    <div className="ml-4 flex-grow">
                        <label htmlFor="subjects" className="block text-sm font-medium text-gray-700">Subjects you teach</label>
                        <input
                            type="text"
                            name="subjects"
                            id="subjects"
                            value={data.subjects}
                            onChange={(e) => updateData({ subjects: e.target.value })}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                            placeholder="e.g. Conversational English, Business English"
                        />
                        <p className="mt-2 text-sm text-gray-500">Separate subjects with commas.</p>
                    </div>
                 </div>

                 <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                        <AcademicCapIcon className="h-6 w-6" />
                    </div>
                    <div className="ml-4 flex-grow">
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Teaching Experience & Certifications</label>
                        <textarea
                            name="experience"
                            id="experience"
                            rows={4}
                            value={data.experience}
                            onChange={(e) => updateData({ experience: e.target.value })}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                            placeholder="Describe your teaching experience, certifications (e.g., TEFL, TESOL), and any relevant education."
                        ></textarea>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default Step2_ProfessionalInfo;
