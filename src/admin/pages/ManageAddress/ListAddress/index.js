import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownZA, faArrowUpZA, faMagnifyingGlass, faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import styles from './ListAddress.module.scss';

const cx = classNames.bind(styles);
function ListAddress()
{
    return (
        <div className={cx('content')}>
            <h1 className={cx('center')}>Danh sách địa chỉ</h1>
            <div className={cx('wrapper')}>
                <div className={cx('table__wrapper')}>
                    <div className={cx('table__content')}>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <span className={cx('tbl__heading--item')}>
                                            #

                                        </span>
                                    </th>
                                    <th>
                                        <span className={cx('tbl__heading--item')}>
                                            Tên cơ sở
                                            <FontAwesomeIcon className={cx('tbl__arr--up')} icon={faArrowUpZA} />
                                            <FontAwesomeIcon
                                                className={cx('tbl__arr--down')}
                                                icon={faArrowDownZA}
                                            />
                                        </span>
                                    </th>
                                    <th>
                                        <span className={cx('tbl__heading--item')}>
                                            Địa chỉ
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
                                            Thao tác
                                        </span>
                                    </th>

                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className={cx('text-center')}>1</td>
                                    <td>Cần thơ</td>
                                    <td>Số 288, Nguyễn Văn Linh, phường An Khánh, quận Ninh Kiều, Tp. Cần Thơ.</td>
                                    <td>(0292) 7300 468</td>
                                    <td>
                                        <FontAwesomeIcon className={cx('tbl__arr--dows', 'p-r')} icon={faTrashCan} />
                                        <FontAwesomeIcon className={cx('tbl__arr--ups', 'p-l')} icon={faPenToSquare} />

                                    </td>

                                </tr>
                                <tr>
                                    <td className={cx('text-center')}>2</td>
                                    <td>Hải phòng</td>
                                    <td>271 Lê Thánh Tông, phường Máy Chai, quận Ngô Quyền, TP Hải Phòng.</td>
                                    <td>0905015900</td>
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


export default ListAddress;