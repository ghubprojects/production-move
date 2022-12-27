import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import config from '~/config/';
import Button from '~/components/Button';
import Image from '~/components/Image';
import { default as OptionsPopper } from '~/components/Popper/Options';
import Search from './Search';
import {
    MessagesIcon,
    InboxIcon,
    UserIcon,
    CoinIcon,
    SettingIcon,
    LetterIcon,
    HelpIcon,
    KeyboardIcon,
    LogoutIcon,
    MoreIcon,
} from '~/components/Icons';
import Logo from '~/components/Logo';

const cx = classNames.bind(styles);

const seeMoreOptions = [
    {
        icon: <LetterIcon />,
        title: 'English',
        children: {
            title: 'Language',
            type: 'language',
            data: [
                { code: 'en', title: 'English' },
                { code: 'vi', title: 'Tiếng Việt' },
            ],
        },
    },
    { icon: <HelpIcon />, title: 'Feedback and help', to: config.routes.feedback },
    { icon: <KeyboardIcon />, title: 'Keyboard shortcuts' },
];

const profileOptions = [
    { icon: <UserIcon />, title: 'View profile' },
    { icon: <CoinIcon />, title: 'Get coins' },
    { icon: <SettingIcon />, title: 'Settings' },
    ...seeMoreOptions,
    { icon: <LogoutIcon />, title: 'Log out', logout: true },
];

function Header() {
    let currentUser = false;

    const handleOptionsChange = (optionItem) => {
        switch (optionItem.type) {
            case 'language':
                console.log('Change language...');
                break;
            default:
                console.log('Default Type...');
                break;
        }
    };

    return (
        <header className={cx('container')}>
            <div className={cx('wrapper')}>
                <Link to={config.routes.home}>
                    <Logo indigo className={cx('logo')} />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    <Button primary medium to={config.routes.manageAccounts} className='mx-4'>
                        Manage Accounts
                    </Button>
                    {currentUser ? (
                        <Button primary medium to={config.routes.manageAccounts}>
                            Manage Accounts
                        </Button>
                    ) : (
                        <Button primary medium to={config.routes.login}>
                            Login
                        </Button>
                    )}

                    {currentUser && (
                        <Tippy content='Inbox' placement='bottom' delay={[0, 100]}>
                            <span className={cx('inbox')}>
                                <InboxIcon />
                                <span className={cx('badge')}>20</span>
                            </span>
                        </Tippy>
                    )}

                    <OptionsPopper
                        list={currentUser ? profileOptions : seeMoreOptions}
                        onChange={handleOptionsChange}
                    >
                        {currentUser ? (
                            <Image src={images.cafe} className={cx('avatar')} alt='avatar' />
                        ) : (
                            <span className={cx('more')}>
                                <MoreIcon />
                            </span>
                        )}
                    </OptionsPopper>
                </div>
            </div>
        </header>
    );
}

export default Header;
