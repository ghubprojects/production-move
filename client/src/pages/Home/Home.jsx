import React from 'react';
import { Carousel } from '@mantine/carousel';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);
const imageAlbum = [
    { src: images.laptop1, alt: 'Image 1' },
    { src: images.laptop2, alt: 'Image 2' },
    { src: images.laptop3, alt: 'Image 3' },
    { src: images.laptop4, alt: 'Image 1' },
    { src: images.laptop1, alt: 'Image 2' },
    { src: images.laptop2, alt: 'Image 3' },
    { src: images.laptop3, alt: 'Image 1' },
    { src: images.laptop4, alt: 'Image 2' },
    { src: images.laptop1, alt: 'Image 1' },
    { src: images.laptop2, alt: 'Image 2' },
    { src: images.laptop3, alt: 'Image 3' },
    { src: images.laptop4, alt: 'Image 1' },
];

function Home() {
    return (
        <div>
            <div className={cx('carousel')}>
                <Carousel
                    withIndicators
                    height={600}
                    slideSize='33.333333%'
                    slideGap='md'
                    breakpoints={[
                        { maxWidth: 'md', slideSize: '50%' },
                        { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
                    ]}
                    loop
                    align='start'
                >
                    {imageAlbum.map((image, index) => (
                        <Carousel.Slide key={index}>
                            <img alt={image.alt} src={image.src} />
                        </Carousel.Slide>
                    ))}
                </Carousel>
            </div>
            <div className={cx('intro')}>
                <p>
                    BigCorp là một tập đoàn chuyên sản xuất các dòng laptop phổ biến trên thị trường
                    hiện nay. Các sản phẩm của chúng tôi được tiêu thụ rộng rãi trên toàn quốc. Tập
                    đoàn có nhiều cơ sở/nhà máy sản xuất cùng nhiều trung tâm bảo hành sản phẩm trên
                    toàn quốc. Mặt khác, tập đoàn đã thiết lập một hệ thống rộng khắp các đại lý
                    phân phối sản phẩm.
                </p>
            </div>
        </div>
    );
}

export default Home;
