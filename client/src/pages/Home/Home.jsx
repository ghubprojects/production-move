import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className='text-4xl font-bold m-4'>Home Page</div>
            </div>
        </div>
    );
}

export default Home;
