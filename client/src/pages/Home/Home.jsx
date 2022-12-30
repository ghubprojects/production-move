import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { retrieveAllProductParams } from '~/actions/productParams';
import Button from '~/components/Button';
import InputField from '~/components/InputField';
import { retrieveAllProductInfos } from '~/actions/productInfos';

const cx = classNames.bind(styles);

const productParamFields = [
    'productCode',
    'productName',
    'screen',
    'CPU',
    'VGA',
    'RAM',
    'SSD',
    'weight',
];
const productInfoFields = [
    'productCode',
    'productName',
    'leadTime',
    'warrantyTime',
    'error',
    'brand',
    'imageProduct',
];

function Home() {
    const dispatch = useDispatch();
    const productParams = useSelector((state) => state.productParams);
    const productInfos = useSelector((state) => state.productInfos);

    const initProductParams = {
        id: 0,
        productCode: '',
        productName: '',
        screen: '',
        CPU: '',
        VGA: '',
        RAM: '',
        SSD: '',
        weight: '',
    };

    const initProductInfos = {
        id: 0,
        productCode: '',
        productName: '',
        leadTime: '',
        warrantyTime: '',
        error: '',
        brand: '',
        imageProduct: '',
    };

    const [currentOption, setCurrentOption] = useState({
        retrieve: false,
        create: false,
        update: false,
    });

    const handleRetrieveAllProductParams = () => {
        console.clear();
        setCurrentOption({ retrieve: true, create: false, update: false });
        dispatch(retrieveAllProductParams());
    };

    const handleRetrieveAllProductInfos = () => {
        console.clear();
        setCurrentOption({ retrieve: true, create: false, update: false });
        dispatch(retrieveAllProductInfos());
    };

    const renderProductParams = () => {
        console.log('Rendering all productParams:', productParams);
        return productParams ? (
            <div className={cx('product-params')}>
                <div className={cx('product-params-title')}>
                    <InputField type='checkbox' className={cx('checkbox')} />
                    {Object.keys(initProductParams).map((title, index) => {
                        return (
                            <InputField
                                key={index}
                                medium
                                type='text'
                                value={title ? title.toString() : ''}
                                disabled
                                className={cx(title, 'title')}
                            />
                        );
                    })}
                </div>
                {productParams.map((productParams) => {
                    const updateproductParams = productParams;
                    console.log('productParams:', productParams);
                    console.log('updateproductParams', updateproductParams);
                    return (
                        <div className={cx('product-params-item')}>
                            <InputField type='checkbox' className={cx('checkbox')} />
                            <div className={cx('info')}>
                                {productParamFields.map((field) => (
                                    <InputField
                                        key={updateproductParams.id}
                                        medium
                                        type='text'
                                        value={updateproductParams[field]}
                                        disabled
                                        className={cx(field, 'field')}
                                        onChange={(event) => {
                                            const { name, value } = event.target;
                                            updateproductParams[name] = value;
                                            console.log(
                                                'updateproductParams:',
                                                updateproductParams,
                                            );
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        ) : undefined;
    };

    const renderProductInfos = () => {
        console.log('Rendering all productInfos:', productInfos);
        return productInfos ? (
            <div className={cx('product-infos')}>
                <div className={cx('product-infos-title')}>
                    <InputField type='checkbox' className={cx('checkbox')} />
                    {Object.keys(initProductInfos).map((title, index) => {
                        return (
                            <InputField
                                key={index}
                                medium
                                type='text'
                                value={title ? title.toString() : ''}
                                disabled
                                className={cx(title, 'title')}
                            />
                        );
                    })}
                </div>
                {productInfos.map((productInfos) => {
                    const updateproductInfos = productInfos;
                    console.log('productInfos:', productInfos);
                    console.log('updateproductInfos', updateproductInfos);
                    return (
                        <div className={cx('product-infos-item')}>
                            <InputField type='checkbox' className={cx('checkbox')} />
                            <div className={cx('info')}>
                                {productInfoFields.map((field) => (
                                    <InputField
                                        key={updateproductInfos.id}
                                        medium
                                        type='text'
                                        value={updateproductInfos[field]}
                                        disabled
                                        className={cx(field, 'field')}
                                        onChange={(event) => {
                                            const { name, value } = event.target;
                                            updateproductInfos[name] = value;
                                            console.log('updateproductInfos:', updateproductInfos);
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        ) : undefined;
    };

    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className='m-4'>
                    <Button primary large onClick={handleRetrieveAllProductParams}>
                        Retrieve All Product Params
                    </Button>
                </div>
                {currentOption.retrieve && renderProductParams()}
                <br />
                <div className='m-4'>
                    <Button primary large onClick={handleRetrieveAllProductInfos}>
                        Retrieve All Product Infos
                    </Button>
                    <br />
                </div>
                {currentOption.retrieve && renderProductInfos()}
            </div>
        </div>
    );
}

export default Home;
