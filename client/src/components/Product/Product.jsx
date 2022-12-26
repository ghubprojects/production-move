import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Image from '../Image';
import styles from './Product.module.scss';
import images from '~/assets/images';
import config from '~/config';

const cx = classNames.bind(styles);

export default function Product() {
    return (
        <div className={cx('container')}>
            <Link to={config.routes.login} className='product-image'>
                <Image src={images.logo} alt={'cannot find this image'} />
            </Link>
            <a href={config.routes.login}>ProductThumnail</a>
        </div>
    );
}
