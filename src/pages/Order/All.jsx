import Header from '../../components/Header';
import HeaderOrder from '../../components/HeaderOrder';
import SideBarProfile from '../../components/Sidebar/SidebarProfile';

function All() {
    return (
        <div className="bg-[#f5f5f5] min-h-screen">
            <Header />
            <div className="flex ml-[130px] ">
                <SideBarProfile />
                <div>
                    <HeaderOrder activeTab="all" />
                </div>
            </div>
        </div>
    );
}

export default All;
