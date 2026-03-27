import React from 'react';
import {
    Store,
    Users,
    Clock,
    BadgeDollarSign,
    Gift,
    MapPin,
    ChevronRight,
    Sparkles,
    Shirt,
    Box,
    Truck,
} from 'lucide-react';

const ShopCareers = () => {
    const shopJobs = [
        {
            title: 'Nhân Viên Bán Hàng (Sales Advisor)',
            type: 'Full-time / Part-time',
            location: 'Chi nhánh Cầu Giấy, HN',
            salary: '6M - 10M + Thưởng',
            icon: <Shirt className="w-6 h-6" />,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50',
        },
        {
            title: 'Nhân Viên Kho & Kiểm Kê',
            type: 'Full-time',
            location: 'Kho tổng Long Biên, HN',
            salary: '7M - 9M',
            icon: <Box className="w-6 h-6" />,
            color: 'text-orange-600',
            bgColor: 'bg-orange-50',
        },
        {
            title: 'Nhân Viên Giao Hàng (Shipper)',
            type: 'Tự do / Cố định',
            location: 'Toàn khu vực HN',
            salary: '8M - 12M',
            icon: <Truck className="w-6 h-6" />,
            color: 'text-green-600',
            bgColor: 'bg-green-50',
        },
    ];

    return (
        <div className="min-h-screen bg-neutral-50 font-sans pb-20">
            {/* 1. Header: Thân thiện & Năng động */}
            <div className="bg-red-500 py-18 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-white mb-4">ĐỒNG ĐỘI ƠI, SHOP ĐANG ĐỢI! 🤝</h1>
                    <p className="text-red-100  opacity-90">
                        Gia nhập gia đình Shopping Online để cùng nhau mang niềm vui tới khách hàng mỗi ngày.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-10">
                {/* 2. Chế độ đãi ngộ (Quyền lợi) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {[
                        {
                            icon: <BadgeDollarSign />,
                            title: 'Thu nhập hấp dẫn',
                            desc: 'Lương cứng cao + Thưởng doanh số không giới hạn.',
                        },
                        {
                            icon: <Gift />,
                            title: 'Ưu đãi nhân viên',
                            desc: 'Giảm giá 30% khi mua sắm các sản phẩm tại shop.',
                        },
                        {
                            icon: <Clock />,
                            title: 'Giờ làm linh hoạt',
                            desc: 'Xoay ca linh hoạt, phù hợp cho cả sinh viên đi làm thêm.',
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white p-8 rounded-3xl shadow-sm border hover:shadow-lg transition-all duration-300 border-neutral-100 flex flex-col items-center text-center"
                        >
                            <div className="p-4 bg-red-50 text-red-600 rounded-2xl mb-4">{item.icon}</div>
                            <h3 className="font-bold text-neutral-900 mb-2">{item.title}</h3>
                            <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* 3. Danh sách vị trí */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-neutral-100">
                    <div className="flex items-center gap-2 mb-10">
                        <Sparkles className="text-yellow-500 fill-yellow-500" />
                        <h2 className="text-2xl font-bold text-neutral-900">Vị trí đang tuyển gấp</h2>
                    </div>

                    <div className="space-y-6">
                        {shopJobs.map((job, idx) => (
                            <div
                                key={idx}
                                className="group border-b border-neutral-100 last:border-0 pb-6 last:pb-0 flex flex-col md:flex-row md:items-center justify-between hover:bg-neutral-50 p-4 rounded-2xl transition-all"
                            >
                                <div className="flex items-start gap-5">
                                    <div
                                        className={`p-4 rounded-2xl ${job.bgColor} ${job.color} group-hover:scale-110 transition-transform`}
                                    >
                                        {job.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-neutral-900 mb-1 group-hover:text-red-600 transition-colors">
                                            {job.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" /> {job.location}
                                            </span>
                                            <span className="flex items-center gap-1 font-bold text-red-600">
                                                {job.salary}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <button className="mt-4 md:mt-0 flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-600 transition-all">
                                    Ứng tuyển ngay <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. Quy trình đơn giản */}
                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold mb-8">3 Bước để trở thành "người một nhà"</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-8">
                        {[
                            { step: '1', label: 'Nộp hồ sơ', desc: 'Gửi CV hoặc đăng ký tại quầy' },
                            { step: '2', label: 'Phỏng vấn', desc: 'Trò chuyện trực tiếp cùng Quản lý' },
                            { step: '3', label: 'Nhận việc', desc: 'Đào tạo bài bản và đi làm ngay' },
                        ].map((s, i) => (
                            <div key={i} className="flex-1 relative">
                                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center font-black mx-auto mb-4 text-white">
                                    {s.step}
                                </div>
                                <h4 className="font-bold text-neutral-800">{s.label}</h4>
                                <p className="text-neutral-500 text-sm">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCareers;
