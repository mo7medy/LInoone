import React from 'react';
import { CheckCircleIcon } from '../icons/Icons';

interface ProfileStepperProps {
    steps: string[];
    currentStep: number;
}

const ProfileStepper: React.FC<ProfileStepperProps> = ({ steps, currentStep }) => {
    return (
        <nav aria-label="Progress">
            <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
                {steps.map((step, index) => {
                    const stepIndex = index + 1;
                    const isCompleted = currentStep > stepIndex;
                    const isCurrent = currentStep === stepIndex;

                    return (
                        <li key={step} className="md:flex-1">
                            {isCompleted ? (
                                <div className="group flex flex-col border-l-4 border-cyan-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0">
                                    <span className="text-sm font-medium text-cyan-600 flex items-center">
                                        <CheckCircleIcon className="w-5 h-5 mr-2" />
                                        {step}
                                    </span>
                                </div>
                            ) : isCurrent ? (
                                <div className="flex flex-col border-l-4 border-cyan-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0" aria-current="step">
                                    <span className="text-sm font-medium text-cyan-600">{step}</span>
                                </div>
                            ) : (
                                <div className="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0">
                                    <span className="text-sm font-medium text-gray-500">{step}</span>
                                </div>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default ProfileStepper;
