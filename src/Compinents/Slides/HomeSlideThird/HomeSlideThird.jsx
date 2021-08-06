import {Button} from '../../Button/Button'
import {Popup} from '../../Popup/Popup'

import cn from 'classnames'
import styles from './HomeSlideThird.module.css';

export function HomeSlideThird() {
	return (
		<li className={styles.wrapper}>
			{/* <div className={styles.contentBlock}>
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
						<Button className={styles.buttonSlide}>Подробнее</Button>
					</div>
				</div>
			</div> */}
			<Popup/>
			{/* <div className={cn(styles.img, styles.bottle)}></div>
			<div className={cn(styles.img, styles.blueBubble1)}></div>
			<div className={cn(styles.img, styles.blueBubble2)}></div>
			<div className={cn(styles.img, styles.blueBubble3)}></div>
			<div className={cn(styles.img, styles.blueBubble4)}></div>
			<div className={cn(styles.img, styles.blueBubble5)}></div>
			<div className={cn(styles.img, styles.pinkBubbleTop)}></div>
			<div className={cn(styles.img, styles.pinkBubbleMiddle)}></div>
			<div className={cn(styles.img, styles.pinkBubbleBottom)}></div> */}
		</li>
	)
}