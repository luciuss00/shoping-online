import Header from '../../components/Header';
import HeaderOrder from '../../components/HeaderOrder';
import SideBarProfile from '../../components/Sidebar/SidebarProfile';

function Access() {
    return (
        <div className="bg-[#f5f5f5] min-h-screen">
            <Header />
            <div className="max-w-[1200px] mx-auto py-10 flex gap-5">
                <SideBarProfile />
                <div>
                    <HeaderOrder activeTab="access" />
                </div>
            </div>
        </div>
    );
}

export default Access;
