import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Notification.module.scss';
const cx = classNames.bind(styles);
function Notification() {
    return (
        <div className={cx('Wrapper')}>
            <div className={cx('row no-gutters')}>
                <div className={cx('grid')}>
                    <div className={cx('kt--portlet')}>
                        <div className={cx('row no-gutters')}>
                            <div className={cx('row no-gutters col c-3', 'border-right')}>
                                <div id="show-newsletter-student" className={cx('newsletter-student')}>
                                    <h3 className={cx('kt-link')}>Thông tin học tập</h3>
                                    <div className={cx('witget1__item')}>
                                        <div className={cx('witget1__info')}>
                                            <a href="#" className={cx('Link')}>
                                                🥇 THÔNG BÁO THỜI GIAN TỔ CHỨC THI LẠI ĐỢT 1 - FALL 2022
                                            </a>
                                        </div>
                                    </div>
                                    <div className={cx('witget1__item')}>
                                        <div className={cx('witget1__info')}>
                                            <div className={cx('witget1__info')}>
                                                <a href="#" className={cx('Link')}>
                                                    🥈 Thông báo kế hoạch TỔ CHỨC các đợt thi lại các môn Online - HỌC
                                                    KỲ FALL 2022
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('witget1__item')}>
                                        <div className={cx('witget1__info')}>
                                            <div className={cx('witget1__info')}>
                                                <a href="#" className={cx('Link')}>
                                                    🥉 THÔNG BÁO QUAN TRỌNG _ MỘT SỐ ĐIỂM MỚI TRONG CÔNG TÁC ĐÀO TẠO BẮT
                                                    ĐẦU TỪ KỲ FALL 2022
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div type="button">
                                        <a href="#" className={cx('seen_more')}>
                                            Xem thêm
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('row no-gutters col c-3', 'border-right')}>
                                <div id="show-newsletter-student" className={cx('newsletter-student')}>
                                    <h3 className={cx('kt-link')}>Thông tin hoạt động</h3>
                                    <div className={cx('witget1__item')}>
                                        <div className={cx('witget1__info')}>
                                            <a href="#" className={cx('Link')}>
                                                🥇 ĐĂNG KÝ BHYT HỌC KỲ FALL 2022
                                            </a>
                                        </div>
                                    </div>
                                    <div className={cx('witget1__item')}>
                                        <div className={cx('witget1__info')}>
                                            <div className={cx('witget1__info')}>
                                                <a href="#" className={cx('Link')}>
                                                    THÔNG BÁO NHẬN GIÁO TRÌNH KỲ FALL NĂM 2022 (ĐỢT 3)
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('row no-gutters col c-3', 'border-right')}>
                                <div id="show-newsletter-student" className={cx('newsletter-student')}>
                                    <h3 className={cx('kt-link')}>Thông tin học phí</h3>
                                    <div className={cx('witget1__item')}>
                                        <div className={cx('witget1__info')}>
                                            <a href="#" className={cx('Link')}>
                                                🥇 THÔNG BÁO THU HỌC PHÍ FALL 2022
                                            </a>
                                        </div>
                                    </div>
                                    <div className={cx('witget1__item')}>
                                        <div className={cx('witget1__info')}>
                                            <div className={cx('witget1__info')}>
                                                <a href="#" className={cx('Link')}>
                                                    🥈 TRIỂN KHAI KÊNH THANH TOÁN VIETINBANK
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('witget1__item')}>
                                        <div className={cx('witget1__info')}>
                                            <div className={cx('witget1__info')}>
                                                <a href="#" className={cx('Link')}>
                                                    🥉 THÔNG BÁO CHÍNH SÁCH ƯU ĐÃI HỌC PHÍ
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('row no-gutters col c-3', 'border-right')}>
                                <div id="show-newsletter-student" className={cx('newsletter-student')}>
                                    <h3 className={cx('kt-link')}>Thông tin việc làm</h3>
                                    <div className={cx('witget1__item')}>
                                        <div className={cx('witget1__info')}>
                                            <a href="#" className={cx('Link')}>
                                                🥇 THÔNG BÁO THỜI GIAN TỔ CHỨC THI LẠI ĐỢT 1 - FALL 2022
                                            </a>
                                        </div>
                                    </div>
                                    <div className={cx('witget1__item')}>
                                        <div className={cx('witget1__info')}>
                                            <div className={cx('witget1__info')}>
                                                <a href="#" className={cx('Link')}>
                                                    🥈 Thông báo kế hoạch TỔ CHỨC các đợt thi lại các môn Online - HỌC
                                                    KỲ FALL 2022
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('witget1__item')}>
                                        <div className={cx('witget1__info')}>
                                            <div className={cx('witget1__info')}>
                                                <a href="#" className={cx('Link')}>
                                                    🥉 THÔNG BÁO QUAN TRỌNG _ MỘT SỐ ĐIỂM MỚI TRONG CÔNG TÁC ĐÀO TẠO BẮT
                                                    ĐẦU TỪ KỲ FALL 2022
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notification;
