import React from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Button(props) {
    const {
        to,
        href,
        primary = false,
        outline = false,
        text = false,
        rounded = false,
        disabled = false,
        small = false,
        large = false,
        children,
        className,
        leftIcon,
        rightIcon,
        onClick,
        ...passProps
    } = props;
    const compProps = {
        onClick,
        ...passProps,
    };
    // Check type button
    let Comp = 'button';
    if (href) {
        compProps.href = href;
        Comp = 'a';
    } else if (to) {
        compProps.to = to;
        Comp = Link;
    }
    // Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    //Check class
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        primary,
        outline,
        text,
        rounded,
    });

    return (
        <Comp className={classes} {...compProps}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            {children}
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
