import React from 'react';
import { CalendarIcon } from '../icons/Icons';

interface Props {
    data: { availability: any; };
    updateData: (data: Partial<Props['data']>) => void;
}

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const times = ['Morning', 'Afternoon', 'Evening'];

const Step5_Availability: React.FC<Props> = ({ data, updateData }) => {
    return (
        <div>
            <div className="flex items-center gap-3">
                 <CalendarIcon className="h-8 w-8 text-gray-500" />
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Set Your Availability</h2>
                    <p className="mt-1 text-sm text-gray-500">Let students know when you are available for lessons. You can always change this later.</p>
                </div>
            </div>
            <div className="mt-6">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                                {times.map(time => (
                                    <th key={time} className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">{time}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {days.map(day => (
                                <tr key={day}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{day}</td>
                                    {times.map(time => (
                                        <td key={time} className="px-6 py-4 whitespace-nowrap text-center">
                                            <input type="checkbox" className="h-5 w-5 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500" />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="mt-4 text-sm text-gray-500">Note: This is a general availability planner. You will manage your exact schedule in your tutor calendar after approval.</p>
            </div>
        </div>
    );
};

export default Step5_Availability;
