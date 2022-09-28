import Header from '~/layouts/DashboardLayout/Header';
// import style from './DashboardLayout.module.scss';

function DashboardLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

export default DashboardLayout;
