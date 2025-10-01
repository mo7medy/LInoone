import React from 'react';

const AnalyticsChart: React.FC = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md h-full">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-4">Monthly Growth</h3>
            <div className="mt-4 flex items-center justify-center h-64 bg-gray-50 rounded-md">
                <p className="text-gray-400 text-sm">Chart data would be displayed here.</p>
            </div>
             <div className="flex justify-around mt-4 text-xs text-gray-500">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
            </div>
        </div>
    );
};

export default AnalyticsChart;
