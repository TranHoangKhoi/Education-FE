import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownZA, faArrowUpZA, faMagnifyingGlass, faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import classNames from "classnames/bind";
import styles from './listclass.module.scss'
const cx = classNames.bind(styles)
function ListClass()



{
    return (
        <div className={cx('content')}>
            <h1 className={cx('center')}>Danh sách lớp học</h1>
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
                                            Tên lớp học
                                            <FontAwesomeIcon className={cx('tbl__arr--up')} icon={faArrowUpZA} />
                                            <FontAwesomeIcon
                                                className={cx('tbl__arr--down')}
                                                icon={faArrowDownZA}
                                            />
                                        </span>
                                    </th>
                                    <th>
                                        <span className={cx('tbl__heading--item')}>
                                            Chuyên ngành
                                            <FontAwesomeIcon className={cx('tbl__arr--up')} icon={faArrowUpZA} />
                                            <FontAwesomeIcon
                                                className={cx('tbl__arr--down')}
                                                icon={faArrowDownZA}
                                            />
                                        </span>
                                    </th>
                                    <th>
                                        <span className={cx('tbl__heading--item')}>
                                            Học kì
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
                                    <td>16301</td>
                                    <td>Công nghệ thông tin</td>
                                    <td>Sping</td>

                                    <td>
                                        <FontAwesomeIcon className={cx('tbl__arr--dows', 'p-r')} icon={faTrashCan} />
                                        <FontAwesomeIcon className={cx('tbl__arr--ups', 'p-l')} icon={faPenToSquare} />

                                    </td>

                                </tr>
                                <tr>
                                    <td className={cx('text-center')}>2</td>
                                    <td>17304</td>
                                    <td>Công nghệ thông tin</td>
                                    <td>Sping</td>
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

export default ListClass;