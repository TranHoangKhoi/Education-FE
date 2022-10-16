
import classNames from "classnames/bind";
import styles from "./AddNotifications.module.scss";
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const cx = classNames.bind(styles)
function AddNotifications()
{
    // const [ckediter, setCkediter] = useState('');

    // const handleChenge = (e, editor) =>
    // {
    //     setCkediter(editor.getData())
    // }
    return (
        <div className={cx('content')}>
            <h1 className={cx('center')}>Thêm tin tức</h1>
            <div className={cx('wrapper')}>
                <div className={cx('row', 'no-gutters')}>
                    <form className={cx('form-group')}>
                        <div className={cx('wrapper-item')}>
                            <label>Tiêu đề</label>
                            <input placeholder="VD: Thông tin học tập" spellcheck="false" />
                        </div>

                        <div className={cx('wrapper-item')}>
                            <label>Loại tin tức</label>
                            <select>
                                <option value="">Thông tin học tập</option>
                                <option value="">Thông tin học phí</option>
                            </select>
                        </div>

                        <div className={cx('wrapper-item')}>
                            <label>Nội dung</label>

                            <textarea ></textarea>
                            {/* <CKEditor
                                editor={ClassicEditor}
                                onChange={(e, editor) => { handleChenge(e, editor) }}
                            /> */}

                        </div>

                        <div className={cx('wrapper-item')}>
                            <button >Thêm</button></div>
                    </form>
                </div>
            </div >

        </div >

    );
}

export default AddNotifications;