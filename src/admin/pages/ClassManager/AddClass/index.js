import classNames from "classnames/bind";
import styles from './addclass.module.scss'


const  cx = classNames.bind(styles)
function AddClass()
{
    return (
        <div className={cx('content')}>
        <h1 className={cx('center')}>Thêm lớp học</h1>
        <div className={cx('wrapper')}>
            <div className={cx('row', 'no-gutters')}>
                <form className={cx('form-group')}>
                    <div className={cx('wrapper-item')}>
                        <label>Tên lớp học</label>
                        <input placeholder="VD: WD16301" spellcheck="false" />
                    </div>
                    <div className={cx('wrapper-item')}>
                        <button >Thêm</button></div>
                </form>
            </div>
        </div >

    </div >
    );
}

export default AddClass;