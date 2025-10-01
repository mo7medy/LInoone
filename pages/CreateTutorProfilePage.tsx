import React, { useState } from 'react';
import { Page } from '../App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileStepper from '../components/profile-setup/ProfileStepper';
import Step1_PersonalInfo from '../components/profile-setup/Step1_PersonalInfo';
import Step2_ProfessionalInfo from '../components/profile-setup/Step2_ProfessionalInfo';
import Step3_About from '../components/profile-setup/Step3_About';
import Step4_Video from '../components/profile-setup/Step4_Video';
import Step5_Availability from '../components/profile-setup/Step5_Availability';
import Step6_Pricing from '../components/profile-setup/Step6_Pricing';

interface CreateTutorProfilePageProps {
    navigateTo: (page: Page) => void;
}

const steps = [
    'Personal Info',
    'Professional Info',
    'About',
    'Video',
    'Availability',
    'Pricing'
];

const CreateTutorProfilePage: React.FC<CreateTutorProfilePageProps> = ({ navigateTo }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [profileData, setProfileData] = useState({
        fullName: '',
        country: '',
        languages: '',
        subjects: '',
        experience: '',
        headline: '',
        bio: '',
        photo: null,
        video: null,
        availability: {},
        hourlyRate: 20
    });

    const nextStep = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };
    
    const updateProfileData = (data: Partial<typeof profileData>) => {
        setProfileData(prev => ({ ...prev, ...data }));
    };

    const handleSubmit = () => {
        console.log('Submitting Profile Data:', profileData);
        alert("Profile Submitted for Review Successfully!");
        navigateTo('home');
    }

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1_PersonalInfo data={profileData} updateData={updateProfileData} />;
            case 2:
                return <Step2_ProfessionalInfo data={profileData} updateData={updateProfileData} />;
            case 3:
                return <Step3_About data={profileData} updateData={updateProfileData} />;
            case 4:
                return <Step4_Video data={profileData} updateData={updateProfileData} />;
            case 5:
                return <Step5_Availability data={profileData} updateData={updateProfileData} />;
            case 6:
                return <Step6_Pricing data={profileData} updateData={updateProfileData} />;
            default:
                return <Step1_PersonalInfo data={profileData} updateData={updateProfileData} />;
        }
    }

    return (
        <>
            <Header navigateTo={navigateTo} />
            <main className="py-16 md:py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ProfileStepper steps={steps} currentStep={currentStep} />
                    
                    <div className="mt-10 bg-white p-8 rounded-lg shadow-md">
                        {renderStep()}

                        <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between">
                            <button
                                type="button"
                                onClick={prevStep}
                                disabled={currentStep === 1}
                                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Back
                            </button>
                            {currentStep < steps.length ? (
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                                >
                                    Next
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                >
                                    Submit for Review
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer navigateTo={navigateTo} />
        </>
    );
};

export default CreateTutorProfilePage;
