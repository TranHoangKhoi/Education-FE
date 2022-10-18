
import classNames from "classnames/bind";
import styles from "./AddSemester.module.scss";


const cx = classNames.bind(styles)
function AddSemester()
{

    return (
        <div className={cx('content')}>
            <h1 className={cx('center')}>Thêm Học kỳ</h1>
            <div className={cx('wrapper')}>
                <div className={cx('row', 'no-gutters')}>
                    <form className={cx('form-group')}>
                        <div className={cx('wrapper-item')}>
                            <label>Học Kỳ</label>
                            <input placeholder="VD: Fall 2022" spellcheck="false" />
                        </div>
                        <div className={cx('wrapper-item')}>
                            <button >Thêm</button></div>
                    </form>
                </div>
            </div >

        </div >

    );
}

export default AddSemester;