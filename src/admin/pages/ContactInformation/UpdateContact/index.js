import classNames from "classnames/bind";
import styles from "./UpdateContact.module.scss";

const cx = classNames.bind(styles)
function UpdateContact()
{

    return (
        <div className={cx('content')}>
            <h1 className={cx('center')}>Cập nhật thông tin liên lạc</h1>
            <div className={cx('wrapper')}>
                <div className={cx('row', 'no-gutters')}>
                    <form className={cx('form-group')}>
                        <div className={cx('wrapper-item')}>
                            <label>Tiêu đề</label>
                            <input placeholder="VD: datdtpc02104" spellcheck="false" />
                        </div>

                        <div className={cx('wrapper-item')}>
                            <label>Địa chỉ</label>
                            <input placeholder="VD: 288 Nguyễn Văn Linh" spellcheck="false" />
                        </div>

                        <div className={cx('wrapper-item')}>
                            <label>Số điện thoại</label>
                            <input placeholder="VD: 0703608891" spellcheck="false" />
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

export default UpdateContact;