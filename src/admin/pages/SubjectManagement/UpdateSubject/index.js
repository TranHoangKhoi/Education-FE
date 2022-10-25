import styles from './updatesubject.module.scss'
import classNames from "classnames/bind";
const cx = classNames.bind(styles)
function UpdateSubject()
{
    return (
        <div className={cx('content')}>
            <h1 className={cx('center')}>Cập Nhật Môn Học</h1>
            <div className={cx('wrapper')}>
                <div className={cx('row', 'no-gutters')}>
                    <form className={cx('form-group')}>

                        <div className={cx('wrapper-item')}>
                            <label>Học kì</label>
                            <select>
                                <option value="">Fall 2022</option>
                            </select>
                        </div>

                        <div className={cx('wrapper-item')}>
                            <label>Lớp học</label>
                            <select>
                                <option value="">Web16301</option>
                            </select>
                        </div>

                        <div className={cx('wrapper-item')}>
                            <label>Khối ngành</label>
                            <select>
                                <option value="">Công nghệ thông tin </option>
                                <option value="">Quản trị nhà hàng khách sạn</option>
                                <option value="">Cơ khí</option>
                            </select>
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

export default UpdateSubject;