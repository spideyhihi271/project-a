import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import styles from './Logger.module.scss';

const cx = classNames.bind(styles);
function Logger() {
    return (
        <div className={cx('logger-wrapper')}>
            <ul className={cx('slot-list')}>
                <li className={cx('slot-item')}>
                    <Button
                        text
                        leftImage={
                            'https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png'
                        }
                    >
                        Nguyen
                    </Button>
                </li>
                <li className={cx('slot-item')}>
                    <Button
                        text
                        leftImage={
                            'https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png'
                        }
                    >
                        Nguyen
                    </Button>
                </li>
                <li className={cx('slot-item')}>
                    <Button
                        text
                        leftImage={
                            'https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png'
                        }
                    >
                        Nguyen
                    </Button>
                </li>
            </ul>
            <nav className={cx('nav-list')}>
                <li className={cx('nav-item')}>
                    <Button text leftIcon={<i className="fa-regular fa-pen"></i>}>
                        Gói dịch vụ của tôi
                    </Button>
                </li>
                <li className={cx('nav-item')}>
                    <Button text leftIcon={<i className="fa-regular fa-pen"></i>}>
                        Gói dịch vụ của tôi
                    </Button>
                </li>
                <li className={cx('nav-item')}>
                    <Button text leftIcon={<i className="fa-regular fa-pen"></i>}>
                        Gói dịch vụ của tôi
                    </Button>
                </li>
            </nav>
        </div>
    );
}

export default Logger;
