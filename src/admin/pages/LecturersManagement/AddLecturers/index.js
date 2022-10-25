import classNames from "classnames/bind";
import styles from './AddLecturers.module.scss';

const cx = classNames.bind(styles);
function AddLecturers()
{
    return (
        <div className={cx('content')}>
            <h1 className={cx('center')}>Thêm giảng viên </h1>
            <div className={cx('wrapper')}>
                <div className={cx('row', 'no-gutters')}>
                    <form className={cx('form-group')}>

                        <div className={cx('wrapper-item')}>
                            <label>Họ và tên</label>
                            <input placeholder="VD: Dương Thành Đạt" value="" />
                        </div>

                        <div className={cx('wrapper-item')}>
                            <label>Tên đăng nhập</label>
                            <input placeholder="VD: datdtpc02104" value="" />
                        </div>

                        <div className={cx('wrapper-item')}>
                            <label>Email</label>
                            <input placeholder="VD: datdtpc02104@fpt.edu.vn" spellcheck="false" />
                        </div>


                        <div className={cx('wrapper-item')}>
                            <label>Số điện thoại</label>
                            <input placeholder="VD: 0703608891" spellcheck="false" />
                        </div>

                        <div className={cx('wrapper-item')}>
                            <label>Mật khẩu</label>
                            <input placeholder="VD: 123456789" spellcheck="false" />
                        </div>

                        <div className={cx('wrapper-item')}>
                            <button >Thêm</button>
                        </div>
                    </form>
                </div>
            </div >

        </div >

    );

}

export default AddLecturers;