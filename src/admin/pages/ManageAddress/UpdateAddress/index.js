import classNames from "classnames/bind";
import styles from "./UpdateAddress.module.scss";

const cx = classNames.bind(styles)
function UpdateAddress()
{

    return (
        <div className={cx('content')}>
            <h1 className={cx('center')}>Cập nhật địa chỉ</h1>
            <div className={cx('wrapper')}>
                <div className={cx('row', 'no-gutters')}>
                    <form className={cx('form-group')}>
                        <div className={cx('wrapper-item')}>
                            <label>Tiêu đề</label>
                            <select>
                                <option value="">Lựa chọn cơ sở</option>
                                <option value="">Cần Thơ</option>
                                <option value="">Hồ Chí Minh</option>
                            </select>
                        </div>

                        <div className={cx('wrapper-item')}>
                            <label>Địa chỉ</label>
                            <input placeholder="VD: Thông tin học tập" spellcheck="false" />
                        </div>

                        <div className={cx('wrapper-item')}>
                            <label>Số điện thoại</label>
                            <input placeholder="VD: Thông tin học tập" spellcheck="false" />
                        </div>

                        <div className={cx('wrapper-item')}>
                            <button >Cập nhật</button>
                        </div>
                    </form>
                </div>
            </div >

        </div >

    );
}

export default UpdateAddress;