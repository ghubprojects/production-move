import React from 'react';
import styles from './Navbar.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Navbar({ props }) {
    var length = 100 / props.length;
    var text = length.toString();
    return (
        <nav className={cx('nav-bar')}>
            <ul className={cx('item-list')}>
                {props.map((item, index) => {
                    return (
                        <li className={cx('item')} key={index} style={{ width: text + '%' }}>
                            <Link to={item.url}>{item.title}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
export default Navbar;
