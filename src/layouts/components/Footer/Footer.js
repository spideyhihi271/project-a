import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('footer-wrapper')}>
            <footer className={cx('footer')}>
                <div className={cx('icon-socialNetwork')}>
                    <ul className={cx('icon')}>
                        <Link to={'/'}>
                            <li>
                                <i class="fa-brands fa-facebook-f"></i>
                            </li>
                        </Link>
                        <Link to={'/'}>
                            <li>
                                <i class="fa-brands fa-instagram"></i>
                            </li>
                        </Link>
                        <Link to={'/'}>
                            <li>
                                <i class="fa-brands fa-twitter"></i>
                            </li>
                        </Link>
                        <Link to={'/'}>
                            <li>
                                <i class="fa-brands fa-youtube"></i>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className={cx('container-links')}>
                    <div className={cx('content-links')}>
                        <ul>
                            <Link to={'/'}>
                                <li>Hỗ trợ âm thanh</li>
                            </Link>
                            <Link to={'/'}>
                                <li>Quan hệ với nhà đầu tư</li>
                            </Link>
                            <Link to={'/'}>
                                <li>Thông báo pháp lý</li>
                            </Link>
                        </ul>
                    </div>
                    <div className={cx('content-links')}>
                        <ul>
                            <Link to={'/'}>
                                <li>Trung tâm trợ giúp</li>
                            </Link>
                            <Link to={'/'}>
                                <li>Việc làm</li>
                            </Link>
                            <Link to={'/'}>
                                <li>Tùy chọn cookie</li>
                            </Link>
                        </ul>
                    </div>
                    <div className={cx('content-links')}>
                        <ul>
                            <Link to={'/'}>
                                <li>Thẻ quà tặng</li>
                            </Link>
                            <Link to={'/'}>
                                <li>Điều khoản sử dụng</li>
                            </Link>
                            <Link to={'/'}>
                                <li>Thông tin doanh nghiệp</li>
                            </Link>
                        </ul>
                    </div>
                    <div className={cx('content-links')}>
                        <ul>
                            <Link to={'/'}>
                                <li>Trung tâm đa phương tiện</li>
                            </Link>
                            <Link to={'/'}>
                                <li>Quyền riêng tư</li>
                            </Link>
                            <Link to={'/'}>
                                <li>Liên hệ với chúng tôi</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <button className={cx('button-footer')}>
                    <Link to={'/'}>Mã dịch vụ</Link>
                </button>
                <div className={cx('about-footer')}>
                    © 1997-2023 Netflix, Inc.
                </div>
            </footer>
        </div>
    );
}

export default Footer;
