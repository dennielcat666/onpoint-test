import PropTypes from 'prop-types';
import cn from 'classnames'
import styles from './Button.module.css';

export function Button({children, className, onClick, value}) {
	return (
		<button
			className={cn(styles.button, className)}
			onClick={onClick}
			value={value}
		>
			{children}
		</button>
	)
}

Button.propTypes = {
	children: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.string,
	value: PropTypes.string,
	disabled: PropTypes.bool,
}