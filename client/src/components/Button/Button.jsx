import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    primary,
    soft,
    outline,
    text,
    disabled,
    large,
    medium,
    small,
    to,
    href,
    onClick,
    leftIcon,
    rightIcon,
    className,
    children,
    ...restProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...restProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp
            className={cx(
                'wrapper',
                {
                    primary,
                    soft,
                    outline,
                    text,
                    disabled,
                    large,
                    medium,
                    small,
                },
                className,
            )}
            {...props}
        >
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('string')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    primary: PropTypes.bool,
    soft: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    large: PropTypes.bool,
    medium: PropTypes.bool,
    small: PropTypes.bool,
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
};

export default Button;
