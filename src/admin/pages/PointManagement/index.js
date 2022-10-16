import classNames from "classnames/bind";
import styles from './PointManagement.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpZA, faArrowDownZA, faMagnifyingGlass, faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function PointManagement()
{
    return (


        <div className={cx('content')}>
            <h1 className={cx('center')}>Quản lý điểm</h1>
            <div className={cx('wrapper')}>

                <div className={cx('lecturers-semester')}>
                    <div className={cx('row', 'no-gutters', 'df')}>
                        <form className={cx('form-group', 'c-6', 'p-r')}>
                            <div>
                                <label >Chọn Khối Ngành</label>
                            </div>
                            <div>
                                <select name="" id="" >
                                    <option value="">Công nghệ thông tin</option>
                                    <option value="">Nhà hàng khách sạn </option>
                                    <option value="">Cơ khí điện</option>
                                </select>
                            </div>
                            <div>
                                <span>Lựa chọn khối ngành để hiện thị chi tiết điểm theo kỳ</span>
                            </div>
                        </form>

                        <form className={cx('form-group', 'c-6', 'p-l')}>
                            <div>
                                <label >Chuyên Ngành</label>
                            </div>
                            <div>
                                <select name="" id="" >
                                    <option value="">Thiết kế web</option>
                                    <option value="">Ứng dụng phần mềm </option>
                                    <option value="">Spring 2022</option>
                                </select>
                            </div>
                            <div>
                                <span>Lựa chọn chuyên ngành để hiện thị chi tiết điểm theo kỳ</span>
                            </div>
                        </form>
                    </div>

                    <div className={cx('row', 'no-gutters', 'df')}>
                        <form className={cx('form-group', 'c-6', 'p-r')}>
                            <div>
                                <label >Lớp</label>
                            </div>
                            <div>
                                <select name="" id="">
                                    <option value="">WE16301</option>

                                </select>
                            </div>
                            <div>
                                <span>Lựa chọn học kỳ để hiện thị chi tiết điểm theo kỳ</span>
                            </div>
                        </form>

                        <form className={cx('form-group', 'c-6', 'p-l')}>
                            <div>
                                <label >Môn học</label>
                            </div>
                            <div>
                                <select name="" id="">
                                    <option value="">Xây dựng trang Web 2 (WEB2033)</option>
                                    <option value="">Summer 2022 </option>
                                    <option value="">Spring 2022</option>
                                </select>
                            </div>
                            <div>
                                <span>Lựa chọn học kỳ để hiện thị chi tiết điểm theo kỳ</span>
                            </div>
                        </form>
                    </div>
                </div>

                <div className={cx('lecturers-semester', 'flex-end')}>
                    <form className={cx('form-groups', 'rows', 'c-6')}>
                        <div className={cx('search-student')}>
                            <input placeholder='VD: PC02104' />
                        </div>
                        <div className={cx('search__btn')}>
                            <button type=""><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                        </div>
                    </form>
                </div>



                <div className={cx('lecturers__name-table')}>
                    <div className={cx('lecturers__name')}>
                        <p>Dương Thành Đạt</p>
                    </div>

                    <div className={cx('lecturers__btn')}>
                        <button>Print</button>
                        <button>Copy</button>
                        <button>Excel</button>
                        <button>CSV</button>
                        <button>PDF</button>
                    </div>

                    <div className={cx('table__lecturers')}>
                        <div className={cx('table__content')}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            <span className={cx('tbl__heading--item')}>
                                                #
                                                <FontAwesomeIcon className={cx('tbl__arr--up')} icon={faArrowUpZA} />
                                                <FontAwesomeIcon
                                                    className={cx('tbl__arr--down')}
                                                    icon={faArrowDownZA}
                                                />
                                            </span>
                                        </th>
                                        <th>
                                            <span className={cx('tbl__heading--item')}>
                                                Tên đầu điểm
                                                <FontAwesomeIcon className={cx('tbl__arr--up')} icon={faArrowUpZA} />
                                                <FontAwesomeIcon
                                                    className={cx('tbl__arr--down')}
                                                    icon={faArrowDownZA}
                                                />
                                            </span>
                                        </th>
                                        <th>
                                            <span className={cx('tbl__heading--item')}>
                                                Trọng số
                                                <FontAwesomeIcon className={cx('tbl__arr--up')} icon={faArrowUpZA} />
                                                <FontAwesomeIcon
                                                    className={cx('tbl__arr--down')}
                                                    icon={faArrowDownZA}
                                                />
                                            </span>
                                        </th>
                                        <th>
                                            <span className={cx('tbl__heading--item')}>
                                                Điểm
                                                <FontAwesomeIcon className={cx('tbl__arr--up')} icon={faArrowUpZA} />
                                                <FontAwesomeIcon
                                                    className={cx('tbl__arr--down')}
                                                    icon={faArrowDownZA}
                                                />
                                            </span>
                                        </th>
                                        <th>
                                            <span className={cx('tbl__heading--item')}>
                                                Ghi chú
                                                <FontAwesomeIcon className={cx('tbl__arr--up')} icon={faArrowUpZA} />
                                                <FontAwesomeIcon
                                                    className={cx('tbl__arr--down')}
                                                    icon={faArrowDownZA}
                                                />
                                            </span>
                                        </th>
                                        <th>
                                            <span className={cx('tbl__heading--item')}>
                                                Thao tác
                                                <FontAwesomeIcon className={cx('tbl__arr--up')} icon={faArrowUpZA} />
                                                <FontAwesomeIcon
                                                    className={cx('tbl__arr--down')}
                                                    icon={faArrowDownZA}
                                                />
                                            </span>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Đánh giá Assignment GĐ 2</td>
                                        <td>10</td>
                                        <td>9.5</td>
                                        <td></td>
                                        <td><FontAwesomeIcon className={cx('tbl__arr--up', 'p-r')} icon={faTrashCan} />
                                            <FontAwesomeIcon className={cx('tbl__arr--up', 'p-l')} icon={faPenToSquare} />

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Đánh giá Assignment GĐ 2</td>
                                        <td>10</td>
                                        <td>9.5</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Lab1</td>
                                        <td>10</td>
                                        <td>9.5</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Lab2</td>
                                        <td>10</td>
                                        <td>9.5</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Lab3</td>
                                        <td>10</td>
                                        <td>9.5</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Lab4</td>
                                        <td>10</td>
                                        <td>9.5</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Lab5</td>
                                        <td>10</td>
                                        <td>9.5</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Lab6</td>
                                        <td>10</td>
                                        <td>9.5</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Lab7</td>
                                        <td>10</td>
                                        <td>9.5</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className={cx('table__control')}>
                            <div className={cx('table__control--left')}>
                                <span>Đang xem 1 đến 10 trong tổng số 31 mục</span>
                            </div>
                            <div className={cx('table__control--right')}>
                                <div className={cx('tbl__ctrl--wrapper')}>
                                    <ul className={cx('tbl__ctrl--list')}>
                                        <li className={cx('ctrl__btn', 'tbl__ctrl--btn', 'disabled')}>Trước</li>
                                        <li className={cx('num__btn', 'tbl__ctrl--btn', 'active')}>1</li>
                                        <li className={cx('num__btn', 'tbl__ctrl--btn')}>2</li>
                                        <li className={cx('ctrl__btn', 'tbl__ctrl--btn')}>Tiếp</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div >
        </div >
    );
}

export default PointManagement;
