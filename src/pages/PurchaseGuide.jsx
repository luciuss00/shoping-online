import { Link } from 'react-router-dom';
import { UserPlus, LogIn, ShoppingCart, PlusCircle, CreditCard, MapPin, CheckCircle, Package } from 'lucide-react';

const PurchaseGuide = () => {
    const steps = [
        {
            title: 'Đăng ký',
            desc: 'Tạo tài khoản mới bằng email hoặc số điện thoại để bắt đầu trải nghiệm.',
            icon: <UserPlus className="w-6 h-6" />,
            color: 'bg-blue-500',
        },
        {
            title: 'Đăng nhập',
            desc: 'Truy cập vào hệ thống với thông tin tài khoản bạn vừa khởi tạo.',
            icon: <LogIn className="w-6 h-6" />,
            color: 'bg-indigo-500',
        },
        {
            title: 'Chọn sản phẩm',
            desc: 'Dạo quanh các danh mục (Áo, Gaming, Đồ ăn...) và chọn món đồ bạn ưng ý.',
            icon: <ShoppingCart className="w-6 h-6" />,
            color: 'bg-purple-500',
        },
        {
            title: 'Nhập số lượng',
            desc: 'Tùy chỉnh số lượng sản phẩm phù hợp với nhu cầu của bạn.',
            icon: <PlusCircle className="w-6 h-6" />,
            color: 'bg-pink-500',
        },
        {
            title: 'Mua hàng',
            desc: "Nhấn nút 'Mua ngay' hoặc thêm vào giỏ hàng để tiến hành thanh toán.",
            icon: <CreditCard className="w-6 h-6" />,
            color: 'bg-orange-500',
        },
        {
            title: 'Nhập địa chỉ',
            desc: 'Cung cấp chính xác địa chỉ nhận hàng và số điện thoại liên lạc.',
            icon: <MapPin className="w-6 h-6" />,
            color: 'bg-red-500',
        },
        {
            title: 'Đặt hàng',
            desc: 'Xác nhận lại đơn hàng và nhấn nút đặt hàng cuối cùng.',
            icon: <CheckCircle className="w-6 h-6" />,
            color: 'bg-green-500',
        },
        {
            title: 'Chờ xác nhận',
            desc: 'Hệ thống sẽ kiểm tra và thông báo khi đơn hàng của bạn được duyệt.',
            icon: <Package className="w-6 h-6" />,
            color: 'bg-teal-500',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-ee-600 text-3xl font-extrabold text-red-500 sm:text-4xl">
                        Hướng Dẫn Mua Hàng Tại Shopping Online
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Chỉ với vài bước đơn giản, bạn đã có thể sở hữu những sản phẩm công nghệ và thời trang hàng đầu.
                    </p>
                </div>

                {/* Timeline Flow */}
                <div className="relative">
                    {/* Đường kẻ dọc nối các bước */}
                    <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200 hidden md:block"></div>

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex items-center group">
                                {/* Icon Step */}
                                <div
                                    className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white z-10 shadow-lg transition-transform group-hover:scale-110 ${step.color}`}
                                >
                                    {step.icon}
                                </div>

                                {/* Content Card */}
                                <div className="ml-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex-grow transition-all group-hover:shadow-md group-hover:border-blue-100">
                                    <div className="flex items-center mb-1">
                                        <span className="text-sm font-bold text-gray-400 mr-2">BƯỚC {index + 1}</span>
                                        <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to action */}
                <div className="mt-16 text-center">
                    <Link
                        to="/"
                        className="bg-red-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-red-600 transition-colors shadow-lg cursor-pointer"
                    >
                        Bắt đầu mua sắm ngay
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PurchaseGuide;
