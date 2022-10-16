import classNames from "classnames/bind";
import styles from "./UpdateCategoryNotifications.module.scss";

const cx = classNames.bind(styles)
function UpdateCategoryNotifications()
{
    return (
        <div className={cx('content')}>
            <h1 className={cx('center')}>Cập nhật danh mục tin</h1>
            <div className={cx('wrapper')}>
                <div className={cx('row', 'no-gutters')}>
                    <form className={cx('form-group')}>
                        <div className={cx('wrapper-item')}>
                            <label>Tên danh Mục</label>
                        </div>
                        <div className={cx('wrapper-item')}>
                            <input placeholder="VD: Thông tin học tập" spellcheck="false" />
                        </div>

                        <div className={cx('wrapper-item')}> <button >Cập nhật</button></div>


                    </form>
                </div>
            </div >

        </div >

    );
}

export default UpdateCategoryNotifications;