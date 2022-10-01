import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function Button({ to, href, primary, children, onClick, ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    let classes = cx('wrapper');
    return (
        <Comp className={classes} {...props}>
            {/* {leftIcon && <span className={cx('icon')}> {leftIcon}</span>} */}
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
