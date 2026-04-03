import Header from '../../components/Header';
import HeaderOrder from '../../components/HeaderOrder';
import SideBarProfile from '../../components/Sidebar/SidebarProfile';

function Access() {
    return (
        <div>
            <Header />
            <div className="flex">
                <SideBarProfile />
                <div>
                    <HeaderOrder activeTab="access" />
                </div>
            </div>
        </div>
    );
}

export default Access;
