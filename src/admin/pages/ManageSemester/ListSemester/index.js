import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownZA, faArrowUpZA, faMagnifyingGlass, faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import styles from './ListSemester.module.scss';

const cx = classNames.bind(styles);
function ListSemester()
{
    return (
        <div className={cx('content')}>
            <h1 className={cx('center')}>Danh sách học kỳ</h1>
            <div className={cx('wrapper')}>
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
                                            Tên học kỳ
                                            <FontAwesomeIcon className={cx('tbl__arr--up')} icon={faArrowUpZA} />
                                            <FontAwesomeIcon
                                                className={cx('tbl__arr--down')}
                                                icon={faArrowDownZA}
                                            />
                                        </span>
                                    </th>

                                    <th>
                                        <span className={cx('tbl__heading--item')}>
                                            Tên Khóa học
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

                                        </span>

                                    </th>

                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className={cx('text-center')}>1</td>
                                    <td>Fall 2022</td>
                                    <td>16301</td>
                                    <td>
                                        <FontAwesomeIcon className={cx('tbl__arr--dows', 'p-r')} icon={faTrashCan} />
                                        <FontAwesomeIcon className={cx('tbl__arr--ups', 'p-l')} icon={faPenToSquare} />

                                    </td>

                                </tr>
                                <tr>
                                    <td className={cx('text-center')}>2</td>
                                    <td>Summer 2022</td>
                                    <td>16301</td>
                                    <td>
                                        <FontAwesomeIcon className={cx('tbl__arr--dows', 'p-r')} icon={faTrashCan} />
                                        <FontAwesomeIcon className={cx('tbl__arr--ups', 'p-l')} icon={faPenToSquare} />
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ListSemester;