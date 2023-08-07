import React from 'react';
import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function Payment() {
    return (
        <form className={cx('form-wrapper')}>
            <ul className={cx('input-gr-list')}>
                <li className={cx('input-gr-item')}>
                    <Input value={''} />
                    <Input value={''} />
                </li>
                <li className={cx('input-gr-item')}>
                    <Input value={''} />
                </li>
                <li className={cx('input-gr-item')}>
                    <Input value={''} />
                </li>
                <li className={cx('input-gr-item')}>
                    <Button text larger>
                        Trở lại
                    </Button>
                    <Button secondary larger>
                        Xem kho phim và thanh toán sau
                    </Button>
                </li>
            </ul>
        </form>
    );
}

export default Payment;
