import Header from '../../components/Header';
import HeaderOrder from '../../components/HeaderOrder';
import SideBarProfile from '../../components/Sidebar/SidebarProfile';

function Finish() {
    return (
        <div>
            <Header />
            <div className="flex">
                <SideBarProfile />
                <div>
                    <HeaderOrder activeTab="finish" />
                </div>
            </div>
        </div>
    );
}

export default Finish;
