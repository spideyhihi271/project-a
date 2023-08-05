import classNames from 'classnames/bind';
import styles from './Pack.module.scss';
const cx = classNames.bind(styles);
function PackList() {
    return (
        <ul className={cx('pack-list')}>
            <li className={cx('pack-info')}>
                <header className={cx('info-header')}></header>
                <main className={cx('info-main')}>
                    <ul className={cx('features-list')}>
                        <li className={cx('features-item')}>
                            Không giới hạn nội dung
                        </li>
                        <li className={cx('features-item')}>Không quảng cáo</li>
                        <li className={cx('features-item')}>
                            Số lượng người xem
                        </li>
                        <li className={cx('features-item')}>
                            Chất lượng hình ảnh
                        </li>
                        <li className={cx('features-item')}>
                            Tích điểm đổi gói
                        </li>
                        <li className={cx('features-item')}>
                            Chính sách hỗ trợ
                        </li>
                    </ul>
                </main>
            </li>
            <li className={cx('pack-item')}>
                <header className={cx('item-header')}>
                    <h3 className={cx('item-name')}>Gói Miễn phí</h3>
                    <p className={cx('item-price')}>
                        từ <span>0 đ</span> /vĩnh viễn
                    </p>
                    <button className={cx('item-btn')}>Đăng kí</button>
                </header>
                <main className={cx('item-main')}>
                    <ul className={cx('item-features-list')}>
                        <li className={cx('item-features-item')}></li>
                        <li className={cx('item-features-item')}></li>
                        <li className={cx('item-features-item')}>1</li>
                        <li className={cx('item-features-item')}>480p</li>
                        <li className={cx('item-features-item')}></li>
                        <li className={cx('item-features-item')}>
                            Hỗ trợ cộng đồng
                        </li>
                    </ul>
                </main>
            </li>
            <li className={cx('pack-item')}>
                <header className={cx('item-header')}>
                    <h3 className={cx('item-name')}>Gói Cơ bản</h3>
                    <p className={cx('item-price')}>
                        từ <span>50.000 đ</span>/tháng
                    </p>
                    <button className={cx('item-btn')}>Bắt đầu</button>
                </header>
                <main className={cx('item-main')}>
                    <ul className={cx('item-features-list')}>
                        <li className={cx('item-features-item')}>
                            <i className="fa-regular fa-check"></i>
                        </li>
                        <li className={cx('item-features-item')}>
                            <i className="fa-regular fa-check"></i>
                        </li>
                        <li className={cx('item-features-item')}>Lên đến 3</li>
                        <li className={cx('item-features-item')}>HD+</li>
                        <li className={cx('item-features-item')}>
                            <i className="fa-regular fa-check"></i>
                        </li>
                        <li className={cx('item-features-item')}>
                            Hỗ trợ 24/7
                        </li>
                    </ul>
                </main>
            </li>
            <li className={cx('pack-item')}>
                <header className={cx('item-header')}>
                    <h3 className={cx('item-name')}>Gói Tiêu Chuẩn</h3>
                    <p className={cx('item-price')}>
                        từ <span>100.000 đ</span>/6 tháng
                    </p>
                    <button className={cx('item-btn')}>Bắt đầu</button>
                </header>
                <main className={cx('item-main')}>
                    <ul className={cx('item-features-list')}>
                        <li className={cx('item-features-item')}>
                            <i className="fa-regular fa-check"></i>
                        </li>
                        <li className={cx('item-features-item')}>
                            <i className="fa-regular fa-check"></i>
                        </li>
                        <li className={cx('item-features-item')}>Lên đến 5</li>
                        <li className={cx('item-features-item')}>Full HD+</li>
                        <li className={cx('item-features-item')}>
                            <i className="fa-regular fa-check"></i>
                        </li>
                        <li className={cx('item-features-item')}>
                            Hỗ trợ 24/7
                        </li>
                    </ul>
                </main>
            </li>
            <li className={cx('pack-item')}>
                <header className={cx('item-header')}>
                    <h3 className={cx('item-name')}>Gói Cao Cấp</h3>
                    <p className={cx('item-price')}>
                        từ <span>150.000 đ</span>/năm
                    </p>
                    <button className={cx('item-btn')}>Bắt đầu</button>
                </header>
                <main className={cx('item-main')}>
                    <ul className={cx('item-features-list')}>
                        <li className={cx('item-features-item')}>
                            <i className="fa-regular fa-check"></i>
                        </li>
                        <li className={cx('item-features-item')}>
                            <i className="fa-regular fa-check"></i>
                        </li>
                        <li className={cx('item-features-item')}>Lên đến 5</li>
                        <li className={cx('item-features-item')}>Full HD+</li>
                        <li className={cx('item-features-item')}>
                            <i className="fa-regular fa-check"></i>
                        </li>
                        <li className={cx('item-features-item')}>
                            Hỗ trợ 24/7
                        </li>
                    </ul>
                </main>
            </li>
        </ul>
    );
}

export default PackList;
