import { Truck, MapPin, MapIcon, Clock3, PackageSearch, ShieldCheck, BellRing, PhoneOutgoing } from 'lucide-react';

const ShippingPolicy = () => {
    const shippingMethods = [
        {
            name: 'Hỏa Tốc 2H',
            time: '1-2 Giờ',
            cost: 'Từ 35k',
            desc: 'Áp dụng nội thành Hà Nội & TP.HCM.',
            icon: <Truck className="w-10 h-10 text-red-600" />,
            color: 'border-red-500',
            bgColor: 'bg-red-50',
        },
        {
            name: 'Giao Nhanh',
            time: '1-2 Ngày',
            cost: 'Miễn phí > 500k',
            desc: 'Giao hàng toàn quốc.',
            icon: <Truck className="w-10 h-10 text-yellow-600" />,
            color: 'border-orange-500',
            bgColor: 'bg-orange-50',
        },
        {
            name: 'Giao Tiết Kiệm',
            time: '3-5 Ngày',
            cost: 'Từ 15k',
            desc: 'Phù hợp hàng hóa không gấp.',
            icon: <MapPin className="w-10 h-10 text-teal-600" />,
            color: 'border-teal-500',
            bgColor: 'bg-teal-50',
        },
    ];

    const regions = [
        { name: 'Nội thành HN', time: 'Giao trong ngày', cost: '15k - 25k' },
        { name: 'Miền Bắc, Miền Nam', time: '1-2 ngày', cost: '30k - 45k' },
        { name: 'Miền Trung, Tây Nguyên', time: '2-3 ngày', cost: '35k - 50k' },
        { name: 'Huyện/Xã đảo xa', time: '3-5 ngày', cost: '60k+' },
    ];

    return (
        <div className="min-h-screen bg-neutral-50 font-sans pb-24">
            {/* Dynamic Header Section */}
            <div className="bg-red-500 py-20 px-6  ">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl font-bold text-white mb-6 tracking-tighter leading-tight">
                            GIAO HÀNG TẬN NƠI
                        </h1>
                        <p className="text-red-100 text-xl leading-relaxed opacity-95">
                            Cam kết vận chuyển an toàn, minh bạch chi phí và đúng thời hạn.
                        </p>
                    </div>
                    <div className="relative">
                        <PackageSearch className="w-32 h-32 text-yellow-300 opacity-20 absolute -top-10 -right-10" />
                        <div className="p-4 bg-white/20 backdrop-blur-lg rounded-full shadow-2xl">
                            <Truck className="w-20 h-20 text-white" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16">
                {/* Quick Delivery Methods */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {shippingMethods.map((method, i) => (
                        <div
                            key={i}
                            className={`bg-white p-10 rounded-3xl border ${method.color} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-102`}
                        >
                            <div className={`p-4 ${method.bgColor} rounded-full inline-flex mb-6`}>{method.icon}</div>
                            <h3 className="text-2xl font-extrabold text-neutral-900 mb-2">{method.name}</h3>
                            <p className="text-xl text-red-600 font-bold mb-4">
                                {method.cost}{' '}
                                <span className="text-sm text-neutral-500 font-normal">
                                    {' '}
                                    / Thời gian: {method.time}
                                </span>
                            </p>
                            <p className="text-neutral-600 text-base leading-relaxed">{method.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Cột Trái: Bảng chi phí & Dòng thời gian */}
                    <div className="space-y-12">
                        <section className="bg-white p-10 rounded-3xl shadow-sm border border-neutral-100">
                            <div className="flex items-center mb-8">
                                <MapIcon className="w-8 h-8 text-red-600 mr-4" />
                                <h2 className="text-3xl font-bold text-neutral-950">
                                    Ước tính phí & thời gian giao hàng
                                </h2>
                            </div>
                            <div className="space-y-6">
                                {regions.map((region, idx) => (
                                    <div
                                        key={idx}
                                        className="flex justify-between items-center p-6 bg-neutral-50 rounded-2xl border border-neutral-100 hover:bg-red-50 hover:border-red-100"
                                    >
                                        <div>
                                            <h4 className="font-bold text-neutral-800 text-lg">{region.name}</h4>
                                            <p className="text-neutral-500 text-sm flex items-center">
                                                <Clock3 className="w-4 h-4 mr-1" /> {region.time}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-red-600 font-extrabold text-xl">{region.cost}</p>
                                            <p className="text-neutral-400 text-xs">dự kiến</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Cột Phải: Quy trình & Lưu ý */}
                    <div className="space-y-12">
                        <section className="bg-white p-10 rounded-3xl shadow-sm border border-neutral-100 relative">
                            <div className="absolute top-10 right-10 flex space-x-2">
                                <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                                <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse delay-150"></div>
                                <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse delay-300"></div>
                            </div>
                            <div className="flex items-center mb-8 text-neutral-800">
                                <BellRing className="w-8 h-8 mr-4 text-orange-500" />
                                <h2 className="text-3xl font-bold">Quy trình giao nhận</h2>
                            </div>
                            <div className="space-y-10 relative">
                                {/* Timeline line */}
                                <div className="absolute left-6 top-1 bottom-1 w-0.5 bg-red-100 hidden sm:block"></div>

                                {[
                                    {
                                        step: '01',
                                        label: 'Xác nhận & Đóng gói',
                                        desc: 'Đơn hàng được xác nhận trong 2h & đóng gói cẩn thận.',
                                    },
                                    {
                                        step: '02',
                                        label: 'Giao hàng cho đối tác',
                                        desc: 'Hàng được bàn giao cho ViettelPost/GHN/J&T.',
                                    },
                                    {
                                        step: '03',
                                        label: 'Giao tới tay bạn',
                                        desc: 'Bưu tá giao hàng & bạn thực hiện kiểm tra sản phẩm.',
                                    },
                                ].map((item, idx) => (
                                    <div key={idx} className="relative pl-0 sm:pl-16">
                                        <div className="absolute left-0 w-12 h-12 bg-red-600 border-4 border-red-50 rounded-full flex items-center justify-center text-white font-extrabold text-xl z-10 hidden sm:flex">
                                            {item.step}
                                        </div>
                                        <h4 className="font-bold text-neutral-800 text-lg">{item.label}</h4>
                                        <p className="text-neutral-500 text-base leading-snug">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-white p-10 rounded-3xl shadow-sm border border-neutral-100">
                            <div className="flex items-center mb-6 text-red-700">
                                <ShieldCheck className="w-6 h-6 mr-3" />
                                <h2 className="text-2xl font-bold">Lưu ý khi nhận hàng</h2>
                            </div>
                            <ul className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                                <li>
                                    • Quý khách vui lòng kiểm tra kỹ hộp hàng & sản phẩm trước khi thanh toán (với COD).
                                </li>
                                <li>• Nếu phát hiện hộp bị rách/vỡ, Quý khách hãy từ chối nhận & báo ngay hotline.</li>
                                <li>
                                    • Chúng tôi **chỉ hỗ trợ giao hàng tới chân chung cư/tòa nhà** cho các đơn hàng lớn
                                    (lớn hơn 20kg).
                                </li>
                                <li>• Mọi khiếu nại về giao hàng (thiếu hàng, vỡ hàng) cần được báo lại trong 24h.</li>
                            </ul>
                            <div className="mt-8 p-6 bg-red-50 rounded-2xl flex items-center gap-4">
                                <PhoneOutgoing className="w-8 h-8 text-red-600" />
                                <div>
                                    <p className="text-red-900 font-bold">Hotline Giao Nhận</p>
                                    <p className="text-red-700 text-lg font-extrabold">1900 1236 (Phím 1)</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShippingPolicy;
