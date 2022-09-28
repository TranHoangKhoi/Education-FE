import Sidebar from '~/layouts/DefaultLayout/Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Sidebar />
            {children}
        </div>
    );
}

export default DefaultLayout;
