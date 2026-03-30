import { useState } from 'react';
import Header from '../components/Header';
import SideBarProfile from '../components/Sidebar/SidebarProfile';

const TABS = [
    { id: 'all', label: 'Tất cả' },
    { id: 'access', label: 'Chờ xác nhận' },
    { id: 'shipping', label: 'Vận chuyển' },
    { id: 'delivering', label: 'Chờ giao hàng' },
    { id: 'completed', label: 'Hoàn thành' },
    { id: 'cancelled', label: 'Đã hủy' },
];

function Order() {
    const [activeTab, setActiveTab] = useState('all');

    return (
        <div className="bg-[#f5f5f5] min-h-screen">
            <Header />
            {/* Menu Trạng Thái */}
            <div className="max-w-[1200px] mx-auto py-10 flex gap-5">
                <SideBarProfile />
                <div className=" bg-white shadow-sm sticky top-0 z-10 w-250">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-[50px] py-4 text-center text-sm transition-colors duration-200 border-b-2 cursor-pointer 
               ${
                   activeTab === tab.id
                       ? 'text-red-500 border-red-500'
                       : 'text-gray-800 border-transparent hover:text-red-500'
               }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Order;
