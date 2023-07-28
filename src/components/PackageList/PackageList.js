import React from 'react';
import classNames from 'classnames/bind';
import styles from './PackageList.module.scss';
import { formatCurrencyVi } from '~/utils/formatData';

const cx = classNames.bind(styles);
function PackageList() {
    const packages = [
        {
            id: 0,
            name: 'Siêu Tiết Kiệm',
            experied: 1,
            description:
                'Dành cho những ngày dùng thử hoặc ít sử dụng. Tiết kiệm, linh hoạt và hữu ích!',
            price: 99000,
            benefits: [
                'Không quảng cáo',
                'Xem phim chất lượng FullHD',
                'Mở khóa hầu hết nội dung',
                'Có chế độ xem ngoại tuyến',
                'Hỗ trợ nhiều ngôn ngữ phụ đề',
                'Truy cập đồng thời trên nhiều thiết bị',
                'Cập nhật liên tục nội dung mới',
                'Hỗ trợ khách hàng 24/7',
            ],
        },
        {
            id: 1,
            name: 'Siêu Trọn Gói',
            experied: 3,
            description:
                'Lựa chọn tốt nhất cho 3 tháng tiện lợi và tiết kiệm. Tận hưởng dịch vụ không giới hạn!',
            price: 249000,
            benefits: [
                'Không quảng cáo',
                'Xem phim chất lượng FullHD',
                'Mở khóa hầu hết nội dung',
                'Có chế độ xem ngoại tuyến',
                'Hỗ trợ nhiều ngôn ngữ phụ đề',
                'Truy cập đồng thời trên nhiều thiết bị',
                'Cập nhật liên tục nội dung mới',
                'Hỗ trợ khách hàng 24/7',
            ],
        },
        {
            id: 2,
            name: 'Siêu Dài Hạn',
            experied: 6,
            description:
                'Gói cước tiết kiệm, phù hợp cho 6 tháng đầy ưu đãi và tiện ích đa dạng.',
            price: 449000,
            benefits: [
                'Không quảng cáo',
                'Xem phim chất lượng FullHD',
                'Mở khóa hầu hết nội dung',
                'Có chế độ xem ngoại tuyến',
                'Hỗ trợ nhiều ngôn ngữ phụ đề',
                'Truy cập đồng thời trên nhiều thiết bị',
                'Cập nhật liên tục nội dung mới',
                'Hỗ trợ khách hàng 24/7',
            ],
        },
        {
            id: 3,
            name: 'Siêu Phổ Biến',
            experied: 12,
            description:
                'Gói cước được yêu thích nhất, tiết kiệm lớn và dùng thoải mái trong cả năm.',
            price: 799000,
            benefits: [
                'Không quảng cáo',
                'Xem phim chất lượng FullHD',
                'Mở khóa hầu hết nội dung',
                'Có chế độ xem ngoại tuyến',
                'Hỗ trợ nhiều ngôn ngữ phụ đề',
                'Truy cập đồng thời trên nhiều thiết bị',
                'Cập nhật liên tục nội dung mới',
                'Hỗ trợ khách hàng 24/7',
            ],
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('package')}>
                <p className={cx('package-title')}>
                    Sẵn sàng để bắt đầu với <span>Beecine</span>
                </p>
                <p className={cx('package-description')}>
                    Chọn 1 gói dịch vụ phù hợp với nhu cầu của bạn!
                </p>
                <ul className={cx('package-list')}>
                    {packages.map((item) => (
                        <div className={cx('package-item')} key={item.id}>
                            <p className={cx('package-item-name')}>
                                {item.name}
                            </p>
                            <p className={cx('package-item-description')}>
                                {item.description}
                            </p>
                            <p className={cx('package-item-price')}>
                                <span>{formatCurrencyVi(item.price)}</span>/
                                {item.experied} tháng
                            </p>
                            <div className={cx('package-item-info')}>
                                <p className={cx('info-title')}>Chi tiết: </p>
                                <ul className={cx('info-content-list')}>
                                    {item.benefits.map((benefit, idx) => (
                                        <p key={idx}> - {benefit}</p>
                                    ))}
                                </ul>
                            </div>
                            <button className={cx('package-item-register')}>
                                Đăng kí
                            </button>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PackageList;
