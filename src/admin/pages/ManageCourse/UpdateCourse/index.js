
import classNames from "classnames/bind";
import styles from "./UpdateCourse.module.scss";


const cx = classNames.bind(styles)
function UpdateCourse()
{

    return (
        <div className={cx('content')}>
            <h1 className={cx('center')}>Cập Nhật khóa học</h1>
            <div className={cx('wrapper')}>
                <div className={cx('row', 'no-gutters')}>
                    <form className={cx('form-group')}>
                        <div className={cx('wrapper-item')}>
                            <label>Tên khóa học</label>
                            <input placeholder="VD: 16301" spellcheck="false" />
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

export default UpdateCourse;