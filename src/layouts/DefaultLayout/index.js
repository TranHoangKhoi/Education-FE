import Sidebar from '~/layouts/components/Sidebar';
import classNames from 'classnames/bind';
import styles from '../components/Sidebar/Sidebar.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <header className={cx('header')}>
                <div className={cx('header__topbar')}>
                    <a href="#" className={cx('header__topbar--item')}>
                        <div className={cx('header__topbar--wrapper')}>
                            <span className={cx('header__topbar--icon')}>
                                <Button primary onClick={() => alert('123')}>
                                    <FontAwesomeIcon className={cx('logout')} icon={faRightToBracket} />
                                </Button>
                            </span>
                        </div>
                    </a>
                    <div className={cx('header__topbar-item--user')}>
                        <div className={cx('header__topbar-item--welcome')}>Xin chào,</div>
                        <div className={cx('header__topbar-item--username')}>Đạt</div>
                    </div>
                </div>
            </header>
            <main className={cx('main')}>
                <div className={cx('content')}>{children}</div>
            </main>
        </div>
    );
}

export default DefaultLayout;
