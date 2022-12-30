import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './InputField.module.scss';

const cx = classNames.bind(styles);

function InputField({
    large,
    medium,
    small,
    type,
    label,
    value,
    leftIcon,
    rightIcon,
    className,
    placeholder,
    onChange,
    errorMessage,
    ...restProps
}) {
    const props = {
        type,
        label,
        value,
        placeholder,
        onChange,
        ...restProps,
    };

    return (
        <div className={cx('wrapper', { large, medium, small })}>
            {label && <label className={cx('label')}>{label}</label>}
            <div className={cx('field')}>
                <div
                    className={cx(
                        'input-field',
                        { valid: value, invalid: errorMessage },
                        className,
                    )}
                >
                    {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                    <input className={cx('input')} {...props} />
                    {rightIcon && value && !errorMessage && (
                        <span className={cx('icon')}>{rightIcon}</span>
                    )}
                </div>
                <span className={cx('error-field')}>{errorMessage}</span>
            </div>
        </div>
    );
}

InputField.propTypes = {
    large: PropTypes.bool,
    medium: PropTypes.bool,
    small: PropTypes.bool,
    type: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
};

export default InputField;
