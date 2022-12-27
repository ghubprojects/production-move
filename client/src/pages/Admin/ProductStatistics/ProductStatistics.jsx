import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import config from '~/config/';
import Product from '~/components/Product';
import Checkbox from '~/components/Checkbox';
import styles from './ProductStatistics.module.scss';

const cx = classNames.bind(styles);

export default function AdminProductStatistics() {
    return (
        <div className={cx('container')}>
            <div className={cx('left-side')}>
                <span style={{ fontWeight: 'bold' }}> Dòng sản phẩm</span>
                <div className={cx('check-box')}>
                    <Checkbox id='ASUS' />
                    <Checkbox id='ACER' />
                    <Checkbox id='HP' />
                    <Checkbox id='DELL' />
                </div>
            </div>
            <div className={cx('right-side')}>
                <div className={cx('result-container')}>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
    );
}
