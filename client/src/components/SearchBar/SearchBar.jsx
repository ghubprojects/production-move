import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { ClearIcon, LoadingIcon, SearchIcon } from '~/components/Icons';
import styles from './SearchBar.module.scss';

const cx = classNames.bind(styles);

function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState('');

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === '') {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered('');
    };

    return (
        <div className={cx('search')}>
            <div className={cx('searchInputs')}>
                <input
                    type='text'
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}
                />
                <div className={cx('searchIcon')}>
                    {filteredData.length === 0 ? (
                        <SearchIcon />
                    ) : (
                        <ClearIcon id='clearBtn' onClick={clearInput} />
                    )}
                </div>
            </div>
            {filteredData.length != 0 && (
                <div className={cx('dataResult')}>
                    {filteredData.slice(0, 15).map((value, key) => {
                        return (
                            <a className={cx('dataItem')} href={value.link} target='_blank'>
                                <p>{value.title} </p>
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default SearchBar;
