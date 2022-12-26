import React from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images';
import LoginForm from '~/components/LoginForm';

const cx = classNames.bind(styles);

export default function Login() {
    return (
        <div className={cx('container')}>
            <div className={cx('logo')}>
                <Image w={500} h={500} src={images.logo} alt='tiktok-logo' />
            </div>
            <LoginForm />
        </div>
    );
}
