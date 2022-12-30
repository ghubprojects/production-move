import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import config from '~/config/';
import Product from '~/components/Product';
import Checkbox from '~/components/Checkbox';
import styles from './ProductStatistics.module.scss';

import Navbar from '~/components/Navbar';
import { MenuData } from '../MenuData';
import SearchBar from '~/components/SearchBar/SearchBar';
import BookData from './Data.json';
import BarChart from '~/components/Barchart/BarChart';

const cx = classNames.bind(styles);

export default function DistributionProductStatistics() {
    return (
        <div className={cx('container')}>
            <div>
                <Navbar props={MenuData} />
            </div>
            <div className={cx('wrapper')}>
                <div className={cx('right-side')}>
                    <BarChart minQuantity={2000} maxQuantity={4000} />
                </div>
            </div>
        </div>
    );
}
