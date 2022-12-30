import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './ManageAccounts.module.scss';

import Button from '~/components/Button';
import AccountForm from '~/layouts/components/AccountForm';
import AccountDataService from '~/services/accountService';
import {
    createAccount,
    retrieveAccounts,
    retrieveAllAccounts,
    updateAccount,
    deleteAccount,
    deleteAllAccounts,
} from '~/actions/accounts';
import InputField from '~/components/InputField';

const cx = classNames.bind(styles);

const fields = ['id', 'fullname', 'role', 'email', 'password', 'address'];

function ManageAccounts() {
    const dispatch = useDispatch();
    const accounts = useSelector((state) => state.accounts);
    const initAccount = {
        id: 0,
        fullname: '',
        role: '',
        email: '',
        password: '',
        address: '',
    };

    let updateAccount = initAccount;

    const [currentOption, setCurrentOption] = useState({
        retrieve: false,
        create: false,
        update: false,
    });

    const handleRetrieveAllAccounts = () => {
        console.clear();
        setCurrentOption({ retrieve: true, create: false, update: false });
        dispatch(retrieveAllAccounts());
    };

    const handleSwitchCreateAccount = () => {
        console.clear();
        setCurrentOption({ create: true, retrieve: false, update: false });
    };

    const handleDeleteAccount = async () => {
        setCurrentOption({ create: true, retrieve: false });
        const result = await AccountDataService.delete({ firstName: 'Min' });
        console.log(result);
    };

    const handleUpdateAccount = () => {
        console.clear();
        setCurrentOption({ update: true, retrieve: false, create: false });

        /* dispatch(updateAccount())
            .then((response) => {
                console.log(response);
            })
            .catch((e) => {
                console.log(e);
            }); */
    };

    const handleDeleteAllAccounts = () => {
        dispatch(updateAccount())
            .then((response) => {
                console.log(response);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const renderAccounts = () => {
        console.log('Rendering all accounts:', accounts);
        return accounts ? (
            <div className={cx('account')}>
                <div className={cx('account-title')}>
                    <InputField type='checkbox' className={cx('checkbox')} />
                    {Object.keys(initAccount).map((title, index) => {
                        return (
                            <InputField
                                key={index}
                                medium
                                type='text'
                                value={title ? title.toString() : ''}
                                disabled
                                className={cx(title, 'title')}
                            />
                        );
                    })}
                </div>
                {accounts.map((account) => {
                    const updateAccount = account;
                    console.log('account:', account);
                    console.log('updateAccount', updateAccount);
                    return (
                        <div className={cx('account-item')}>
                            <InputField type='checkbox' className={cx('checkbox')} />
                            <div className={cx('info')}>
                                {fields.map((field) => (
                                    <InputField
                                        key={updateAccount.id}
                                        medium
                                        type='text'
                                        value={updateAccount[field]}
                                        disabled={!currentOption.update}
                                        className={cx(field, 'field')}
                                        onChange={(event) => {
                                            const { name, value } = event.target;
                                            updateAccount[name] = value;
                                            console.log('updateAccount:', updateAccount);
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        ) : undefined;
    };

    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('options')}>
                    <div className={cx('switch-options')}>
                        <Button primary medium onClick={handleRetrieveAllAccounts}>
                            Retrieve Accounts
                        </Button>
                        <Button primary medium onClick={handleSwitchCreateAccount}>
                            Create Accounts
                        </Button>
                    </div>
                    <div className={cx('account-options')}>
                        <Button
                            primary
                            medium
                            disabled={currentOption.create}
                            onClick={handleUpdateAccount}
                        >
                            Update
                        </Button>
                        <Button
                            primary
                            medium
                            disabled={currentOption.create}
                            onClick={handleUpdateAccount}
                        >
                            Save
                        </Button>
                        <Button
                            primary
                            medium
                            disabled={currentOption.create}
                            onClick={handleDeleteAccount}
                        >
                            Delete
                        </Button>
                    </div>
                </div>
                {(currentOption.retrieve || currentOption.update) && renderAccounts()}
                {currentOption.create && <AccountForm />}
            </div>
        </div>
    );
}

export default ManageAccounts;
