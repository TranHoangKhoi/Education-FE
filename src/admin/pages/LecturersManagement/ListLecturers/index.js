import classNames from "classnames/bind";
import Styles from './ListLecturers.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpZA, faArrowDownZA, faMagnifyingGlass, faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(Styles);

function ListLecturers()
{
    return (
        <div className={cx('content')}>
            <h1 className={cx('center')}>Danh sách Giảng viên</h1>
            <div className={cx('wrapper')}>
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
                        <p></p>
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
                                                Họ và tên
                                                <FontAwesomeIcon className={cx('tbl__arr--up')} icon={faArrowUpZA} />
                                                <FontAwesomeIcon
                                                    className={cx('tbl__arr--down')}
                                                    icon={faArrowDownZA}
                                                />
                                            </span>
                                        </th>

                                        <th>
                                            <span className={cx('tbl__heading--item')}>
                                                Mã giảng viên
                                                <FontAwesomeIcon className={cx('tbl__arr--up')} icon={faArrowUpZA} />
                                                <FontAwesomeIcon
                                                    className={cx('tbl__arr--down')}
                                                    icon={faArrowDownZA}
                                                />
                                            </span>
                                        </th>

                                        <th>
                                            <span className={cx('tbl__heading--item')}>
                                                Email
                                                <FontAwesomeIcon className={cx('tbl__arr--up')} icon={faArrowUpZA} />
                                                <FontAwesomeIcon
                                                    className={cx('tbl__arr--down')}
                                                    icon={faArrowDownZA}
                                                />
                                            </span>
                                        </th>
                                        <th>
                                            <span className={cx('tbl__heading--item')}>
                                                Số điện thoại
                                                <FontAwesomeIcon className={cx('tbl__arr--up')} icon={faArrowUpZA} />
                                                <FontAwesomeIcon
                                                    className={cx('tbl__arr--down')}
                                                    icon={faArrowDownZA}
                                                />
                                            </span>
                                        </th>
                                        <th>
                                            <span className={cx('tbl__heading--item')}>
                                                Vai Trò
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
                                        <td>Dương Thành Đạt</td>
                                        <td>GV02104</td>
                                        <td>datdtgv02104@fpt.edu.vn</td>
                                        <td>0905015900</td>
                                        <td>
                                            Giảng viên
                                        </td>
                                        <td><FontAwesomeIcon className={cx('tbl__arr--up', 'p-r')} icon={faTrashCan} />
                                            <FontAwesomeIcon className={cx('tbl__arr--up', 'p-l')} icon={faPenToSquare} />

                                        </td>
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

export default ListLecturers;