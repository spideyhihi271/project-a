import React from 'react';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);
function Popper({ children, className, show }) {
    return (
        <Tippy
            interactive
            render={(attrs) => (
                <div className="box" tabIndex="-1" {...attrs}>
                    {show}
                </div>
            )}
        >
            <div className={cx('wrapper', { className })}>{children}</div>
        </Tippy>
    );
}

export default Popper;
