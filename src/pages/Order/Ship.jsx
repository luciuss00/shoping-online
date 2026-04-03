import Header from '../../components/Header';
import HeaderOrder from '../../components/HeaderOrder';
import SideBarProfile from '../../components/Sidebar/SidebarProfile';

function Ship() {
    return (
        <div>
            <Header />
            <div className="flex">
                <SideBarProfile />
                <div>
                    <HeaderOrder activeTab="ship" />
                </div>
            </div>
        </div>
    );
}

export default Ship;
