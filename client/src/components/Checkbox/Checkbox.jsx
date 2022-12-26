import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Checkbox.module.scss';

const cx = classNames.bind(styles);

function Checkbox({ id }) {
    return (
        <div className='container'>
            <input type='checkbox' id={id} className={cx('check-box')}></input>
            <label for={id} className={cx('product-name')}>
                {id}
            </label>
        </div>
    );
}

export default Checkbox;
