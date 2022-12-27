import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Logo.module.scss';
import images from '~/assets/images';
import Image from '../Image';

const cx = classNames.bind(styles);

function Logo({ indigo, white, className, ...restProps }) {
    let logoSrc;
    if (indigo) {
        logoSrc = images.indigoLogo;
    } else if (white) {
        logoSrc = images.whiteLogo;
    }

    return (
        <Image
            src={logoSrc}
            alt='logo'
            className={cx('wrapper', { indigo, white }, className)}
            {...restProps}
        />
    );
}

Logo.propTypes = {
    indigo: PropTypes.bool,
    white: PropTypes.bool,
    className: PropTypes.string,
};

export default Logo;
