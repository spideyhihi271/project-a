import React from 'react';
import classNames from 'classnames/bind';

import styles from './PaymentForm.module.scss';
import Input from '../Input';

const cx = classNames.bind(styles);
function PaymentForm() {
    return (
        <div className={cx('wrapper')}>
            <form action="" className={cx('payment-form')}>
                <p className={cx('payment-form-title')}>Thông tin thanh toán</p>
                <p className={cx('payment-form-description')}>
                    Bước cuối cùng để bắt đầu trải nghiệm tuyệt vời tại{' '}
                    <span>Beecine</span>
                </p>
                <Input
                    lable={'Số thẻ'}
                    description={'Nhập 16 chữ số trên thẻ của bạn'}
                    flex
                />
                <Input
                    lable={'Số CVV'}
                    description={'Nhập 3 - 4 chữ số trên thẻ của bạn'}
                />
                <Input
                    lable={'Ngày hết hạn'}
                    description={'Nhập 16 chữ số trên thẻ của bạn'}
                />
                <Input
                    lable={'Mật khẩu'}
                    description={'Nhập mật khẩu động của bạn'}
                />
                <button className={cx('payment-form-btn')}>Thanh toán</button>
            </form>
        </div>
    );
}

export default PaymentForm;
