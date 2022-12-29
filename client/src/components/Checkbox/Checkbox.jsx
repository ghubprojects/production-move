import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Checkbox.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Checkbox({ id }) {
    const [checked, setChecked] = useState(false);
    const handleChange = (data) => {
        if (!checked) {
            setChecked(true);
            console.log(data);
        } else {
            setChecked(false);
        }
    };
    return (
        <div className='container'>
            <input
                type='checkbox'
                id={id}
                className={cx('check-box')}
                onClick={() => {
                    handleChange(id);
                }}
            ></input>
            <label for={id} className={cx('product-name')}>
                {id}
            </label>
        </div>
    );
}

export default Checkbox;
