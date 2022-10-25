// import styles from './updateclass.module.scss'
// import classNames from "classNames/bind";
// const cx = classNames.bind(styles)
import classNames from "classnames/bind";
import styles from './updateclass.module.scss'


const  cx = classNames.bind(styles)
function UpdateClass() {
    return ( <div className={cx('content')}>
    <h1 className={cx('center')}>Cập nhật lớp học</h1>
    <div className={cx('wrapper')}>
        <div className={cx('row', 'no-gutters')}>
            <form className={cx('form-group')}>
                <div className={cx('wrapper-item')}>
                    <label>Tên lớp học</label>
                    <input placeholder="VD: WD16301" spellcheck="false" />
                </div>
                <div className={cx('wrapper-item')}>
                            <label>Các môn chuyên ngành</label>
                            <select>
                                <option value="">Công nghệ thông tin </option>
                                <option value="">Quản trị nhà hàng khách sạn</option>
                                <option value="">Cơ khí</option>
                            </select>
                        </div>
                <div className={cx('wrapper-item')}>
                   <label>Học kì</label>
                   <select>
                       <option value="">Sumer </option>
                       <option value="">Sping</option>
                    
                   </select>
                        </div>
                <div className={cx('wrapper-item')}>
                    <button >Thêm</button></div>
            </form>
        </div>
    </div >

</div >
    //     <div className={cx('content')}>
    //     <h1 className={cx('center')}>Cập Nhật Môn Học</h1>
    //     <div className={cx('wrapper')}>
    //         <div className={cx('row', 'no-gutters')}>
    //             <form className={cx('form-group')}>
    //                 <div className={cx('wrapper-item')}>
    //                     <label>Tên Môn học</label>
    //                     <input placeholder="VD: Lập trình C" spellcheck="false" />
    //                 </div>
    //                 <div className={cx('wrapper-item')}>
    //                     <button >Cập nhật</button>
    //                 </div>
    //             </form>
    //         </div>
    //     </div >

    // </div >
     );
}

export default UpdateClass;