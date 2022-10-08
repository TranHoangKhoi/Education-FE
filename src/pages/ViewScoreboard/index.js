import classNames from 'classnames/bind';
import styles from './ViewScoreboard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpZA, faArrowDownZA, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function ViewScoreboard()
{
    return (
        <div className={cx('content')}>
            <div className={cx('wrapper')}>
                <div className={cx('lecturers-shadow', 'row')}>
                    <div className={cx('lecturers-semester', 'c-6')}>
                        <form className={cx('form-group')}>
                            <div>
                                <label for="">Khóa học</label>
                            </div>
                            <div>
                                <select name="" id="" disabled>
                                    <option value="">Fall 2022</option>
                                    <option value="">Summer 2022 </option>
                                    <option value="">Spring 2022</option>
                                </select>
                            </div>
                            <div>
                                <span>Lựa chọn học kỳ để hiện thị chi tiết điểm theo kỳ</span>
                            </div>
                        </form>
                    </div>

                    <div className={cx('lecturers-semester', 'c-6')}>
                        <form className={cx('form-group')}>
                            <div>
                                <label for="">Học kỳ</label>
                            </div>
                            <div>
                                <select name="" id="" disabled>
                                    <option value="">Fall 2022</option>
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


                <div className={cx('lecturers-shadow', 'row')}>
                    <div className={cx('lecturers-semester', 'c-6')}>
                        <form className={cx('form-group')}>
                            <div>
                                <label for="">Lớp</label>
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
                    </div>

                    <div className={cx('lecturers-semester', 'c-6')}>
                        <form className={cx('form-group')}>
                            <div>
                                <label for="">Môn học</label>
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

                <div className={cx('lecturers-shadow', 'center', 'row')}>
                    <div className={cx('lecturers-semester', 'c-6')}>
                        <p>Danh sách lớp 16301</p>
                    </div>

                    <div className={cx('lecturers-semester', 'c-6')}>
                        <form className={cx('form-group')}>
                            <div className={cx('search-student')}>
                                <div>  <input placeholder='VD: PC02104' /></div>
                                <div className={cx('search__btn')}>
                                    <button type=""><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                                </div>

                            </div>


                        </form>
                    </div>
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
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Đánh giá Assignment GĐ 2</td>
                                        <td>10</td>
                                        <td>9.5</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Đánh giá Assignment GĐ 2</td>
                                        <td>10</td>
                                        <td>9.5</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Lab1</td>
                                        <td>10</td>
                                        <td>9.5</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Lab2</td>
                                        <td>10</td>
                                        <td>9.5</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Lab3</td>
                                        <td>10</td>
                                        <td>9.5</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Lab4</td>
                                        <td>10</td>
                                        <td>9.5</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Lab5</td>
                                        <td>10</td>
                                        <td>9.5</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Lab6</td>
                                        <td>10</td>
                                        <td>9.5</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Lab7</td>
                                        <td>10</td>
                                        <td>9.5</td>
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

                <div className={cx('lecturers__name-table')}>
                    <div className={cx('lecturers__name')}>
                        <p>1: Dương Thành Đạt</p>
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
                                        <td>9.5</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Đánh giá Assignment GĐ 2</td>
                                        <td>10</td>
                                        <td>9.5</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Lab1</td>
                                        <td>10</td>
                                        <td>9.5</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Lab2</td>
                                        <td>10</td>
                                        <td>9.5</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Lab3</td>
                                        <td>10</td>
                                        <td>9.5</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Lab4</td>
                                        <td>10</td>
                                        <td>9.5</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Lab5</td>
                                        <td>10</td>
                                        <td>9.5</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Lab6</td>
                                        <td>10</td>
                                        <td>9.5</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Lab7</td>
                                        <td>10</td>
                                        <td>9.5</td>
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
                <div className={cx('lecturers_btn_add')}>
                    <button type="">Chỉnh sửa</button>
                </div>
            </div >
        </div >
    );
}

export default ViewScoreboard;
