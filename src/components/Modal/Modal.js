import React from 'react';
import classNames from 'classnames/bind';

// Component
import DetailMovie from './components/DetailMovie';

import styles from './Modal.module.scss';
import Button from '../Button';
const cx = classNames.bind(styles);
function Modal() {
    let Content = DetailMovie;
    return (
        <div className={cx('modal-wrapper')}>
            <div className={cx('modal-layer')}></div>
            <div className={cx('modal-container')}>
                <div className={cx('modal-content')}>
                    <div className={cx('modal-close')}>
                        <Button onlyIcon>
                            <i className="fa-solid fa-xmark"></i>
                        </Button>
                    </div>
                    <Content />
                </div>
            </div>
        </div>
    );
}

export default Modal;
