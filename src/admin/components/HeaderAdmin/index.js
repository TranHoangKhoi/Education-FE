import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faSortDown } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);
function HeaderAdmin()
{

    return (
        <div className={cx('header')}>
            <div className={cx('header-search')}>
                <FontAwesomeIcon className={cx('icon-bars-header')} icon={faBars} />
            </div>

            <div className={cx('header-account')}>
                <div className={cx('account')}>
                    <div className={cx('account-img')}>
                        <img src="https://mega.com.vn/media/news/0106_hinh-nen-4k-may-tinh4.jpg" alt="dat" />
                    </div>

                    <div className={cx('account-name')}>
                        <span>Dương Thành Đạt</span>
                        <span className={cx('icon-name')} ><FontAwesomeIcon icon={faSortDown} /></span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HeaderAdmin;