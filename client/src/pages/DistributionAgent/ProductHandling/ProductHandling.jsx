import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import config from '~/config/';
import Product from '~/components/Product';
import Checkbox from '~/components/Checkbox';
import styles from './ProductHandling.module.scss';

import Navbar from '~/components/Navbar';
import { MenuData } from '../MenuData';
import { Bar } from 'react-chartjs-2';

const cx = classNames.bind(styles);

export default function DistributionProductHandling() {
    return (
        <div className={cx('container')}>
            <div>
                <Navbar props={MenuData} />
            </div>
            <div className={cx('wrapper')}>
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
                        <Bar
                            data={{
                                labels: [
                                    'Africa',
                                    'Asia',
                                    'Europe',
                                    'Latin America',
                                    'North America',
                                ],
                                datasets: [
                                    {
                                        label: 'Population (millions)',
                                        backgroundColor: [
                                            '#3e95cd',
                                            '#8e5ea2',
                                            '#3cba9f',
                                            '#e8c3b9',
                                            '#c45850',
                                        ],
                                        data: [2478, 5267, 734, 784, 433],
                                    },
                                ],
                            }}
                            options={{
                                legend: { display: false },
                                title: {
                                    display: true,
                                    text: 'Predicted world population (millions) in 2050',
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
