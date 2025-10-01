import React from 'react';

const features = [
    {
        title: 'Set your own rate',
        description: 'Choose your hourly rate and change it anytime. On average, English tutors charge $15-25 per hour.'
    },
    {
        title: 'Teach anytime, anywhere',
        description: 'No minimum time commitment or fixed schedule. Be your own boss!'
    },
    {
        title: 'Grow professionally',
        description: 'Once you sign up and complete your application, you can be approved and start teaching in as little as three days.'
    }
];

const KeyFeatures: React.FC = () => {
    return (
        <div className="py-16 md:py-24">
            <div className="grid md:grid-cols-3 gap-8">
                {features.map(feature => (
                    <div key={feature.title}>
                        <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                        <p className="mt-2 text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KeyFeatures;
