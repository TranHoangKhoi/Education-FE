import classNames from "classnames/bind";
import Styles from './UpdateStudent.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpZA, faArrowDownZA, faMagnifyingGlass, faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(Styles);

function UpdateStudent()
{

    return (
        <div className={cx('content')}>
            <h1 className={cx('center')}>Thêm sinh viên </h1>
            <div className={cx('wrapper')}>
                <div className={cx('row', 'no-gutters')}>
                    <form className={cx('form-group')}>

                        <div className={cx('wrapper-item')}>
                            <label>Khóa học</ label>
                            <select>
                                <option value="">16301</option>
                            </select>
                        </div>

                        <div className={cx('wrapper-item')}>
                            <label>Chuyên ngành</label>
                            <select>
                                <option value="">Công nghệ thông tin</option>
                            </select>
                        </div>

                        <div className={cx('wrapper-item')}>
                            <label>Lớp học</label>
                            <select>
                                <option value="">WE16301</option>
                            </select>
                        </div>

                        <div className={cx('wrapper-item')}>
                            <label>Mã số sinh viên</label>
                            <input placeholder="VD: datdtpc02104" value="" />
                        </div>

                        <div className={cx('wrapper-item')}>
                            <label>Họ và tên</label>
                            <input placeholder="VD: Dương Thành Đạt" spellcheck="false" />
                        </div>

                        <div className={cx('wrapper-item')}>
                            <label>Email</label>
                            <input placeholder="VD: datdtpc02104@fpt.edu.vn" spellcheck="false" />
                        </div>

                        <div className={cx('wrapper-item')}>
                            <label>Số điện thoại</label>
                            <input placeholder="VD: 0703608891" spellcheck="false" />
                        </div>

                        <div className={cx('wrapper-item')}>
                            <label>Giới tính</label>
                            <select>
                                <option value="">Nam</option>
                                <option value="">Nữ</option>
                            </select>
                        </div>

                        <div className={cx('wrapper-item')}>
                            <button >Thêm</button>
                        </div>
                    </form>
                </div>
            </div >

        </div >
    );
}

export default UpdateStudent;