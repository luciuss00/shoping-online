import React from 'react';
import { FileText, Scale, UserCheck, ShieldAlert, CreditCard, Gavel, Mail, ArrowRight } from 'lucide-react';

const TermsOfService = () => {
    const sections = [
        { id: 'account', title: '1. Tài khoản người dùng', icon: <UserCheck className="w-5 h-5" /> },
        { id: 'privacy', title: '2. Quyền riêng tư', icon: <FileText className="w-5 h-5" /> },
        { id: 'payment', title: '3. Thanh toán & Giá cả', icon: <CreditCard className="w-5 h-5" /> },
        { id: 'prohibited', title: '4. Các hành vi bị cấm', icon: <ShieldAlert className="w-5 h-5" /> },
        { id: 'dispute', title: '5. Giải quyết tranh chấp', icon: <Gavel className="w-5 h-5" /> },
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-800">
            {/* Header gọn gàng */}
            <div className="bg-red-500 border-b border-slate-100 py-14 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex p-3 bg-red-100 rounded-2xl mb-4">
                        <Scale className="w-8 h-8 text-red-600" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-100 mb-4 tracking-tight">ĐIỀU KHOẢN SỬ DỤNG</h1>
                    <p className="text-gray-100">Cập nhật lần cuối: Ngày 27 tháng 03, 2026</p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
                {/* Sidebar điều hướng (Sticky) */}
                <aside className="lg:w-1/4">
                    <div className="sticky top-8 space-y-2">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Mục lục</p>
                        {sections.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 hover:text-red-600 transition-all font-medium text-slate-600"
                            >
                                {section.icon}
                                <span className="text-sm">{section.title}</span>
                            </a>
                        ))}
                    </div>
                </aside>

                {/* Nội dung chi tiết */}
                <main className="lg:w-3/4 space-y-12">
                    <section id="account" className="scroll-mt-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <div className="w-1 h-8 bg-red-600 rounded-full"></div>
                            1. Tài khoản người dùng
                        </h2>
                        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                            <p>
                                Khi đăng ký tài khoản tại <strong>Shopping Online</strong>, bạn cam kết cung cấp thông
                                tin chính xác, đầy đủ và cập nhật. Bạn chịu trách nhiệm hoàn toàn về việc bảo mật mật
                                khẩu của mình.
                            </p>
                            <p>
                                Chúng tôi có quyền tạm khóa hoặc xóa tài khoản nếu phát hiện bất kỳ dấu hiệu gian lận
                                hoặc vi phạm các quy định an toàn hệ thống.
                            </p>
                        </div>
                    </section>

                    <section id="privacy" className="scroll-mt-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <div className="w-1 h-8 bg-red-600 rounded-full"></div>
                            2. Quyền riêng tư
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            Việc thu thập và sử dụng dữ liệu cá nhân của bạn được thực hiện theo đúng{' '}
                            <strong>Chính sách bảo mật</strong> của chúng tôi. Chúng tôi cam kết không bán dữ liệu của
                            bạn cho bên thứ ba vì mục đích quảng cáo khi chưa có sự đồng ý.
                        </p>
                    </section>

                    <section id="payment" className="scroll-mt-8 bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Thanh toán & Giá cả</h2>
                        <ul className="list-disc pl-5 space-y-2 text-slate-600">
                            <li>Giá sản phẩm được hiển thị đã bao gồm thuế VAT (trừ trường hợp có ghi chú khác).</li>
                            <li>Chúng tôi hỗ trợ nhiều hình thức: COD, Chuyển khoản ngân hàng, Ví điện tử.</li>
                            <li>
                                Trong trường hợp sai sót về giá hiển thị, chúng tôi có quyền hủy đơn hàng và hoàn tiền
                                100% cho bạn.
                            </li>
                        </ul>
                    </section>

                    <section id="prohibited" className="scroll-mt-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <div className="w-1 h-8 bg-red-600 rounded-full"></div>
                            4. Các hành vi bị cấm
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                'Sử dụng công cụ tự động (bot, crawl) để thu thập dữ liệu trái phép.',
                                'Giả mạo nhân viên cửa hàng để lừa đảo khách hàng khác.',
                                'Đăng tải nội dung đồi trụy, xúc phạm hoặc vi phạm pháp luật.',
                                'Tấn công từ chối dịch vụ (DDoS) vào hạ tầng web.',
                            ].map((text, i) => (
                                <div
                                    key={i}
                                    className="flex gap-3 p-4 bg-red-50 rounded-2xl border border-red-100 text-sm text-red-800 font-medium"
                                >
                                    <ShieldAlert className="w-5 h-5 flex-shrink-0" />
                                    {text}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="dispute" className="scroll-mt-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <div className="w-1 h-8 bg-red-600 rounded-full"></div>
                            5. Giải quyết tranh chấp
                        </h2>
                        <p className="text-slate-600 leading-relaxed    ">
                            "Mọi tranh chấp phát sinh sẽ được ưu tiên giải quyết thông qua thương lượng hòa giải. Trong
                            trường hợp không đạt được thỏa thuận, vụ việc sẽ được đưa ra tòa án có thẩm quyền tại Hà Nội
                            để giải quyết."
                        </p>
                    </section>

                    {/* Footer liên hệ nhanh */}
                    <div className="pt-12 border-t border-slate-100">
                        <div className="bg-red-500 text-white p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h4 className="text-xl font-bold mb-2">Bạn có thắc mắc về điều khoản?</h4>
                                <p className="text-gray-100 text-sm">
                                    Đội ngũ pháp lý của chúng tôi luôn sẵn sàng giải đáp.
                                </p>
                            </div>
                            <button className="bg-white hover:bg-red-600 hover:text-white text-black px-8 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all">
                                Liên hệ ngay <Mail className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default TermsOfService;
