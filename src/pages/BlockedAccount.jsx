import React from 'react';
import { Lock, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BlockedAccount = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-red-100">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
                    <Lock size={40} className="text-red-600" />
                </div>

                <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Tài khoản đã bị khóa</h1>

                <p className="text-gray-600 mb-8">
                    Rất tiếc, tài khoản của bạn đã vi phạm chính sách hoặc bị quản trị viên tạm khóa. Vui lòng liên hệ
                    hỗ trợ để biết thêm chi tiết.
                </p>

                <button
                    onClick={handleLogout}
                    className="w-full cursor-pointer flex items-center justify-center gap-2 bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-200"
                >
                    <LogOut size={20} /> Quay lại trang chủ
                </button>
            </div>
        </div>
    );
};

export default BlockedAccount;
