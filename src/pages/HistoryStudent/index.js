import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpZA, faArrowDownZA } from '@fortawesome/free-solid-svg-icons';
// import { faArrowUpZA } from '@fortawesome/free-regular-svg-icons';

import styles from './HistoryStudent.module.scss';

const cx = classNames.bind(styles);

function HistoryStudent() {
    return (
        <div className={cx('content')}>
            <div className={cx('wrapper')}>
                <div className={cx('heading')}>
                    <h3>Danh sách các môn đã học</h3>
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
                                            <FontAwesomeIcon className={cx('tbl__arr--down')} icon={faArrowDownZA} />
                                        </span>
                                    </th>
                                    <th>
                                        <span className={cx('tbl__heading--item')}>
                                            Tên môn
                                            <FontAwesomeIcon className={cx('tbl__arr--up')} icon={faArrowUpZA} />
                                            <FontAwesomeIcon className={cx('tbl__arr--down')} icon={faArrowDownZA} />
                                        </span>
                                    </th>
                                    <th>
                                        <span className={cx('tbl__heading--item')}>
                                            Mã môn
                                            <FontAwesomeIcon className={cx('tbl__arr--up')} icon={faArrowUpZA} />
                                            <FontAwesomeIcon className={cx('tbl__arr--down')} icon={faArrowDownZA} />
                                        </span>
                                    </th>
                                    <th>
                                        <span className={cx('tbl__heading--item')}>
                                            Lớp
                                            <FontAwesomeIcon className={cx('tbl__arr--up')} icon={faArrowUpZA} />
                                            <FontAwesomeIcon className={cx('tbl__arr--down')} icon={faArrowDownZA} />
                                        </span>
                                    </th>
                                    <th>
                                        <span className={cx('tbl__heading--item')}>
                                            Số tín chỉ
                                            <FontAwesomeIcon className={cx('tbl__arr--up')} icon={faArrowUpZA} />
                                            <FontAwesomeIcon className={cx('tbl__arr--down')} icon={faArrowDownZA} />
                                        </span>
                                    </th>
                                    <th>
                                        <span className={cx('tbl__heading--item')}>
                                            Kỳ
                                            <FontAwesomeIcon className={cx('tbl__arr--up')} icon={faArrowUpZA} />
                                            <FontAwesomeIcon className={cx('tbl__arr--down')} icon={faArrowDownZA} />
                                        </span>
                                    </th>
                                    <th>
                                        <span className={cx('tbl__heading--item')}>
                                            Điểm trung bình
                                            <FontAwesomeIcon className={cx('tbl__arr--up')} icon={faArrowUpZA} />
                                            <FontAwesomeIcon className={cx('tbl__arr--down')} icon={faArrowDownZA} />
                                        </span>
                                    </th>
                                    <th>
                                        <span className={cx('tbl__heading--item')}>
                                            Trạng thái
                                            <FontAwesomeIcon className={cx('tbl__arr--up')} icon={faArrowUpZA} />
                                            <FontAwesomeIcon className={cx('tbl__arr--down')} icon={faArrowDownZA} />
                                        </span>
                                    </th>
                                    <th>
                                        <span className={cx('tbl__heading--item')}>
                                            Tổng số buổi học
                                            <FontAwesomeIcon className={cx('tbl__arr--up')} icon={faArrowUpZA} />
                                            <FontAwesomeIcon className={cx('tbl__arr--down')} icon={faArrowDownZA} />
                                        </span>
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className={cx('text-center')}>1</td>
                                    <td>Khởi sự doanh nghiệp</td>
                                    <td>SYB3011</td>
                                    <td>SYB3011.16</td>
                                    <td className={cx('text-center')}>3</td>
                                    <td>Summer 2022</td>
                                    <td className={cx('text-center')}>5.9</td>
                                    <td className={cx('success', 'text-center')}>Passed</td>
                                    <td className={cx('text-center')}>17</td>
                                </tr>
                                <tr>
                                    <td className={cx('text-center')}>1</td>
                                    <td>Khởi sự doanh nghiệp</td>
                                    <td>SYB3011</td>
                                    <td>SYB3011.16</td>
                                    <td className={cx('text-center')}>3</td>
                                    <td>Summer 2022</td>
                                    <td className={cx('text-center')}>5.9</td>
                                    <td className={cx('success', 'text-center')}>Passed</td>
                                    <td className={cx('text-center')}>17</td>
                                </tr>
                                <tr>
                                    <td className={cx('text-center')}>1</td>
                                    <td>Khởi sự doanh nghiệp</td>
                                    <td>SYB3011</td>
                                    <td>SYB3011.16</td>
                                    <td className={cx('text-center')}>3</td>
                                    <td>Summer 2022</td>
                                    <td className={cx('text-center')}>5.9</td>
                                    <td className={cx('success', 'text-center')}>Passed</td>
                                    <td className={cx('text-center')}>17</td>
                                </tr>
                                <tr>
                                    <td className={cx('text-center')}>1</td>
                                    <td>Khởi sự doanh nghiệp</td>
                                    <td>SYB3011</td>
                                    <td>SYB3011.16</td>
                                    <td className={cx('text-center')}>3</td>
                                    <td>Summer 2022</td>
                                    <td className={cx('text-center')}>5.9</td>
                                    <td className={cx('success', 'text-center')}>Passed</td>
                                    <td className={cx('text-center')}>17</td>
                                </tr>
                                <tr>
                                    <td className={cx('text-center')}>1</td>
                                    <td>Khởi sự doanh nghiệp</td>
                                    <td>SYB3011</td>
                                    <td>SYB3011.16</td>
                                    <td className={cx('text-center')}>3</td>
                                    <td>Summer 2022</td>
                                    <td className={cx('text-center')}>5.9</td>
                                    <td className={cx('success', 'text-center')}>Passed</td>
                                    <td className={cx('text-center')}>17</td>
                                </tr>
                                <tr>
                                    <td className={cx('text-center')}>1</td>
                                    <td>Khởi sự doanh nghiệp</td>
                                    <td>SYB3011</td>
                                    <td>SYB3011.16</td>
                                    <td className={cx('text-center')}>3</td>
                                    <td>Summer 2022</td>
                                    <td className={cx('text-center')}>5.9</td>
                                    <td className={cx('success', 'text-center')}>Passed</td>
                                    <td className={cx('text-center')}>17</td>
                                </tr>
                                <tr>
                                    <td className={cx('text-center')}>1</td>
                                    <td>Khởi sự doanh nghiệp</td>
                                    <td>SYB3011</td>
                                    <td>SYB3011.16</td>
                                    <td className={cx('text-center')}>3</td>
                                    <td>Summer 2022</td>
                                    <td className={cx('text-center')}>5.9</td>
                                    <td className={cx('success', 'text-center')}>Passed</td>
                                    <td className={cx('text-center')}>17</td>
                                </tr>
                                <tr>
                                    <td className={cx('text-center')}>1</td>
                                    <td>Khởi sự doanh nghiệp</td>
                                    <td>SYB3011</td>
                                    <td>SYB3011.16</td>
                                    <td className={cx('text-center')}>3</td>
                                    <td>Summer 2022</td>
                                    <td className={cx('text-center')}>5.9</td>
                                    <td className={cx('success', 'text-center')}>Passed</td>
                                    <td className={cx('text-center')}>17</td>
                                </tr>
                                <tr>
                                    <td className={cx('text-center')}>1</td>
                                    <td>Khởi sự doanh nghiệp</td>
                                    <td>SYB3011</td>
                                    <td>SYB3011.16</td>
                                    <td className={cx('text-center')}>3</td>
                                    <td>Summer 2022</td>
                                    <td className={cx('text-center')}>5.9</td>
                                    <td className={cx('success', 'text-center')}>Passed</td>
                                    <td className={cx('text-center')}>17</td>
                                </tr>
                                <tr>
                                    <td className={cx('text-center')}>1</td>
                                    <td>Khởi sự doanh nghiệp</td>
                                    <td>SYB3011</td>
                                    <td>SYB3011.16</td>
                                    <td className={cx('text-center')}>3</td>
                                    <td>Summer 2022</td>
                                    <td className={cx('text-center')}>5.9</td>
                                    <td className={cx('success', 'text-center')}>Passed</td>
                                    <td className={cx('text-center')}>17</td>
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
                                    <li className={cx('num__btn', 'tbl__ctrl--btn')}>3</li>
                                    <li className={cx('num__btn', 'tbl__ctrl--btn')}>4</li>
                                    <li className={cx('ctrl__btn', 'tbl__ctrl--btn')}>Tiếp</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HistoryStudent;
