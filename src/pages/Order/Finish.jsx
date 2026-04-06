import { useEffect, useMemo } from 'react';
import Header from '../../components/Header';
import HeaderOrder from '../../components/HeaderOrder';
import SideBarProfile from '../../components/Sidebar/SidebarProfile';
import { useOrder } from '../../context/OrderContext';
import { useNavigate } from 'react-router-dom';

function Finish() {
    const navigate = useNavigate();
    const { orders, fetchOrders } = useOrder();

    useEffect(() => {
        fetchOrders();
    }, [fetchOrders]);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    };

    const completedOrders = useMemo(() => {
        return orders.filter((order) => order.status === 'COMPLETED');
    }, [orders]);

    const handleRowClick = (order) => {
        navigate(`/order/detail/${order.idOrder}`, { state: { order } });
    };

    return (
        <div className="bg-[#f5f5f5] min-h-screen">
            <Header />
            <div className="max-w-[1200px] mx-auto py-10 flex gap-5">
                <SideBarProfile />
                <div>
                    <HeaderOrder activeTab="finish" />
                    <div className="container pt-5 w-250">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Đơn Hàng Đã Hoàn Thành</h2>

                        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                            <table className="min-w-full table-auto">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        <th className="py-3 px-6 text-left">STT</th>
                                        <th className="py-3 px-6 text-left">Mô tả</th>
                                        <th className="py-3 px-20 text-right">Tổng tiền</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm font-light">
                                    {completedOrders.length > 0 ? (
                                        completedOrders.map((order, index) => (
                                            <tr
                                                key={order.idOrder}
                                                onClick={() => handleRowClick(order)}
                                                className="border-b border-gray-200 hover:bg-gray-50 transition duration-300"
                                            >
                                                <td className="py-3 px-6 whitespace-nowrap  font-medium">
                                                    {index + 1}
                                                </td>
                                                <td className="py-3 px-6 text-left text-[16px]">{order.des}</td>

                                                <td className="py-3 px-6 text-right text-[16px] font-semibold text-blue-600">
                                                    {formatCurrency(order.total_amount)}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="py-10 text-center text-gray-500 italic">
                                                Không có đơn hàng nào.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Finish;
