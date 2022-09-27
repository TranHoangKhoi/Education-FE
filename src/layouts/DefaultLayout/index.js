import Header from '~/layouts/DefaultLayout/Header';
// import style from './DefaultLayout.module.scss';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

export default DefaultLayout;
