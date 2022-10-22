import classNames from "classnames/bind";
import styles from './UpdatePoint.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpZA, faArrowDownZA, faMagnifyingGlass, faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function UpdatePoint()
{
    return (


        <div className={cx('content')}>
            <h1 className={cx('center')}>Cập nhật điểm</h1>
            <div className={cx('wrapper')}>





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
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Đánh giá Assignment GĐ 2</td>
                                        <td>10</td>
                                        <td>
                                            <div>
                                                <input type="" name="" value="9.5" />
                                            </div>
                                        </td>
                                        <td></td>

                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Đánh giá Assignment GĐ 2</td>
                                        <td>10</td>
                                        <td><input type="" name="" value="9.5" /></td>
                                        <td></td>

                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Lab1</td>
                                        <td>10</td>
                                        <td><input type="" name="" value="9.5" /></td>
                                        <td></td>

                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Lab2</td>
                                        <td>10</td>
                                        <td><input type="" name="" value="9.5" /></td>
                                        <td></td>

                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Lab3</td>
                                        <td>10</td>
                                        <td><input type="" name="" value="9.5" /></td>

                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Lab4</td>
                                        <td>10</td>
                                        <td><input type="" name="" value="9.5" /></td>

                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Lab5</td>
                                        <td>10</td>
                                        <td><input type="" name="" value="9.5" /></td>

                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Lab6</td>
                                        <td>10</td>
                                        <td><input type="" name="" value="9.5" /></td>
                                        <td></td>

                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Lab7</td>
                                        <td>10</td>
                                        <td><input type="" name="" value="9.5" /></td>
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

                        <div>
                            <div className={cx('update-point')}>
                                <button type="">Cập nhật</button>
                            </div>
                        </div>

                    </div>
                </div>


            </div >
        </div >
    );
}

export default UpdatePoint;
