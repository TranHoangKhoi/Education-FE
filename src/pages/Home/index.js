import classNames from 'classnames/bind';

import style from './Home.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(style);
function Home() {
    return (
        <div className="content">
            <div className={cx('main__banner')}>
                <img className={cx('main__banner--img')} src={images.banner} alt="Banner" />
            </div>
        </div>
    );
}

export default Home;
