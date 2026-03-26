import React from 'react';
import { ShieldCheck, Clock, XCircle, RefreshCcw, Truck, HeadphonesIcon, AlertCircle, FileText } from 'lucide-react';

const WarrantyPolicy = () => {
    const policies = [
        {
            title: 'Thời hạn bảo hành',
            content: 'Tất cả sản phẩm công nghệ được bảo hành từ 12 - 24 tháng kể từ ngày kích hoạt hoặc xuất hóa đơn.',
            icon: <Clock className="text-center w-8 h-8 text-blue-600" />,
        },
        {
            title: 'Đổi trả 1-đổi-1',
            content:
                'Áp dụng trong 30 ngày đầu tiên nếu sản phẩm phát sinh lỗi từ nhà sản xuất (phần cứng, màn hình, mainboard).',
            icon: <RefreshCcw className="text-center w-8 h-8 text-green-600" />,
        },
        {
            title: 'Hỗ trợ tận nơi',
            content: 'Đối với các sản phẩm gia dụng lớn, nhân viên kỹ thuật sẽ đến tận nhà kiểm tra trong vòng 24h.',
            icon: <Truck className="text-center w-8 h-8 text-orange-600" />,
        },
        {
            title: 'Tư vấn 24/7',
            content: 'Đội ngũ kỹ thuật viên luôn sẵn sàng hỗ trợ giải đáp thắc mắc qua hotline 1900 xxxx.',
            icon: <HeadphonesIcon className="text-center w-8 h-8 text-purple-600" />,
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Hero Section */}
            <div className="bg-red-500 py-14 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <ShieldCheck className="w-16 h-16 text-white mx-auto mb-4 opacity-90" />
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Chính Sách Bảo Hành</h1>
                    <p className="text-red-100 max-w-2xl mx-auto">
                        Chúng tôi cam kết mang lại sự an tâm tuyệt đối cho khách hàng với quy trình bảo hành minh bạch,
                        nhanh chóng và chuyên nghiệp.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Cam kết chính */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {policies.map((p, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center justify-center mb-4 ">{p.icon}</div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">{p.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed text-center">{p.content}</p>
                        </div>
                    ))}
                </div>

                {/* Nội dung chi tiết */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Cột trái: Điều kiện */}
                    <div className="space-y-8">
                        <section>
                            <div className="flex items-center mb-4 text-red-600">
                                <FileText className="w-6 h-6 mr-2" />
                                <h2 className="text-2xl font-bold text-gray-900">Điều kiện bảo hành</h2>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    'Sản phẩm còn trong thời hạn bảo hành.',
                                    'Có hóa đơn mua hàng hoặc phiếu bảo hành/tem bảo hành còn nguyên vẹn.',
                                    'Lỗi được xác định do kỹ thuật từ phía nhà sản xuất.',
                                    'Số Serial/IMEI trên máy phải trùng khớp với hệ thống.',
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start text-gray-700">
                                        <span className="text-green-500 mr-2">✔</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="bg-red-50 p-6 rounded-2xl border border-red-100">
                            <div className="flex items-center mb-4 text-red-700">
                                <XCircle className="w-6 h-6 mr-2" />
                                <h2 className="text-2xl font-bold">Trường hợp từ chối</h2>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    'Sản phẩm bị rơi vỡ, móp méo, vào nước hoặc cháy nổ do người dùng.',
                                    'Sản phẩm đã bị can thiệp, tự ý sửa chữa bởi bên thứ ba.',
                                    'Hết thời hạn bảo hành ghi trên phiếu hoặc hệ thống.',
                                    'Tem bảo hành bị rách, tẩy xóa hoặc không còn nguyên vẹn.',
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start text-gray-700 text-sm">
                                        <span className="text-red-500 mr-2">•</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Cột phải: Quy trình */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                        <div className="flex items-center mb-8 text-blue-600">
                            <AlertCircle className="w-6 h-6 mr-2" />
                            <h2 className="text-2xl font-bold text-gray-900">Quy trình bảo hành</h2>
                        </div>

                        <div className="space-y-8 relative">
                            {/* Line nối các bước */}
                            <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-100"></div>

                            {[
                                {
                                    step: '01',
                                    label: 'Liên hệ tổng đài',
                                    desc: 'Gọi hotline hoặc nhắn tin fanpage để thông báo tình trạng.',
                                },
                                {
                                    step: '02',
                                    label: 'Gửi sản phẩm',
                                    desc: 'Mang tới cửa hàng gần nhất hoặc gửi qua đường bưu điện.',
                                },
                                {
                                    step: '03',
                                    label: 'Kiểm tra kỹ thuật',
                                    desc: 'Kỹ thuật viên kiểm tra và báo cáo lỗi trong 24-48h.',
                                },
                                {
                                    step: '04',
                                    label: 'Hoàn trả sản phẩm',
                                    desc: 'Sản phẩm được sửa chữa hoặc đổi mới gửi lại khách hàng.',
                                },
                            ].map((item, idx) => (
                                <div key={idx} className="relative pl-12">
                                    <div className="absolute left-0 w-8 h-8 bg-white border-2 border-red-600 rounded-full flex items-center justify-center text-red-600 font-bold text-sm z-10">
                                        {item.step}
                                    </div>
                                    <h4 className="font-bold text-gray-800">{item.label}</h4>
                                    <p className="text-gray-500 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WarrantyPolicy;
