import classNames from 'classnames/bind';
import styles from './ProfilePersonal.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function ProfilePersonal() {
    return (
        <div className={cx('content')}>
            <div className={cx('wrapper')}>
                <div className={cx('grid wide')}>
                    <div className={cx('row')}>
                        <div className={cx('profile', 'c-3')}>
                            <div className={cx('profile', 'profile__head')}></div>
                            <div className={cx('profile__body')}>
                                <div className={cx('profile__widget--user')}>
                                    <div className={cx('profile__widget--head')}>
                                        <div className={cx('profile__widget--media')}>
                                            <img src={images.profile} />
                                        </div>
                                        <div className={cx('profile__widget--content')}>
                                            <div className={cx('profile__widget--section')}>
                                                <a href="#" className={cx('profile__widget--username')}>
                                                    Trần Minh Đạt
                                                    <FontAwesomeIcon icon={faCheck} className={cx('profile__icon')} />
                                                </a>
                                                <span className={cx('profile__widget--subtile')}>Sinh viên</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('profile__widget--body')}>
                                        <div className={cx('profile__widget--content--user')}>
                                            <div className={cx('profile__widget--info')}>
                                                <span className={cx('profile__widget--label')}>Email:</span>
                                                <a href="#" className={cx('profile__widget--data')}>
                                                    dattmpc02133@fpt.edu.vn
                                                </a>
                                            </div>
                                        </div>
                                        <div className={cx('profile__widget--items')}>
                                            <a href="#" className={cx('profile__widget--active')}>
                                                <span className={cx('profile__widget--section')}>
                                                    <span className={cx('profile__widget--icon')}></span>
                                                    <span className={cx('profile__widget--desc')}>Hồ sơ cá nhân</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('portlet', 'c-9')}>
                            <div className={cx('portlet', 'portlet__head')}>
                                <div className={cx('portlet__head-label')}>
                                    <h3 className={cx('portlet__head-title')}>Thông tin cá nhân</h3>
                                </div>
                                <form className={cx('form__label-right')}>
                                    <div className={cx('profile__body')}>
                                        <div className={cx('profile__widget--user')}>
                                            <div className={cx('row')}>
                                                <div className={cx('c-3')}></div>
                                                <div className={cx('c-9')}>
                                                    <div className={cx('profile__section--title--sm')}>
                                                        Thông tin cá nhân:
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('form-group', 'row')}>
                                                <label className={cx('col-form-label', 'c-3')}>Họ và tên</label>
                                                <div className={cx('c-9')}>
                                                    <input
                                                        type="text"
                                                        value="Trần Minh Đạt"
                                                        className={cx('input-form__label')}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePersonal;
