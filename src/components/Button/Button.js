import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Button({
    children,
    href,
    to,
    primary = false,
    secondary = false,
    rounded = false,
    text = false,
    freesize = false,
    onlyIcon = false,
    leftIcon,
    rightIcon,
    leftImage,
    rightImage,
    onClick,
    ...passprops
}) {
    let Comp = 'button';
    let props = { onClick, passprops };
    // Type Button (a, Link, button)
    if (href) {
        props.href = href;
        props.target = 'blank';
        Comp = 'a';
    } else if (to) {
        props.to = to;
        Comp = Link;
    }
    // Style Button
    let classes = cx('button-wrapper', {
        'style-primary': primary,
        'style-secondary': secondary,
        'style-rounded': rounded,
        'style-text': text,
        'style-freesize': freesize,
        'style-onlyicon': onlyIcon,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon-left')}>{leftIcon}</span>}
            {leftImage && (
                <img className={cx('image-left')} src={leftImage} alt="" />
            )}
            <span className={cx('button-content')}>{children}</span>
            {rightImage && (
                <img className={cx('image-right')} src={rightImage} alt="" />
            )}
            {rightIcon && <span className={cx('icon-right')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
