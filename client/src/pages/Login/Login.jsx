import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Logo from '~/components/Logo';
import LoginForm from '~/layouts/components/LoginForm';

const cx = classNames.bind(styles);

export default function Login() {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <Logo white className={cx('logo')} />
                <LoginForm />
            </div>
        </div>
    );
}
