import cn from 'classnames';
import styles from './Popup.module.css';

export function Popup({ onClose, isShow, children }) {
	return (
		<div
			className={cn(styles.popupWrapper, {
				[styles.showPopup]: isShow,
			})}
		>
			<div className={styles.popupBlock}>
				<button
					onClick={() => onClose(false)}
					className={cn(styles.img, styles.close)}
				></button>
				{children}
			</div>
		</div>
	);
}
