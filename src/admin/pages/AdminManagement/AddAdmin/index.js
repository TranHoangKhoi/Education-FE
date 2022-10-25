import classNames from "classnames/bind";
import styles from './AddAdmin.module.scss';

const cx = classNames.bind(styles);
function AddAdmin()
{
    return (
        <div className={cx('content')}>
            <h1 className={cx('center')}>Thêm sinh viên </h1>
            <div className={cx('wrapper')}>
                <div className={cx('row', 'no-gutters')}>
                    <form className={cx('form-group')}>
                        <div className={cx('wrapper-item')}>
                            <label>Tên đăng nhập</label>
                            <input placeholder="VD: datdtpc02104" value="" />
                        </div>

                        <div className={cx('wrapper-item')}>
                            <label>Email</label>
                            <input placeholder="VD: datdtpc02104@fpt.edu.vn" spellcheck="false" />
                        </div>

                        <div className={cx('wrapper-item')}>
                            <label>Mật khẩu</label>
                            <input placeholder="VD: 123456789" spellcheck="false" />
                        </div>

                        <div className={cx('wrapper-item')}>
                            <label>Số điện thoại</label>
                            <input placeholder="VD: 0703608891" spellcheck="false" />
                        </div>

                        <div className={cx('wrapper-item')}>
                            <label>Hình ảnh</label>
                            <input type="file" spellcheck="false" />
                        </div>
                        <br />
                        <div className={cx('wrapper-item')}>
                            <button >Thêm</button>
                        </div>
                    </form>
                </div>
            </div >

        </div >

    );

}

export default AddAdmin;