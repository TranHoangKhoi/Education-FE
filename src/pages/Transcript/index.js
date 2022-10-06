import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpZA, faArrowDownZA } from '@fortawesome/free-solid-svg-icons';

import styles from './Transcript.module.scss';
const cx = classNames.bind(styles);

function Transcript() {
    return (
        <div className={cx('content')}>
            <div className={cx('wrapper')}>
                <div className={cx('heading')}>
                    <h3>Chuyên nghành: Thiết kế Website (CNTT)</h3>
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
                                            Kỳ thứ
                                            <FontAwesomeIcon className={cx('tbl__arr--up')} icon={faArrowUpZA} />
                                            <FontAwesomeIcon className={cx('tbl__arr--down')} icon={faArrowDownZA} />
                                        </span>
                                    </th>
                                    <th>
                                        <span className={cx('tbl__heading--item')}>
                                            Học kỳ
                                            <FontAwesomeIcon className={cx('tbl__arr--up')} icon={faArrowUpZA} />
                                            <FontAwesomeIcon className={cx('tbl__arr--down')} icon={faArrowDownZA} />
                                        </span>
                                    </th>
                                    <th>
                                        <span className={cx('tbl__heading--item')}>
                                            Môn
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
                                            Mã chuyển đổi
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
                                            Điểm
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
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className={cx('text-center')}>1</td>
                                    <td>1</td>
                                    <td>Fall 2020</td>
                                    <td>Kỹ năng học tập </td>
                                    <td className={cx('text-center')}>SKI1014</td>
                                    <td>SKI101</td>
                                    <td className={cx('text-center')}>3</td>
                                    <td className={cx('text-center')}>8.7</td>
                                    <td className={cx('success', 'text-center')}>Passed</td>
                                </tr>
                                <tr>
                                    <td className={cx('text-center')}>1</td>
                                    <td>1</td>
                                    <td>Fall 2020</td>
                                    <td>Kỹ năng học tập </td>
                                    <td className={cx('text-center')}>SKI1014</td>
                                    <td>SKI101</td>
                                    <td className={cx('text-center')}>3</td>
                                    <td className={cx('text-center')}>8.7</td>
                                    <td className={cx('success', 'text-center')}>Passed</td>
                                </tr>
                                <tr>
                                    <td className={cx('text-center')}>1</td>
                                    <td>1</td>
                                    <td>Fall 2020</td>
                                    <td>Kỹ năng học tập </td>
                                    <td className={cx('text-center')}>SKI1014</td>
                                    <td>SKI101</td>
                                    <td className={cx('text-center')}>3</td>
                                    <td className={cx('text-center')}>8.7</td>
                                    <td className={cx('success', 'text-center')}>Passed</td>
                                </tr>
                                <tr>
                                    <td className={cx('text-center')}>1</td>
                                    <td>1</td>
                                    <td>Fall 2020</td>
                                    <td>Kỹ năng học tập </td>
                                    <td className={cx('text-center')}>SKI1014</td>
                                    <td>SKI101</td>
                                    <td className={cx('text-center')}>3</td>
                                    <td className={cx('text-center')}>8.7</td>
                                    <td className={cx('success', 'text-center')}>Passed</td>
                                </tr>
                                <tr>
                                    <td className={cx('text-center')}>1</td>
                                    <td>1</td>
                                    <td>Fall 2020</td>
                                    <td>Kỹ năng học tập </td>
                                    <td className={cx('text-center')}>SKI1014</td>
                                    <td>SKI101</td>
                                    <td className={cx('text-center')}>3</td>
                                    <td className={cx('text-center')}>8.7</td>
                                    <td className={cx('success', 'text-center')}>Passed</td>
                                </tr>
                                <tr>
                                    <td className={cx('text-center')}>1</td>
                                    <td>1</td>
                                    <td>Fall 2020</td>
                                    <td>Kỹ năng học tập </td>
                                    <td className={cx('text-center')}>SKI1014</td>
                                    <td>SKI101</td>
                                    <td className={cx('text-center')}>3</td>
                                    <td className={cx('text-center')}>8.7</td>
                                    <td className={cx('success', 'text-center')}>Passed</td>
                                </tr>
                                <tr>
                                    <td className={cx('text-center')}>1</td>
                                    <td>1</td>
                                    <td>Fall 2020</td>
                                    <td>Kỹ năng học tập </td>
                                    <td className={cx('text-center')}>SKI1014</td>
                                    <td>SKI101</td>
                                    <td className={cx('text-center')}>3</td>
                                    <td className={cx('text-center')}>8.7</td>
                                    <td className={cx('success', 'text-center')}>Passed</td>
                                </tr>
                                <tr>
                                    <td className={cx('text-center')}>1</td>
                                    <td>1</td>
                                    <td>Fall 2020</td>
                                    <td>Kỹ năng học tập </td>
                                    <td className={cx('text-center')}>SKI1014</td>
                                    <td>SKI101</td>
                                    <td className={cx('text-center')}>3</td>
                                    <td className={cx('text-center')}>8.7</td>
                                    <td className={cx('success', 'text-center')}>Passed</td>
                                </tr>
                                <tr>
                                    <td className={cx('text-center')}>1</td>
                                    <td>1</td>
                                    <td>Fall 2020</td>
                                    <td>Kỹ năng học tập </td>
                                    <td className={cx('text-center')}>SKI1014</td>
                                    <td>SKI101</td>
                                    <td className={cx('text-center')}>3</td>
                                    <td className={cx('text-center')}>8.7</td>
                                    <td className={cx('success', 'text-center')}>Passed</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className={cx('table__control')}>
                        <div className={cx('table__control--left')}>
                            <span>Đang xem 1 đến 10 trong tổng số 10 mục</span>
                        </div>
                        {/* <div className={cx('table__control--right')}>
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
                        </div> */}
                    </div>

                    <div className={cx('table__static')}>
                        <div className={cx('table__static--header')}>
                            <h4>Điểm trung bình: 7.7</h4>
                            <h4>Tín chỉ: 92/97</h4>
                            <h4>Miễn giảm: 0</h4>
                        </div>

                        <div className={cx('table__static--tbl')}>
                            <div className={cx('tbl__heading')}>
                                <h4>Thống kê</h4>
                            </div>
                            <div className={cx('tbl')}>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Tổng môn chưa học</th>
                                            <th>Tổng môn đạt </th>
                                            <th>Tổng môn học lại</th>
                                            <th>Tổng môn đang học</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>31</td>
                                            <td>0</td>
                                            <td>1</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Transcript;
