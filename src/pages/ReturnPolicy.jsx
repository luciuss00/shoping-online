import React from 'react';
import {
    RotateCcw,
    CheckCircle2,
    AlertTriangle,
    CreditCard,
    PackageCheck,
    ClipboardList,
    ArrowRightLeft,
    History,
} from 'lucide-react';

const ReturnPolicy = () => {
    const returnPeriods = [
        { category: 'Thời trang & Phụ kiện', period: '30 ngày', condition: 'Còn nguyên tem mác' },
        { category: 'Điện thoại & Laptop', period: '07 ngày', condition: 'Lỗi nhà sản xuất' },
        { category: 'Đồ gia dụng', period: '15 ngày', condition: 'Nguyên hộp, phụ kiện' },
        { category: 'Đồ chơi & Quà tặng', period: '03 ngày', condition: 'Chưa qua sử dụng' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-20">
            {/* Header Banner */}
            <div className="bg-red-500  py-15 px-4 ">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex p-3 bg-white/20 rounded-2xl backdrop-blur-sm mb-6">
                        <RotateCcw className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">CHÍNH SÁCH ĐỔI TRẢ</h1>
                    <p className="text-red-50  opacity-90">
                        Mua sắm không lo âu với chính sách đổi trả linh hoạt tại Shopping Online.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 mt-10">
                {/* 3 Điều kiện tiên quyết */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[
                        {
                            icon: <PackageCheck className="text-blue-500" />,
                            title: 'Sản phẩm nguyên vẹn',
                            desc: 'Còn đầy đủ hộp, phụ kiện và quà tặng kèm theo (nếu có).',
                        },
                        {
                            icon: <ClipboardList className="text-orange-500" />,
                            title: 'Hóa đơn mua hàng',
                            desc: 'Có hóa đơn điện tử hoặc phiếu thu từ cửa hàng.',
                        },
                        {
                            icon: <History className="text-green-500" />,
                            title: 'Đúng thời hạn',
                            desc: 'Yêu cầu đổi trả nằm trong khung thời gian quy định.',
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:translate-y-[-5px] transition-all"
                        >
                            <div className="p-4 bg-gray-50 rounded-2xl mb-4">{item.icon}</div>
                            <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cột Trái & Giữa: Chi tiết */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Bảng thời gian */}
                        <section className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="bg-gray-800 p-4 flex items-center">
                                <ArrowRightLeft className="w-5 h-5 text-white mr-2" />
                                <h2 className="text-white font-bold">Thời hạn đổi trả theo ngành hàng</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-50 border-b border-gray-100">
                                            <th className="p-4 font-bold text-gray-700">Ngành hàng</th>
                                            <th className="p-4 font-bold text-gray-700">Thời gian</th>
                                            <th className="p-4 font-bold text-gray-700">Điều kiện</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {returnPeriods.map((item, idx) => (
                                            <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50/50">
                                                <td className="p-4 text-gray-800 font-medium">{item.category}</td>
                                                <td className="p-4">
                                                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold">
                                                        {item.period}
                                                    </span>
                                                </td>
                                                <td className="p-4 text-gray-500 text-sm">{item.condition}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Quy trình hoàn tiền */}
                        <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="flex items-center mb-6">
                                <CreditCard className="w-6 h-6 text-red-600 mr-3" />
                                <h2 className="text-2xl font-bold text-gray-900">Quy định hoàn tiền</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100">
                                    <h4 className="font-bold text-blue-800 mb-2">Thanh toán Online</h4>
                                    <p className="text-blue-600 text-sm">
                                        Hoàn trả vào thẻ/ví điện tử trong 3-5 ngày làm việc.
                                    </p>
                                </div>
                                <div className="p-5 bg-green-50 rounded-2xl border border-green-100">
                                    <h4 className="font-bold text-green-800 mb-2">Thanh toán COD</h4>
                                    <p className="text-green-600 text-sm">
                                        Hoàn tiền qua chuyển khoản ngân hàng trong 24h.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Cột Phải: Lưu ý quan trọng */}
                    <div className="space-y-6">
                        <div className="bg-amber-50 p-8 rounded-3xl border border-amber-200">
                            <div className="flex items-center mb-4 text-amber-700">
                                <AlertTriangle className="w-6 h-6 mr-2" />
                                <h2 className="text-xl font-bold">Lưu ý quan trọng</h2>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    'Không áp dụng đổi trả với hàng thực phẩm, đồ lót, mỹ phẩm đã bóc seal.',
                                    'Hàng thanh lý, giảm giá trên 50% không hỗ trợ đổi trả.',
                                    'Quý khách vui lòng quay video khi mở hộp sản phẩm để đối chiếu khi có khiếu nại.',
                                    'Phí vận chuyển đổi trả do khách hàng chi trả nếu lỗi không từ nhà bán.',
                                ].map((note, i) => (
                                    <li key={i} className="flex items-start text-sm text-amber-800 leading-snug">
                                        <span className="mr-2 mt-1">•</span> {note}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-red-600 p-8 rounded-3xl text-white text-center shadow-lg shadow-red-200">
                            <h3 className="text-xl font-bold mb-2">Cần hỗ trợ thêm?</h3>
                            <p className="text-red-100 text-sm mb-6">
                                Gửi yêu cầu ngay để được giải quyết trong 2h làm việc.
                            </p>
                            <button className="bg-white text-red-600 px-6 py-2 rounded-xl font-bold hover:bg-red-50 transition-colors w-full">
                                Gửi yêu cầu đổi trả
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReturnPolicy;
