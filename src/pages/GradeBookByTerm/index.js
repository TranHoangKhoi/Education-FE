import classNames from 'classnames/bind';
import styles from './GradeBookByTerm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpZA, faArrowDownZA } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function GradeBookByTerm() {
    return (
        <div className={cx('content')}>
            <div className={cx('wrapper')}>
                <div className={cx('wrapper-semester')}>
                    <form className={cx('form-group')}>
                        <label for="">Học kỳ</label>

                        <select name="" id="">
                            <option value="">Fall 2022</option>
                            <option value="">Summer 2022 </option>
                            <option value="">Spring 2022</option>
                        </select>
                        <span>Lựa chọn học kỳ để hiện thị chi tiết điểm theo kỳ</span>
                    </form>
                </div>

                <div className={cx('wrapper__name-table')}>
                    <div className={cx('wrapper__name')}>
                        <p>1: Xây dựng trang Web 2 (WEB2033) - WE16301</p>
                    </div>

                    <div className={cx('wrapper__btn')}>
                        <button>Print</button>
                        <button>Copy</button>
                        <button>Excel</button>
                        <button>CSV</button>
                        <button>PDF</button>
                    </div>

                    <div className={cx('table__wrapper')}>
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
            </div>
        </div>
    );
}

export default GradeBookByTerm;
