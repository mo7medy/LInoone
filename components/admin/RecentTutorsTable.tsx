import React from 'react';
import { Tutor } from '../../data/tutors';

interface RecentTutorsTableProps {
    tutors: Tutor[];
}

const RecentTutorsTable: React.FC<RecentTutorsTableProps> = ({ tutors }) => {
    return (
        <div className="bg-white rounded-lg shadow-md">
            <div className="p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-800">New Tutor Signups</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {tutors.slice(0, 5).map((tutor) => (
                            <tr key={tutor.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                            <img className="h-10 w-10 rounded-full object-cover" src={tutor.image} alt={tutor.name} />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">{tutor.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{tutor.country}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                        Pending Approval
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
             <div className="p-4 border-t text-sm text-center">
                <a href="#" className="font-medium text-cyan-600 hover:text-cyan-500">View all tutors &rarr;</a>
            </div>
        </div>
    );
};

export default RecentTutorsTable;
