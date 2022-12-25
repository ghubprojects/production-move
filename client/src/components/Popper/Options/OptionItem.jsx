import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Options.module.scss';

const cx = classNames.bind(styles);

function OptionItem({ data, onClick }) {
    return (
        <Link
            to={data.to}
            className={cx('option-item', { 'log-out': data.logout })}
            onClick={onClick}
        >
            <span className={cx('icon')}>{data.icon}</span>
            <span className={cx('title')}>{data.title}</span>
        </Link>
    );
}

OptionItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default OptionItem;
