import classNames from 'classnames/bind';
import React from 'react';
import styles from './PaymentBill.module.scss';
const cx = classNames.bind(styles);
function PaymentBill() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('bill')}>
                <p className={cx('bill-title')}>Chi tiết đơn hàng</p>
                <div className={cx('bill-package')}>
                    <div className={cx('bill-package-name')}>
                        <p>Gói siêu tiết kiệm </p>
                        <p>
                            Hạn sử dụng: <span>08.28 - 29.02</span>
                        </p>
                    </div>
                    <p className={cx('bill-package-price')}>98.000đ</p>
                </div>
                <div className={cx('bill-info')}>
                    <p className={cx('bill-info-title')}>Nội dung gói:</p>
                    <div className={cx('bill-info-items')}>
                        <p>Không quảng cáo</p>
                        <p>Xem phim chất lượng FullHD</p>
                        <p>Mở khóa hầu hết nội dung</p>
                        <p>Có chế độ xem ngoại tuyến</p>
                        <p>Hỗ trợ nhiều ngôn ngữ phụ đề</p>
                        <p>Truy cập đồng thời trên nhiều thiết bị</p>
                        <p>Cập nhật liên tục nội dung mới</p>
                        <p>Hỗ trợ khách hàng 24/7</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentBill;
