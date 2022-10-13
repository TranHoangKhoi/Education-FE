import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './Header.module.scss';
import { isLogin } from '~/service/constant';
import { HandleLogin } from '~/service';

const cx = classNames.bind(style);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link className={cx('logo__link')}>
                        <img className={cx('logo__img')} src="https://ap.poly.edu.vn/images/logo.png" alt="Logo" />
                    </Link>
                </div>

                <div className={cx('navbar')}>
                    <ul className={cx('navbar__list')}>
                        <li className={cx('navbar__item')}>
                            <Link to={HandleLogin() ? '/student' : '/login'} className={cx('navbar__link')}>
                                Sinh viên
                            </Link>
                        </li>
                        <li className={cx('navbar__item')}>
                            <Link to={HandleLogin() ? '/lecturers' : '/login'} className={cx('navbar__link')}>
                                Giảng viên
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
