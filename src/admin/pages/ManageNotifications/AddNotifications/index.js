import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import classNames from "classnames/bind";
import styles from "./AddNotifications.module.scss";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const cx = classNames.bind(styles)
function AddNotifications()
{
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
                            <div className={cx('ckeditor')}>
                                <CKEditor
                                    editor={ClassicEditor}
                                    data="<p>Mời viết thông tin</p>"
                                    onReady={editor =>
                                    {
                                        // You can store the "editor" and use when it is needed.
                                        console.log('Editor is ready to use!', editor);
                                    }}
                                    onChange={(event, editor) =>
                                    {
                                        const data = editor.getData();
                                        console.log({ event, editor, data });
                                    }}
                                    onBlur={(event, editor) =>
                                    {
                                        console.log('Blur.', editor);
                                    }}
                                    onFocus={(event, editor) =>
                                    {
                                        console.log('Focus.', editor);
                                    }}
                                />
                            </div>
                        </div>
                        <div className={cx('wrapper-item')}>
                            <button className={cx('btn')}>Thêm</button>
                        </div>
                    </form>
                </div>
            </div >

        </div >

    );
}

export default AddNotifications;