import React from 'react';
import { Page } from '../App';
import Sidebar from '../components/admin/Sidebar';
import AdminHeader from '../components/admin/AdminHeader';
import StatCard from '../components/admin/StatCard';
import RecentTutorsTable from '../components/admin/RecentTutorsTable';
import AnalyticsChart from '../components/admin/AnalyticsChart';
import { tutors } from '../data/tutors';


interface AdminDashboardPageProps {
    navigateTo: (page: Page) => void;
}

const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({ navigateTo }) => {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar navigateTo={navigateTo} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <AdminHeader />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
                    <div className="container mx-auto">
                        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard</h1>
                        {/* Stat Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                            <StatCard title="Total Tutors" value="1,250" change="+5.4%" />
                            <StatCard title="Total Students" value="15,780" change="+12.1%" />
                            <StatCard title="Active Lessons" value="3,450" change="-2.3%" isNegative />
                            <StatCard title="Revenue (Month)" value="$45,678" change="+20.5%" />
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Recent Tutors Table */}
                            <div className="lg:col-span-2">
                                <RecentTutorsTable tutors={tutors} />
                            </div>

                            {/* Analytics Chart */}
                            <div>
                               <AnalyticsChart />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboardPage;
