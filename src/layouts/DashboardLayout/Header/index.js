import classNames from 'classnames/bind';
import style from './Header.module.scss';

const cx = classNames.bind(style);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <a className={cx('logo__link')}>
                        <img className={cx('logo__img')} src="https://ap.poly.edu.vn/images/logo.png" alt="Logo" />
                    </a>
                </div>

                <div className={cx('navbar')}>
                    <ul className={cx('navbar__list')}>
                        <li className={cx('navbar__item')}>
                            <a href="#" className={cx('navbar__link')}>
                                Sinh viên
                            </a>
                        </li>
                        <li className={cx('navbar__item')}>
                            <a href="#" className={cx('navbar__link')}>
                                Giảng viên
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
