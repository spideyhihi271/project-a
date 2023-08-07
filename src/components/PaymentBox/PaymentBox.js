import React from 'react';
import classNames from 'classnames/bind';
import styles from './PaymentBox.module.scss';
import Form from '../Form';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function PaymentBox() {
    return (
        <div className={cx('payment-wrapper')}>
            <header className={cx('payment-header')}>
                <h2 className={cx('payment-title')}>Thanh toán</h2>
                <p className={cx('payment-description')}>
                    Thanh toán dễ dàng và hủy bất cứ lúc nào
                </p>
            </header>
            <main className={cx('payment-main')}>
                <div className={cx('payment-form')}>
                    <Form isChildren formName={'payment'} />
                </div>
                <div className={cx('payment-bill')}>
                    <div className={cx('bill-wrapper')}>
                        <div className={cx('bill-header')}>
                            <p className={cx('bill-title')}>
                                Thông tin gói cước
                            </p>
                            <Link to={''} className={cx('bill-return')}>
                                Thay đổi gói cước
                            </Link>
                        </div>
                        <div className={cx('bill-info')}>
                            <ul className={cx('info-list')}>
                                <li className={cx('info-item')}>
                                    <p className={cx('info-title')}>
                                        Tài khoản
                                    </p>
                                    <p className={cx('info-value')}>
                                        nguyenlt2713@gmail.com
                                    </p>
                                </li>
                                <li className={cx('info-item')}>
                                    <p className={cx('info-title')}>Tên gói</p>
                                    <p className={cx('info-value')}>
                                        Gói Siêu Việt
                                    </p>
                                </li>
                                <li className={cx('info-item')}>
                                    <p className={cx('info-title')}>Thời hạn</p>
                                    <p className={cx('info-value')}>12 tháng</p>
                                </li>
                                <li className={cx('info-item')}>
                                    <p className={cx('info-title')}>
                                        Ngày hiệu lực
                                    </p>
                                    <p className={cx('info-value')}>
                                        07/08/2023
                                    </p>
                                </li>
                                <li className={cx('info-item')}>
                                    <p className={cx('info-title')}>
                                        Tự động gia hạn
                                    </p>
                                    <p className={cx('info-value')}>
                                        07/08/2024
                                    </p>
                                </li>
                                <li className={cx('info-item')}>
                                    <p className={cx('info-title')}>Đơn giá</p>
                                    <p className={cx('info-value')}>799.000đ</p>
                                </li>
                                <li className={cx('info-item')}>
                                    <p className={cx('info-title')}>
                                        Khuyến mãi
                                    </p>
                                    <p className={cx('info-value')}>000đ</p>
                                </li>
                                <li className={cx('info-item')}>
                                    <p className={cx('info-title')}>
                                        Tổng cộng
                                    </p>
                                    <p className={cx('info-value')}>799.000đ</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default PaymentBox;
