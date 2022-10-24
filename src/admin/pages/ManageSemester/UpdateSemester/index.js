
import classNames from "classnames/bind";
import styles from "./UpdateSemester.module.scss";


const cx = classNames.bind(styles)
function UpdateSemester()
{

    return (
        <div className={cx('content')}>
            <h1 className={cx('center')}>Cập Nhật Học kỳ</h1>
            <div className={cx('wrapper')}>
                <div className={cx('row', 'no-gutters')}>
                    <form className={cx('form-group')}>


                        <div className={cx('wrapper-item')}>
                            <label>Khóa học</label>
                            <select>
                                <option value="">16301</option>
                            </select>
                        </div>

                        <div className={cx('wrapper-item')}>
                            <label>Tên học kỳ</label>
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

export default UpdateSemester;