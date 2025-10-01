import React from 'react';
import { CurrencyDollarIcon } from '../icons/Icons';

interface Props {
    data: { hourlyRate: number; };
    updateData: (data: Partial<Props['data']>) => void;
}

const Step6_Pricing: React.FC<Props> = ({ data, updateData }) => {
    const commission = 0.15; // 15% platform commission
    const youGet = data.hourlyRate * (1 - commission);

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-900">Set Your Hourly Rate</h2>
            <p className="mt-1 text-sm text-gray-500">You can change your rate at any time.</p>

            <div className="mt-6 max-w-sm mx-auto">
                 <label htmlFor="hourlyRate" className="block text-sm font-medium text-gray-700">Your price per 50-minute lesson</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <CurrencyDollarIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="number"
                        name="hourlyRate"
                        id="hourlyRate"
                        className="focus:ring-cyan-500 focus:border-cyan-500 block w-full pl-10 pr-12 sm:text-lg border-gray-300 rounded-md"
                        placeholder="0.00"
                        value={data.hourlyRate}
                        onChange={(e) => updateData({ hourlyRate: parseInt(e.target.value) || 0 })}
                        min="5"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm" id="price-currency">
                            USD
                        </span>
                    </div>
                </div>

                <div className="mt-4 p-4 bg-gray-50 rounded-md border">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Linoone commission (15%)</span>
                        <span className="font-medium text-gray-800">-${(data.hourlyRate * commission).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-base font-semibold mt-2 pt-2 border-t">
                        <span className="text-gray-800">You get</span>
                        <span className="text-green-600">${youGet.toFixed(2)}</span>
                    </div>
                </div>

                <p className="mt-4 text-xs text-gray-500">
                    On average, English tutors charge $15-25 per hour. New tutors often set a lower rate to get their first students and reviews.
                </p>
            </div>
        </div>
    );
};

export default Step6_Pricing;
