import { useState } from 'react'
import {Slider} from '../Slider/Slider'
import {Slide} from '../Slider/Slide'

import cn from 'classnames'
import styles from './Popup.module.css';

export function Popup() {

	return (
		<div className={styles.popupWrapper}>
			<div className={styles.popupBlock}>
				<button className={cn(styles.img, styles.close)}></button>
				<div className={styles.title}>преимущества</div>
				<div className={styles.subText}>brend<span className={styles.subTextSpan}>xy</span></div>
				<Slider>
					<Slide>
						<div className={styles.numbersBlock}>
							<div className={styles.number}>01</div>
							<div className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
						</div>
						<div className={styles.numbersBlock}>
							<div className={styles.number}>02</div>
							<div className={styles.content}>Faucibus pulvinar elementum integer enim</div>
						</div>
						<div className={styles.numbersBlock}>
							<div className={styles.number}>03</div>
							<div className={styles.content}>Faucibus pulvinar elementum integer enim</div>
						</div>
					</Slide>
					<Slide>
						<div className={styles.numbersBlock}>
							<div className={styles.number}>04</div>
							<div className={styles.content}>Mi bibendum neque egestas congue quisque egestas diam</div>
						</div>
						<div className={styles.numbersBlock}>
							<div className={styles.number}>05</div>
							<div className={styles.content}>Venenatis lectus magna fringilla urna</div>
						</div>
						<div className={styles.numbersBlock}>
							<div className={styles.number}>06</div>
							<div className={styles.content}>Venenatis lectus magna fringilla urna</div>
						</div>
					</Slide>
				</Slider>
			</div>
		</div>
	)
}