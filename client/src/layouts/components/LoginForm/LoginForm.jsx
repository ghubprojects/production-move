import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './LoginForm.module.scss';
import config from '~/config/';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

export default function LoginForm() {
    return (
        <form className={cx('loginForm')}>
            <h1 className={cx('signIn')}>Sign In</h1>
            <div className={cx('inputGroup')}>
                <input type='text' className={cx('inputBar')} placeholder='Email address' />
                <input type='text' className={cx('inputBar')} placeholder='Password' />
            </div>
            <Button
                primary
                large
                type='submit'
                className={cx('submit-button')}
                to={config.routes.home}
            >
                Sign in
            </Button>
            <a className={cx('forgotPass')} href>
                <p>Forgot Password?</p>
            </a>
        </form>
    );
}
