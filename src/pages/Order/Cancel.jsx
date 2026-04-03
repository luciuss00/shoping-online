import Header from '../../components/Header';
import HeaderOrder from '../../components/HeaderOrder';
import SideBarProfile from '../../components/Sidebar/SidebarProfile';

function Cancel() {
    return (
        <div>
            <Header />
            <div className="flex">
                <SideBarProfile />
                <div>
                    <HeaderOrder activeTab="cancel" />
                </div>
            </div>
        </div>
    );
}

export default Cancel;
