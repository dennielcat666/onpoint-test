import { useState } from 'react';
import {Slider} from '../../Slider/Slider'
import {Slide} from '../../Slider/Slide'
import {Button} from '../../Button/Button'
import {Popup} from '../../Popup/Popup'

import cn from 'classnames'
import styles from './HomeScreenThird.module.css';

export function HomeScreenThird() {

	const [showPopup, setShowPopup] = useState(false);

	const handleClick = () => {
		setShowPopup(true)
	}

	return (
		<li className={styles.wrapper}>
			<div className={styles.contentBlock}>
				<div className={styles.textBlock}>
					<div className={styles.title}>Ключевое сообщение</div>
					<div className={styles.subText}>brend<span className={styles.subTextSpan}>xy</span></div>
				</div>
				<div className={styles.infoBlock}>
					<div className={cn(styles.infoCol, styles.infoColLeft)}>Ehicula ipsum a arcu 
						cursus vitae. Eu non 
						diam phasellus 
						vestibulum lorem sed 
						risus ultricies
						<div className={cn(styles.img, styles.plate)}></div>
					</div>
					<div>
						<div className={cn(styles.infoCol, styles.infoColRight)}>
							A arcu <br/>cursus vitae
							<div className={cn(styles.img, styles.calendar)}></div>
						</div>
						<Button className={styles.buttonScreen} onClick={handleClick}>Подробнее</Button>
					</div>
				</div>
			</div>
			<Popup isShow={showPopup} onClose={setShowPopup}>
				<div className={styles.titlePopup}>преимущества</div>
				<div className={styles.subTextPopup}>brend<span className={styles.subTextSpanPopup}>xy</span></div>
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
			</Popup>
			<div className={cn(styles.img, styles.bottle)}></div>
			<div className={cn(styles.img, styles.blueBubble1)}></div>
			<div className={cn(styles.img, styles.blueBubble2)}></div>
			<div className={cn(styles.img, styles.blueBubble3)}></div>
			<div className={cn(styles.img, styles.blueBubble4)}></div>
			<div className={cn(styles.img, styles.blueBubble5)}></div>
			<div className={cn(styles.img, styles.pinkBubbleTop)}></div>
			<div className={cn(styles.img, styles.pinkBubbleMiddle)}></div>
			<div className={cn(styles.img, styles.pinkBubbleBottom)}></div>
		</li>
	)
}