import classNames from 'classnames/bind';
import style from './Footer.module.scss';

const cx = classNames.bind(style);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <footer className={cx('footer')}>
                <div className={cx('grid wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col c-3')}>
                            <div className={cx('footer__logo')}>
                                <img src="https://i.imgur.com/5EK1lFm.png" className={cx('footer__logo--img')} />
                            </div>
                        </div>
                        <div className={cx('col c-9')}>
                            <div className={cx('footer__info')}>
                                <div className={cx('footer__info--heading')}>
                                    <h1>Thông tin liên hệ</h1>
                                    <p>Trụ sở chính Tòa nhà FPT Polytechnic, Phố Trịnh Văn Bô, Nam Từ Liêm, Hà Nội</p>
                                </div>

                                <div className={cx('footer__info--content')}>
                                    <div className={cx('gird')}>
                                        <div className={cx('row')}>
                                            <div className={cx('col l-6')}>
                                                <div className={cx('footer__item')}>
                                                    <h6>Cơ sở Hà Nội</h6>
                                                    <p>
                                                        Tòa nhà FPT Polytechnic, Phố Trịnh Văn Bô, Nam Từ Liêm, Hà Nội
                                                    </p>
                                                    <p>(024) 7300 1955</p>
                                                </div>
                                                <div className={cx('footer__item')}>
                                                    <h6>Cơ sở Đà Nẵng</h6>
                                                    <p>
                                                        Số 137 Nguyễn Thị Thập, Phường Hòa Minh, Quận Liên Chiểu, TP. Đà
                                                        Nẵng
                                                    </p>
                                                    <p>(0236) 3710 999</p>
                                                </div>
                                                <div className={cx('footer__item')}>
                                                    <h6>Cơ sở Cần Thơ</h6>
                                                    <p>
                                                        Số 288, Nguyễn Văn Linh, phường An Khánh, quận Ninh Kiều, Tp.
                                                        Cần Thơ.
                                                    </p>
                                                    <p>(0292) 7300 468</p>
                                                </div>
                                            </div>
                                            <div className={cx('col l-6')}>
                                                <div className={cx('footer__item')}>
                                                    <h6>Cơ sở Hà Nội</h6>
                                                    <p>
                                                        Tòa nhà FPT Polytechnic, Phố Trịnh Văn Bô, Nam Từ Liêm, Hà Nội
                                                    </p>
                                                    <p>(024) 7300 1955</p>
                                                </div>
                                                <div className={cx('footer__item')}>
                                                    <h6>Cơ sở Đà Nẵng</h6>
                                                    <p>
                                                        Số 137 Nguyễn Thị Thập, Phường Hòa Minh, Quận Liên Chiểu, TP. Đà
                                                        Nẵng
                                                    </p>
                                                    <p>(0236) 3710 999</p>
                                                </div>
                                                <div className={cx('footer__item')}>
                                                    <h6>Cơ sở Cần Thơ</h6>
                                                    <p>
                                                        Số 288, Nguyễn Văn Linh, phường An Khánh, quận Ninh Kiều, Tp.
                                                        Cần Thơ.
                                                    </p>
                                                    <p>(0292) 7300 468</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
