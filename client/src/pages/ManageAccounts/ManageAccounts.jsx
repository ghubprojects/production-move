import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ManageAccounts.module.scss';

import Button from '~/components/Button';
import AccountDataService from '~/services/account.service';

const cx = classNames.bind(styles);

function ManageAccounts() {
    const [accountsData, setAccountsData] = useState([]);

    const handleGetAccounts = async () => {
        const result = await AccountDataService.findAll({});
        setAccountsData(result);
    };

    const handleCreateAccount = async () => {
        const result = await AccountDataService.create({
            firstName: 'Min',
            lastName: 'Min',
            email: 'minmin@gmail.com',
            password: 'Min123',
            role: 'admin',
            address: 'Hoi An',
        });
        console.log(result);
    };

    const handleDeleteAccount = async () => {
        const result = await AccountDataService.delete({ firstName: 'Min' });
        console.log(result);
    };

    const renderAccounts = (accountsData) => {
        if (accountsData)
            return (
                <ul>
                    {accountsData.map((acc) => (
                        <li key={acc.id}>
                            <b>ID:</b> {acc.id}
                            <br></br>
                            <b>Name:</b> {acc.name}
                            <br></br>
                            <b>Role:</b> {acc.role}
                            <br></br>
                            <b>Email:</b> {acc.email}
                            <br></br>
                            <b>Password:</b> {acc.password}
                            <br></br>
                            <b>Address:</b> {acc.address}
                            <br></br>
                        </li>
                    ))}
                </ul>
            );
    };

    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className='m-4 flex gap-4'>
                    <Button primary medium onClick={handleGetAccounts}>
                        Get Accounts
                    </Button>
                    <Button primary medium onClick={handleCreateAccount}>
                        Create Accounts
                    </Button>
                    <Button primary medium onClick={handleDeleteAccount}>
                        Delete Accounts
                    </Button>
                </div>
                <form className='flex space-x-2 flex-col'>
                    <label>
                        Name:
                        <input type='text' name='name' className='bg-indigo-200' />
                    </label>
                    <br />
                    <label>
                        Role:
                        <input type='text' name='role' className='bg-indigo-200' />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input type='email' name='email' className='bg-indigo-200' />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type='password' name='password' className='bg-indigo-200' />
                    </label>
                    <br />
                    <label>
                        Address:
                        <textarea name='address' className='bg-indigo-200' />
                    </label>
                </form>
                {renderAccounts(accountsData)}
            </div>
        </div>
    );
}

export default ManageAccounts;
