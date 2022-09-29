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
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
