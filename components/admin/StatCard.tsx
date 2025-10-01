import React from 'react';

interface StatCardProps {
    title: string;
    value: string;
    change: string;
    isNegative?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, isNegative }) => {
    const changeColor = isNegative ? 'text-red-500' : 'text-green-500';
    
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <div className="flex items-baseline mt-2">
                <p className="text-3xl font-semibold text-gray-900">{value}</p>
                <span className={`ml-2 text-sm font-semibold ${changeColor}`}>{change}</span>
            </div>
        </div>
    );
};

export default StatCard;
