import {Button} from '../../Button/Button'

import cn from 'classnames'
import styles from './HomeSlideFirst.module.css';

export function HomeSlideFirst() {
	return (
		<li className={styles.wrapper}>
			<div className={styles.title}>привет,</div>
			<div className={styles.subText}>
				это <span className={styles.subTextSpan}>не</span> коммерческое задание
				<Button className={styles.buttonSlide}>Что дальше?</Button>
			</div>
			<div className={cn(styles.img, styles.bacteriumTop)}></div>
			<div className={cn(styles.img, styles.bacteriumRight)}></div>
			<div className={cn(styles.img, styles.bacteriumButtom)}></div>
			<div className={cn(styles.img, styles.bacteriumLeft)}></div>
			<div className={cn(styles.img, styles.pinkSperm)}></div>
		</li>
	)
}