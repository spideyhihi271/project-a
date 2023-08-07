import React from 'react';
import classNames from 'classnames/bind';
import styles from './EditContainer.module.scss';

const cx = classNames.bind(styles);
function EditContainer() {
    return (
        <div className={cx('edit-wrapper')}>
            <header className={cx('edit-header')}>
                <p className={cx('edit-title')}>Tài khoản</p>
            </header>
            <ul className={cx('edit-list')}>
                <div className={cx('edit-item')}>
                    <div className={cx('item-side')}>
                        <p className={cx('item-title')}>
                            TƯ CÁCH THÀNH VIÊN VÀ TÍNH PHÍ
                        </p>
                        <button className={cx('item-btn')}>
                            Hủy tư cách thành viên
                        </button>
                    </div>
                    <div className={cx('item-main')}>
                        <ul className={cx('info-list')}>
                            <li className={cx('info-item')}>
                                <p
                                    className={cx('info-title', {
                                        'info-special': true,
                                    })}
                                >
                                    Ducthanh14082002@gmail.com
                                </p>
                                <button className={cx('info-actions')}>
                                    Thay đổi thông tin email
                                </button>
                            </li>
                            <li className={cx('info-item')}>
                                <p className={cx('info-title')}>
                                    Mật khẩu: (*******)
                                </p>
                                <button className={cx('info-actions')}>
                                    Thay đổi mật khẩu
                                </button>
                            </li>
                            <li className={cx('info-item')}>
                                <p className={cx('info-title')}>
                                    Số điện thoại: **********89
                                </p>
                                <button className={cx('info-actions')}>
                                    Thay đổi số điện thoại
                                </button>
                            </li>
                            <li className={cx('info-item')}>
                                <p className={cx('info-title')}>
                                    Visa: •••• •••• •••• 6416
                                </p>
                                <button className={cx('info-actions')}>
                                    Quản lý thông tin thanh toán
                                </button>
                            </li>
                            <li className={cx('info-item')}>
                                <p className={cx('info-title')}>
                                    Ngày tính phí tiếp theo của bạn là Ngày 27
                                    tháng 8 năm 2023.
                                </p>
                                <button className={cx('info-actions')}>
                                    Thêm phương thức thanh toán dự phòng
                                </button>
                            </li>
                            <li className={cx('info-item')}>
                                <p className={cx('info-title')}></p>
                                <button className={cx('info-actions')}>
                                    Thông tin thanh toán
                                </button>
                            </li>
                            <li className={cx('info-item')}>
                                <p className={cx('info-title')}></p>
                                <button className={cx('info-actions')}>
                                    Thay đổi ngày thanh toán
                                </button>
                            </li>
                            <li className={cx('info-item')}>
                                <p className={cx('info-title')}></p>
                                <button className={cx('info-actions')}>
                                    Đổi thẻ quà tặng hoặc mã khuyến mại
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('edit-item')}>
                    <div className={cx('item-side')}>
                        <p className={cx('item-title')}>
                            THÔNG TIN GÓI DỊCH VỤ
                        </p>
                    </div>
                    <div className={cx('item-main')}>
                        <ul className={cx('info-list')}>
                            <li className={cx('info-item')}>
                                <p className={cx('info-title')}>Cao cấp</p>
                                <button className={cx('info-actions')}>
                                    Thay đổi gói dịch vụ
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('edit-item')}>
                    <div className={cx('item-side')}>
                        <p className={cx('item-title')}>
                            BẢO MẬT & QUYỀN RIÊNG TƯ
                        </p>
                    </div>
                    <div className={cx('item-main')}>
                        <ul className={cx('info-list')}>
                            <li className={cx('info-item')}>
                                <p className={cx('info-title')}>
                                    Kiểm soát quyền truy cập vào tài khoản này,
                                    xem các thiết bị hoạt động gần đây nhất và
                                    hơn thế nữa.
                                </p>
                                <button className={cx('info-actions')}>
                                    Quản lý quyền truy cập và thiết bị
                                </button>
                            </li>
                            <li className={cx('info-item')}>
                                <p className={cx('info-title')}></p>
                                <button className={cx('info-actions')}>
                                    Đăng xuất khỏi tất cả các thiết bị
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('edit-item')}>
                    <div className={cx('item-side')}>
                        <p className={cx('item-title')}>
                            HỒ SƠ TÍNH NĂNG VÀ CHA MẸ
                        </p>
                    </div>
                    <div className={cx('item-main')}></div>
                </div>
            </ul>
        </div>
    );
}

export default EditContainer;
