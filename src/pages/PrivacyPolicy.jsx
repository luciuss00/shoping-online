import { ShieldCheck, Lock, EyeOff, Database, Bell, Cookie, MailCheck, Smartphone } from 'lucide-react';

const PrivacyPolicy = () => {
    const dataUsage = [
        {
            title: 'Thông tin cá nhân',
            desc: 'Tên, SĐT, Email dùng để xác nhận đơn hàng và liên hệ giao hàng.',
            icon: <Database className="w-6 h-6 text-blue-600" />,
        },
        {
            title: 'Dữ liệu giao dịch',
            desc: 'Lịch sử mua hàng giúp chúng tôi hỗ trợ bảo hành và đổi trả nhanh hơn.',
            icon: <Smartphone className="w-6 h-6 text-purple-600" />,
        },
        {
            title: 'Cookie & Web',
            desc: 'Giúp ghi nhớ giỏ hàng và cá nhân hóa trải nghiệm mua sắm của bạn.',
            icon: <Cookie className="w-6 h-6 text-orange-600" />,
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
            {/* 1. Banner Header */}
            <div className="bg-red-500 border-b border-slate-200 py-12 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex p-4 bg-gray-100 rounded-2xl mb-6">
                        <ShieldCheck className="w-6  h-6 text-green-600 text-[20px]" />
                    </div>
                    <h1 className="text-4xl  font-bold text-gray-100 mb-6 tracking-tight">QUYỀN RIÊNG TƯ CỦA BẠN</h1>
                    <p className="text-gray-100 max-w-2xl mx-auto leading-relaxed">
                        Tại Shopping Online, bảo mật thông tin khách hàng là ưu tiên số 1. Chúng tôi cam kết bảo vệ dữ
                        liệu của bạn bằng những công nghệ tiên tiến nhất.
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 mt-10">
                {/* 2. Tóm tắt nhanh (Quick View) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {dataUsage.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow"
                        >
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* 3. Nội dung chi tiết (Accordion Style) */}
                <div className="space-y-8">
                    <section className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-red-50 rounded-2xl">
                                <Lock className="w-6 h-6 text-red-600" />
                            </div>
                            <h2 className="text-2xl font-bold">Cam kết bảo mật 3 lớp</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="font-black text-red-100 text-4xl">01</div>
                                    <div>
                                        <h4 className="font-bold text-slate-800">Mã hóa SSL/TLS</h4>
                                        <p className="text-slate-500 text-sm">
                                            Mọi giao dịch thanh toán đều được mã hóa theo tiêu chuẩn quốc tế.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="font-black text-red-100 text-4xl">02</div>
                                    <div>
                                        <h4 className="font-bold text-slate-800">Không chia sẻ bên thứ 3</h4>
                                        <p className="text-slate-500 text-sm">
                                            Tuyệt đối không bán thông tin của bạn cho các đơn vị quảng cáo.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-red-500 text-slate-300 p-6 rounded-3xl relative overflow-hidden">
                                <EyeOff className="absolute -right-4 -bottom-4 w-24 h-24 text-white/5" />
                                <h4 className="text-white font-bold mb-3 flex items-center gap-2">Quyền của bạn</h4>
                                <ul className="text-sm space-y-2 text-gray-100">
                                    <li className="flex items-center gap-2">• Yêu cầu xóa dữ liệu vĩnh viễn</li>
                                    <li className="flex items-center gap-2">
                                        • Thay đổi thông tin cá nhân bất cứ lúc nào
                                    </li>
                                    <li className="flex items-center gap-2">• Từ chối nhận email quảng cáo</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 4. Thông tin liên hệ bảo mật */}
                    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-[2.5rem] border-2 border-dashed border-slate-200">
                        <div className="flex items-center gap-5 mb-6 md:mb-0">
                            <div className="p-4 bg-green-50 rounded-full">
                                <MailCheck className="w-8 h-8 text-green-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Bạn có thắc mắc về bảo mật?</h3>
                                <p className="text-slate-500 text-sm">
                                    Gửi yêu cầu tới:{' '}
                                    <span className="text-blue-600 underline">privacy@shoppingonline.vn</span>
                                </p>
                            </div>
                        </div>
                        <button className="w-full md:w-auto px-8 py-4 bg-red-500 text-white rounded-2xl font-bold hover:bg-red-700 transition-all flex items-center justify-center gap-2">
                            <Bell className="w-4 h-4" /> Báo cáo vi phạm
                        </button>
                    </div>
                </div>

                {/* 5. Footer tóm lược */}
                <p className="mt-12 text-center text-slate-400 text-sm italic">
                    Chính sách này có hiệu lực từ tháng 03/2026 và có thể được cập nhật để phù hợp với quy định pháp
                    luật.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
