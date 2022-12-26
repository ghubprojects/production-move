import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import config from '~/config/';
import ProductThumnail from '~/components/ProductThumnail';
import Checkbox from '~/components/Checkbox';
import styles from './ProductList.module.scss';

const cx = classNames.bind(styles);

export default function AdminProductList() {
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
                    <ProductThumnail />
                    <ProductThumnail />
                    <ProductThumnail />
                    <ProductThumnail />
                    <ProductThumnail />
                    <ProductThumnail />
                    <ProductThumnail />
                    <ProductThumnail />
                    <ProductThumnail />
                    <ProductThumnail />
                    <ProductThumnail />
                    <ProductThumnail />
                </div>
            </div>
        </div>
    );
}
