import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './Header.module.scss';
import TokenLogin from '~/layouts/components/Token';
import AuthLogin from '~/layouts/AuthLogin';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const cx = classNames.bind(style);
function Header() {
    const [token, setToken] = useState();
    const navigate = useNavigate();
    const handleLog = () => {
        if (!token) {
            return <AuthLogin setToken={setToken} />;
        }
    };
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
                            <Link to={handleLog ? '/student' : 'login'} className={cx('navbar__link')}>
                                Sinh viên
                            </Link>
                        </li>
                        <li className={cx('navbar__item')}>
                            <Link to={'/lecturers'} className={cx('navbar__link')}>
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
