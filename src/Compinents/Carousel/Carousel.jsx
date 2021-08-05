import styles from './Carousel.module.css';

export function Carousel({children}) {
	return (
		<div className={styles.carousel}>
			<ul>
				{children}
			</ul>
		</div>
	)
}