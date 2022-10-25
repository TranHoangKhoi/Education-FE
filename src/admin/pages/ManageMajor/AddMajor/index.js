
import classNames from "classnames/bind";
import styles from "./AddMajor.module.scss";


const cx = classNames.bind(styles)
function AddMajor()
{

    return (
        <div className={cx('content')}>
            <div className={cx('wrapper')}>
                <h1 className={cx('center')}>Thêm chuyên ngành</h1>
                <div className={cx('row', 'no-gutters')}>
                    <form className={cx('form-group')}>
                        <div className={cx('wrapper-item')}>
                            <label>Tên chuyên ngành </label>
                            <input placeholder="VD: Thiết kế website" spellcheck="false" />
                        </div>
                        <div className={cx('wrapper-item')}>
                            <label>Mã chuyên ngành </label>
                            <input placeholder="VD: WEB" spellcheck="false" />
                        </div>
                        <div className={cx('wrapper-item')}>
                            <button >Thêm</button></div>
                    </form>
                </div>
            </div >

        </div >

    );
}

export default AddMajor;