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

export default function AdminProductStatistics() {
    return (
        <div className={cx('container')}>
            <div>
                <Navbar props={MenuData} />
            </div>
            <div className={cx('wrapper')}>
                <div className={cx('left-side')}>
                    {/* <div>
                        <span style={{ fontWeight: 'bold' }}> Theo trạng thái</span>
                        <div className={cx('check-box')}>
                            <Checkbox id='Chưa bán' />
                            <Checkbox id='Đã bán' />
                            <Checkbox id='Đang bảo hành' />
                            <Checkbox id='Đã trả về cơ sở sản xuất' />
                        </div>
                    </div> */}
                    <div>
                        <span style={{ fontWeight: 'bold' }}> Tìm cơ sở sản xuất</span>
                        <SearchBar placeholder='Nhập ở đây...' data={BookData} />
                    </div>
                    <div>
                        <span style={{ fontWeight: 'bold' }}> Tìm đại lý phân phối</span>
                        <SearchBar placeholder='Nhập ở đây...' data={BookData} />
                    </div>
                    <div>
                        <span style={{ fontWeight: 'bold' }}> Tìm trung tâm bảo hành</span>
                        <SearchBar placeholder='Nhập ở đây...' data={BookData} />
                    </div>
                </div>
                <div className={cx('right-side')}>
                    <BarChart minQuantity={100} maxQuantity={20000} />
                </div>
            </div>
        </div>
    );
}
