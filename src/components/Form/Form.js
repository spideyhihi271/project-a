import classNames from 'classnames/bind';
import styles from './Form.module.scss';

// Children Component
import SignIn from './components/SignIn';
import Payment from './components/Payment';

const cx = classNames.bind(styles);
function Form({ formName, isChildren = false }) {
    let Container = SignIn;
    if (formName?.includes('payment')) Container = Payment;
    return (
        <div className={cx('form-wrapper', { 'form-child': isChildren })}>
            <Container />
        </div>
    );
}

export default Form;
