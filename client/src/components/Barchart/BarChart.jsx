import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart({ minQuantity, maxQuantity }) {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Thống kê sản phẩm',
            },
        },
    };

    const labels = [
        'Mới sản xuất',
        'Đưa về đại lý',
        'Đã bán',
        'Lỗi, cần bảo hành',
        'Đang sửa chữa bảo hành',
        'Đã bảo hành xong',
        'Đã trả lại bảo hành cho khách hàng',
        'Lỗi, cần trả về nhà máy',
        'Lỗi, đã đưa về cơ sở sản xuất',
        'Lỗi cần triệu hồi',
        'Hết thời gian bảo hành',
        'Trả lại cơ sở sản xuất',
    ];

    const data = {
        labels,
        datasets: [
            {
                label: 'Số lượng sản phẩm',
                data: labels.map(() =>
                    faker.datatype.number({ min: minQuantity, max: maxQuantity }),
                ),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    return (
        <div className='container'>
            <Bar options={options} data={data} />
        </div>
    );
}

export default BarChart;
