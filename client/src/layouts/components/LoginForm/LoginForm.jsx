import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './LoginForm.module.scss';
import config from '~/config/';
import Button from '~/components/Button';
import InputField from '~/components/InputField';
import { KeyIcon, UserIcon } from '~/components/Icons';
import AccountDataService from '~/services/account.service';

const cx = classNames.bind(styles);

const errorText = {
    emptyEmail: 'Please enter your email address.',
    invalidEmail: 'Sorry, only letters (a-z), numbers (0-9), and periods (.) are allowed.',
    emptyPassword: 'Please enter your password.',
    blankSpacePassword: 'Your password cannot start or end with a blank space.',
    incorrectEmail: 'No account found with that email. Try another.',
    incorrectPassword: 'The password you entered is incorrect. Please try again.',
};

export default function LoginForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errorMessages, setErrorMessages] = useState({});

    const validate = () => {
        const newErrMsgs = {};

        if (!formData.email.length) {
            newErrMsgs.email = errorText.emptyEmail;
        } else if (!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(formData.email)) {
            newErrMsgs.email = errorText.invalidEmail;
        } else delete newErrMsgs.email;

        if (!formData.password.length) {
            newErrMsgs.password = errorText.emptyPassword;
        } else if (formData.password.startsWith(' ') || formData.password.endsWith(' ')) {
            newErrMsgs.password = errorText.blankSpacePassword;
        } else delete newErrMsgs.password;

        setErrorMessages(newErrMsgs);
        return Object.keys(newErrMsgs).length === 0;
    };

    const authenticate = async () => {
        const newErrMsgs = {};
        const account = await AccountDataService.findAll({ email: formData.email });
        if (account.length > 1) throw new Error('Database have duplicated accounts!');

        if (account[0]) {
            delete newErrMsgs.email;
            if (formData.password === account[0].password) {
                delete newErrMsgs.password;
            } else {
                newErrMsgs.password = errorText.incorrectPassword;
            }
        } else {
            newErrMsgs.email = errorText.incorrectEmail;
        }

        setErrorMessages(newErrMsgs);
        return Object.keys(newErrMsgs).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validate()) {
            if (await authenticate()) navigate(config.routes.home);
        }
    };

    const handleChange = (e) => {
        const data = {
            ...formData,
            [e.target.name]: e.target.value.trim(),
        };
        setFormData(data);
    };

    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <div className={cx('title')}>Sign In</div>
                    <div className={cx('text')}>Please sign in to continue</div>
                </div>
                <div className={cx('form-wrapper')}>
                    <form className={cx('form')} onSubmit={handleSubmit}>
                        <div className={cx('form-input')}>
                            <InputField
                                medium
                                type='text'
                                name='email'
                                value={formData.email}
                                leftIcon={<UserIcon />}
                                placeholder='Email address'
                                onChange={handleChange}
                                errorMessage={errorMessages.email}
                            />
                            <InputField
                                medium
                                type='password'
                                name='password'
                                value={formData.password}
                                leftIcon={<KeyIcon />}
                                placeholder='Password'
                                onChange={handleChange}
                                errorMessage={errorMessages.password}
                            />
                        </div>
                        <Button primary large type='submit' className={cx('submit-btn')}>
                            Sign in
                        </Button>
                    </form>
                    <div className={cx('forgotPass')}>
                        <Link className={cx('forgotPass-link')} to={config.routes.passRecovery}>
                            Forgot password?
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
