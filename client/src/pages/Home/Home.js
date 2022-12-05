import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <h2>Home page</h2>
            </div>
        </div>
    );
}

export default Home;
