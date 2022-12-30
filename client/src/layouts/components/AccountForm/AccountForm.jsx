import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';

import styles from './AccountForm.module.scss';
import config from '~/config/';
import Button from '~/components/Button';
import InputField from '~/components/InputField';
import { GroupUserIcon, HomeIcon, KeyIcon, MailIcon, UserIcon } from '~/components/Icons';
import AccountDataService from '~/services/accountService';
import {
    errorText,
    validateAddress,
    validateEmail,
    validateFullname,
    validatePassword,
    validateRole,
} from '~/utils/validate';
import {
    createAccount,
    retrieveAccounts,
    retrieveAllAccounts,
    updateAccount,
    deleteAccount,
    deleteAllAccounts,
} from '~/actions/accounts';

const cx = classNames.bind(styles);

const fields = [
    {
        name: 'fullname',
        type: 'text',
        placeholder: 'Full name',
        leftIcon: <UserIcon />,
    },
    {
        name: 'role',
        type: 'text',
        placeholder: 'Role',
        leftIcon: <GroupUserIcon />,
    },
    {
        name: 'email',
        type: 'text',
        placeholder: 'Email',
        leftIcon: <MailIcon />,
    },
    {
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        leftIcon: <KeyIcon />,
    },
    {
        name: 'address',
        type: 'text',
        placeholder: 'Address',
        leftIcon: <HomeIcon />,
    },
];

export default function AccountForm({ className }) {
    const dispatch = useDispatch();

    const initFormData = {
        fullname: '',
        role: '',
        email: '',
        password: '',
        address: '',
    };
    const [formData, setFormData] = useState(initFormData);

    const [errorMessages, setErrorMessages] = useState({});

    const validate = () => {
        console.log(1, 'Validating...');
        const newErrMsgs = {
            email: validateEmail(formData.email),
            password: validatePassword(formData.password),
            fullname: validateFullname(formData.email),
            role: validateRole(formData.role),
            address: validateAddress(formData.address),
        };

        console.log('newErrMsgs:', newErrMsgs);
        setErrorMessages(newErrMsgs);
        return Object.keys(newErrMsgs).length === 0;
    };

    const checkExistAccount = async () => {
        console.log(2, 'Checking Exist Account...');
        const newErrMsgs = {};
        await dispatch(retrieveAccounts({ email: formData.email }))
            .then((res) => {
                console.log(8, 'dispatch retrieveAccounts');
                console.log('Success Retrieve Accounts!');
                if (res.length > 1) throw new Error('Database have duplicated accounts!');
                else if (res.length === 1) newErrMsgs.email = errorText.alreadyExistEmail;
            })
            .catch((err) => {
                console.log(err);
            });
        console.log('newErrMsgs:', newErrMsgs);
        setErrorMessages(newErrMsgs);
        return Object.keys(newErrMsgs).length === 0;
    };

    const handleCreateAccount = () => {
        console.log('handleCreateAccount:', formData);
        dispatch(createAccount(formData))
            .then(() => console.log('Success Create Account!'))
            .catch((err) => {
                console.log(err);
            });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validate() && (await checkExistAccount())) {
            handleCreateAccount();
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <div className={cx('title')}>New Account</div>
                    <div className={cx('text')}>Please enter the info to create a new account</div>
                </div>
                <form className={cx('form', className)} onSubmit={handleSubmit}>
                    <div className={cx('form-input')}>
                        {fields.map((field, index) => (
                            <InputField
                                key={index}
                                medium
                                name={field.name}
                                type={field.type}
                                leftIcon={field.leftIcon}
                                placeholder={field.placeholder}
                                value={formData[field.name]}
                                errorMessage={errorMessages[[field.name]]}
                                onChange={handleChange}
                            />
                        ))}
                    </div>
                    <Button primary large type='submit' className={cx('submit-btn')}>
                        Create
                    </Button>
                </form>
            </div>
        </div>
    );
}
