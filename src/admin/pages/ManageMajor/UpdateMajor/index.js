import classNames from "classnames/bind";
import styles from "./UpdateMajor.module.scss";


const cx = classNames.bind(styles)
function UpdateMajor()
{

    return (
        <div className={cx('content')}>
            <h1 className={cx('center')}>Cập nhật chuyên ngành</h1>
            <div className={cx('wrapper')}>
                <div className={cx('row', 'no-gutters')}>
                    <form className={cx('form-group')}>
                        <div className={cx('wrapper-item')}>
                            <label>Tên chuyên ngành</label>
                            <input placeholder="VD: Fall 2022" spellcheck="false" />
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

export default UpdateMajor;