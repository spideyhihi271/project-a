import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './DetailMovie.module.scss';

const cx = classNames.bind(styles);
function DetailMovie() {
    return (
        <div className={cx('detail-wrapper')}>
            <div className={cx('detail-movie')}>
                <div className={cx('movie-info')}>
                    <div className={cx('info-overview')}>
                        <p className={cx('overview-title')}>Nội dung phim</p>
                        <p className={cx('overview-contents')}>
                            Tháng 5/tháng 6 năm 1940. Bốn trăm nghìn binh sĩ Anh
                            và Pháp đang tập trung tại thị trấn cảng Dunkirk của
                            Pháp. Lối thoát duy nhất là qua đường biển, và quân
                            Đức có ưu thế trên không, ném bom các binh lính và
                            tàu của Anh mà không gặp nhiều sự phản đối. Tình
                            hình có vẻ nghiêm trọng và trong tuyệt vọng, Anh gửi
                            thuyền dân sự cùng với lực lượng Hải quân đang bị áp
                            lực nặng nề của mình để cố gắng sơ tán các lực lượng
                            đang bị bao vây. Đây là câu chuyện đó, được nhìn qua
                            con mắt của một người lính giữa những lực lượng bị
                            mắc kẹt đó, hai phi công chiến đấu của Lực lượng
                            Không quân Hoàng gia và một nhóm thường dân trên
                            thuyền của họ, một phần của hạm đội sơ tán.
                        </p>
                    </div>
                    <div className={cx('info-cast')}>
                        <p className={cx('cast-title')}> Diễn viên </p>
                        <ul className={cx('cast-list')}>
                            <li className={cx('cast-item')}>
                                <Link className={cx('cast-link')}>
                                    <img
                                        className={cx('cast-avt')}
                                        src="https://m.media-amazon.com/images/M/MV5BMTUxMzU2MTk1OF5BMl5BanBnXkFtZTgwNzg4NjAwMzI@._V1_.jpg"
                                        alt=""
                                    />
                                    <p className={cx('cast-name')}>
                                        Harry Styles
                                    </p>
                                </Link>
                            </li>
                            <li className={cx('cast-item')}>
                                <Link className={cx('cast-link')}>
                                    <img
                                        className={cx('cast-avt')}
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Tom_Hardy_by_Gage_Skidmore.jpg/220px-Tom_Hardy_by_Gage_Skidmore.jpg"
                                        alt=""
                                    />
                                    <p className={cx('cast-name')}>
                                        Fionn Whitehead
                                    </p>
                                </Link>
                            </li>
                            <li className={cx('cast-item')}>
                                <Link className={cx('cast-link')}>
                                    <img
                                        className={cx('cast-avt')}
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Tom_Hardy_by_Gage_Skidmore.jpg/220px-Tom_Hardy_by_Gage_Skidmore.jpg"
                                        alt=""
                                    />
                                    <p className={cx('cast-name')}>
                                        Fionn Whitehead
                                    </p>
                                </Link>
                            </li>
                            <li className={cx('cast-item')}>
                                <Link className={cx('cast-link')}>
                                    <img
                                        className={cx('cast-avt')}
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Tom_Hardy_by_Gage_Skidmore.jpg/220px-Tom_Hardy_by_Gage_Skidmore.jpg"
                                        alt=""
                                    />
                                    <p className={cx('cast-name')}>
                                        Fionn Whitehead
                                    </p>
                                </Link>
                            </li>
                            <li className={cx('cast-item')}>
                                <Link className={cx('cast-link')}>
                                    <img
                                        className={cx('cast-avt')}
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Tom_Hardy_by_Gage_Skidmore.jpg/220px-Tom_Hardy_by_Gage_Skidmore.jpg"
                                        alt=""
                                    />
                                    <p className={cx('cast-name')}>
                                        Fionn Whitehead
                                    </p>
                                </Link>
                            </li>
                            <li className={cx('cast-item')}>
                                <Link className={cx('cast-link')}>
                                    <img
                                        className={cx('cast-avt')}
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Tom_Hardy_by_Gage_Skidmore.jpg/220px-Tom_Hardy_by_Gage_Skidmore.jpg"
                                        alt=""
                                    />
                                    <p className={cx('cast-name')}>
                                        Fionn Whitehead
                                    </p>
                                </Link>
                            </li>
                            <li className={cx('cast-item')}>
                                <Link className={cx('cast-link')}>
                                    <img
                                        className={cx('cast-avt')}
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Tom_Hardy_by_Gage_Skidmore.jpg/220px-Tom_Hardy_by_Gage_Skidmore.jpg"
                                        alt=""
                                    />
                                    <p className={cx('cast-name')}>
                                        Fionn Whitehead
                                    </p>
                                </Link>
                            </li>
                            <li className={cx('cast-item')}>
                                <Link className={cx('cast-link')}>
                                    <img
                                        className={cx('cast-avt')}
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Tom_Hardy_by_Gage_Skidmore.jpg/220px-Tom_Hardy_by_Gage_Skidmore.jpg"
                                        alt=""
                                    />
                                    <p className={cx('cast-name')}>
                                        Fionn Whitehead
                                    </p>
                                </Link>
                            </li>
                            <Link className={cx('cast-load')}>Nhiều hơn</Link>
                        </ul>
                    </div>
                </div>
                <div className={cx('movie-galery')}>
                    <p className={cx('galery-title')}>Tài nguyên liên quan</p>
                    <ul className={cx('galery-list')}>
                        <li className={cx('galery-item')}>
                            <img
                                className={cx('galery-image')}
                                src="https://m.media-amazon.com/images/M/MV5BYWYzOTdmMjItY2Q4Yi00MjAyLWE0ZDctMjQwOTc0ZDkyZmVmXkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_.jpg"
                                alt=""
                            />
                        </li>
                        <li className={cx('galery-item')}>
                            <img
                                className={cx('galery-image')}
                                src="https://www.nationalww2museum.org/sites/default/files/styles/wide_medium/public/2017-07/dunkirk%20beach%20sized.jpg?h=07f9aabd"
                                alt=""
                            />
                        </li>
                        <li className={cx('galery-item')}>
                            <img
                                className={cx('galery-image')}
                                src="https://www.nationalww2museum.org/sites/default/files/styles/wide_medium/public/2017-07/dunkirk%20beach%20sized.jpg?h=07f9aabd"
                                alt=""
                            />
                        </li>
                        <li className={cx('galery-item')}>
                            <img
                                className={cx('galery-image')}
                                src="https://www.nationalww2museum.org/sites/default/files/styles/wide_medium/public/2017-07/dunkirk%20beach%20sized.jpg?h=07f9aabd"
                                alt=""
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DetailMovie;
