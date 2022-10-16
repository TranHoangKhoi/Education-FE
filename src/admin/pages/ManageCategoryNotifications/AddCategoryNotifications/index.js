import classNames from "classnames/bind";
import styles from "./AddCategoryNotifications.module.scss";

const cx = classNames.bind(styles)
function AddCategoryNotifications()
{
    return (
        <div className={cx('content')}>
            <h1 className={cx('center')}>Thêm danh mục tin</h1>
            <div className={cx('wrapper')}>
                <div className={cx('row', 'no-gutters')}>
                    <form className={cx('form-group')}>
                        <div className={cx('wrapper-item')}>
                            <label>Tên danh Mục</label>
                        </div>
                        <div className={cx('wrapper-item')}>
                            <input placeholder="VD: Thông tin học tập" spellcheck="false" />
                        </div>

                        <div className={cx('wrapper-item')}> <button >Thêm</button></div>


                    </form>
                </div>
            </div >

        </div >

    );
}

export default AddCategoryNotifications;