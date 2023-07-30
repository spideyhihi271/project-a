import classNames from 'classnames/bind';
import styles from './Comment.module.scss';
import CommentList from './CommentList';

const cx = classNames.bind(styles);
function Comment() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('comment')}>
                <div className={cx('comment-header')}>
                    <p className={cx('comment-header-title')}>
                        Bình luận về phim
                    </p>
                    <select className={cx('comment-header-view')}>
                        <option>Mới nhất</option>
                        <option>Cũ nhất</option>
                        <option>Phù hợp nhất</option>
                    </select>
                </div>
                <div className={cx('comment-box')}>
                    <input type="text" placeholder="Bình luận của bạn" />
                    <button>Bình luận</button>
                </div>
            </div>
            <CommentList />
        </div>
    );
}

export default Comment;
