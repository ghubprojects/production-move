import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';
import images from '~/assets/images';
import config from '~/config/';
import Button from '~/components/Button';
import Image from '~/components/Image';
import { PlusIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('container')}>
            <div className={cx('wrapper')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <Image src={images.logo} alt='tiktok-logo' />
                </Link>
                <h1>Footer</h1>
                <Button text to={config.routes.upload} className={cx('upload')}>
                    <span className={cx('plus')}>
                        <PlusIcon />
                    </span>
                    <span className={cx('upload-text')}>Upload</span>
                </Button>
            </div>
        </footer>
    );
}

export default Footer;
