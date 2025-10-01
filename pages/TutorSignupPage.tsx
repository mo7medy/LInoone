import React from 'react';
import { Page } from '../App';
import { GoogleIcon, FacebookIcon } from '../components/icons/Icons';

interface TutorSignupPageProps {
    navigateTo: (page: Page) => void;
}

const TutorSignupPage: React.FC<TutorSignupPageProps> = ({ navigateTo }) => {

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle the sign-up logic
        // For now, we'll just navigate to the next step
        navigateTo('tutor-profile-setup');
    };
    
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 
                    onClick={() => navigateTo('home')}
                    className="cursor-pointer mt-6 text-center text-3xl font-extrabold text-cyan-500"
                >
                    Linoone
                </h2>
                <h3 className="mt-2 text-center text-2xl font-bold text-gray-900">
                    Sign up as a tutor
                </h3>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div className="space-y-4">
                        <button className="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                            <GoogleIcon className="w-5 h-5 mr-2" />
                            Sign up with Google
                        </button>
                        <button className="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                            <FacebookIcon className="w-5 h-5 mr-2 text-[#1877F2]" />
                            Sign up with Facebook
                        </button>
                    </div>

                    <div className="mt-6 relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Or sign up with email</span>
                        </div>
                    </div>
                    
                    <form className="mt-6 space-y-6" onSubmit={handleSignup}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password"className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm" />
                            </div>
                        </div>

                        <div className="text-xs text-gray-500">
                            By signing up, you agree to our <a href="#" className="font-medium text-cyan-600 hover:underline">Terms of Service</a> and <a href="#" className="font-medium text-cyan-600 hover:underline">Privacy Policy</a>.
                        </div>

                        <div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                                Sign up
                            </button>
                        </div>
                    </form>
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{' '}
                            <a href="#" className="font-medium text-cyan-600 hover:text-cyan-500">
                                Log in
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorSignupPage;
