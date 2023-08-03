import React from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
import Notify from './Notify/';
import Logger from './Logger/';

const cx = classNames.bind(styles);
function Popper({ children, content = '' }) {
    // Check content
    let View = Notify;
    if (content.includes('logger')) View = Logger;
    return (
        <Tippy
            interactive
            render={(attrs) => (
                <div className="box" tabIndex="-1" {...attrs}>
                    <View />
                </div>
            )}
        >
            <div className={cx('popper-wrapper')}>{children}</div>
        </Tippy>
    );
}

export default Popper;
