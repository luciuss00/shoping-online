import { Users, Target, Award, Rocket, Building2, Gem, Handshake, Sparkles } from 'lucide-react';

const AboutUs = () => {
    const stats = [
        { icon: <Users className="w-8 h-8 text-blue-600" />, value: '100K+', label: 'Khách hàng tin dùng' },
        { icon: <Building2 className="w-8 h-8 text-orange-600" />, value: '36+', label: 'Đối tác chiến lược' },
        { icon: <Gem className="w-8 h-8 text-red-600" />, value: '2K+', label: 'Sản phẩm chính hãng' },
        { icon: <Award className="w-8 h-8 text-teal-600" />, value: '4+', label: 'Năm kinh nghiệm' },
    ];

    const milestones = [
        { year: '2023', title: 'Khởi đầu', desc: 'Thành lập đội ngũ nhỏ với giấc mơ e-commerce.' },
        { year: '2024', title: 'Tăng trưởng', desc: 'Đạt mốc 100,000 đơn hàng đầu tiên.' },
        { year: '2025', title: 'Mở rộng', desc: 'Hợp tác với các thương hiệu công nghệ lớn (Apple, Samsung).' },
        { year: '2026', title: 'Số hóa', desc: 'Ra mắt hệ thống quản lý vận chuyển tự động.' },
    ];

    return (
        <div className="min-h-screen bg-neutral-50 font-sans pb-24">
            {/* 1. Hero Section: Sứ mệnh & Tầm nhìn */}
            <div className="bg-red-500 py-10  px-6 text-center shadow-xl">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex p-4 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                        <Rocket className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-6 tracking-tighter leading-tight">
                        VỀ SHOPPING ONLINE
                    </h1>
                    <p className="text-red-50 leading-relaxed max-w-2xl mx-auto opacity-95">
                        Chúng tôi không chỉ bán sản phẩm, chúng tôi kiến tạo trải nghiệm mua sắm kỹ thuật số thông minh
                        và đáng tin cậy nhất tại Việt Nam.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16">
                {/* 2. Key Statistics: Con số ấn tượng */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 text-center flex flex-col items-center hover:translate-y-[-5px] transition-transform"
                        >
                            <div className="p-4 bg-neutral-50 rounded-2xl mb-4">{stat.icon}</div>
                            <p className="text-4xl font-bold text-neutral-900 mb-1">{stat.value}</p>
                            <p className="text-neutral-500 text-sm font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
                    {/* 3. Câu chuyện của chúng tôi */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-red-600">
                            <Sparkles className="w-6 h-6" />
                            <h2 className="text-4xl font-bold text-neutral-950 tracking-tight">Hành trình kiến tạo</h2>
                        </div>
                        <p className="text-neutral-700 text-lg leading-relaxed">
                            Bắt đầu từ một văn phòng nhỏ tại Hà Nội vào năm 2019, 'Shopping Online' ra đời với sứ mệnh
                            đơn giản: mang những sản phẩm công nghệ và thời trang chất lượng cao tới tay người tiêu dùng
                            một cách nhanh chóng và minh bạch nhất.
                        </p>
                        <p className="text-neutral-600 text-base leading-relaxed">
                            Vượt qua nhiều thách thức, chúng tôi tự hào khi trở thành điểm đến đáng tin cậy của hàng
                            triệu khách hàng, nơi bạn có thể tìm thấy từ chiếc iPhone mới nhất đến bộ đồ gaming chuyên
                            nghiệp, tất cả đều được cam kết chính hãng 100%.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <div className="flex items-center gap-2 p-3 bg-red-50 rounded-xl border border-red-100">
                                <Target className="w-5 h-5 text-red-600" />
                                <span className="text-red-900 font-semibold text-sm">Chất lượng là cốt lõi</span>
                            </div>
                            <div className="flex items-center gap-2 p-3 bg-red-50 rounded-xl border border-red-100">
                                <Handshake className="w-5 h-5 text-red-600" />
                                <span className="text-red-900 font-semibold text-sm">Khách hàng là trọng tâm</span>
                            </div>
                        </div>
                    </div>

                    {/* 4. Hình ảnh minh họa (Grid) */}
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=600"
                            alt="Team 1"
                            className="rounded-2xl shadow-md h-48 w-full object-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600"
                            alt="Team 2"
                            className="rounded-2xl shadow-md h-60 w-full object-cover -mt-12"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1556742044-3c52d6e88c02?q=80&w=600"
                            alt="Store"
                            className="rounded-2xl shadow-md h-56 w-full object-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600"
                            alt="Tech"
                            className="rounded-2xl shadow-md h-44 w-full object-cover -mt-16"
                        />
                    </div>
                </div>

                {/* 5. Our Timeline: Lịch sử phát triển */}
                <section className="bg-white p-12 rounded-3xl shadow-sm border border-neutral-100">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-neutral-900">Mốc son phát triển</h2>
                        <p className="text-neutral-500 mt-2">Nhìn lại những bước tiến quan trọng của chúng tôi.</p>
                    </div>
                    <div className="relative space-y-8">
                        {/* Vertical Line */}
                        <div className="absolute left-6 top-1 bottom-1 w-0.5 bg-neutral-100 hidden sm:block"></div>

                        {milestones.map((item, idx) => (
                            <div
                                key={idx}
                                className="relative pl-0 sm:pl-16 flex flex-col sm:flex-row gap-2 sm:gap-6 items-start sm:items-center group"
                            >
                                {/* Year Bubble */}
                                <div className="absolute left-0 w-12 h-12 bg-red-600 border-4 border-red-50 rounded-full flex items-center justify-center text-white font-extrabold text-xl z-10 hidden sm:flex group-hover:scale-110 transition-transform">
                                    {item.year.slice(-2)}
                                </div>
                                {/* Content Card */}
                                <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 flex-grow group-hover:bg-white group-hover:shadow-md group-hover:border-red-100 transition-all">
                                    <h4 className="font-bold text-neutral-800 text-lg">
                                        {item.title}{' '}
                                        <span className="sm:hidden text-red-600 text-sm">({item.year})</span>
                                    </h4>
                                    <p className="text-neutral-500 text-base leading-snug">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
