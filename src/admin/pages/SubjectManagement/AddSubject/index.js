import classNames from "classnames/bind";
import styles from './addsubject.module.scss'

const cx = classNames.bind(styles)
function AddSubject() {
    return (
        <div className={cx('content')}>
        <h1 className={cx('center')}>Thêm môn học</h1>
        <div className={cx('wrapper')}>
            <div className={cx('row', 'no-gutters')}>
                <form className={cx('form-group')}>
                    <div className={cx('wrapper-item')}>
                        <label>Tên môn học</label>
                        <input placeholder="VD: Lập trình C cơ bản" spellcheck="false" />
                    </div>
                    
                        
                        <div className={cx('wrapper-item')}>
                            <label>Các môn chuyên ngành</label>
                            <select>
                                <option value="">Công nghệ thông tin </option>
                                <option value="">Quản trị nhà hàng khách sạn</option>
                                <option value="">Cơ khí</option>
                            </select>
                        </div>
                        <div className={cx('wrapper-item')}>
                            <label>Học kì</label>
                            <select>
                                <option value="">Kì sumer </option>
                                <option value="">Kì spring</option>
                              
                            </select>
                        </div>
                        <div className={cx('wrapper-item')}>
                            <label>Lớp</label>
                            <select>
                                <option value="">16301 </option>
                                <option value="">16302</option>
                                <option value="">16301</option>
                            </select>
                        </div>
                        <div className={cx('wrapper-item')}>
                        <button >Thêm</button></div>
                </form>
            </div>
        </div >

    </div >
    );
    
}

export default AddSubject ;