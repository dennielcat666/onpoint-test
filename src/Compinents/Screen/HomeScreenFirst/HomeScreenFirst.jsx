import {Button} from '../../Button/Button'

import cn from 'classnames'
import styles from './HomeScreenFirst.module.css';

export function HomeScreenFirst({onClick}) {
	return (
		<li className={styles.wrapper}>
			<div className={styles.title}>привет,</div>
			<div className={styles.subText}>
				это <span className={styles.subTextSpan}>не</span> коммерческое задание
				<Button className={styles.buttonScreen} onClick={onClick}>Что дальше?</Button>
			</div>
			<div className={cn(styles.img, styles.bacteriumTop)}></div>
			<div className={cn(styles.img, styles.bacteriumRight)}></div>
			<div className={cn(styles.img, styles.bacteriumButtom)}></div>
			<div className={cn(styles.img, styles.bacteriumLeft)}></div>
			<div className={cn(styles.img, styles.pinkSperm)}></div>
		</li>
	)
}