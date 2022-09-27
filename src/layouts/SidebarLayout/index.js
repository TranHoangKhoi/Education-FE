import Sidebar from '~/layouts/SidebarLayout/Sidebar';

function SidebarLayout({ children }) {
    return (
        <div>
            <Sidebar />
            {children}
        </div>
    );
}

export default SidebarLayout;
