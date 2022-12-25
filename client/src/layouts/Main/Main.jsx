import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Main.module.scss';

const cx = classNames.bind(styles);

function Main({ children }) {
    return (
        <div>
            <div className={cx('container')}>{children}</div>
        </div>
    );
}

Main.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Main;
