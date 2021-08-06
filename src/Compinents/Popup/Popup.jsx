// import { useState } from 'react'
import {SubSlideFirst} from '../Slides/SubSlideFirst/SubSlideFirst'
import {SubSlideSecond} from '../Slides/SubSlideSecond/SubSlideSecond'

import cn from 'classnames'
import styles from './Popup.module.css';

export function Popup() {

	// const [visible, setVisible] = useState(true)
	// const [active, setActive] = useState(true)

	// const handleClick = (e) => {

	// 	setVisible(false)
	// }

	return (
		<div className={styles.popupWrapper}>
			<div className={styles.popupBlock}>
				<button className={cn(styles.img, styles.close)}></button>
				<div className={styles.title}>преимущества</div>
				<div className={styles.subText}>brend<span className={styles.subTextSpan}>xy</span></div>
				<div className={styles.tabs}>
					<div className={styles.tabsBlocks}>
						<div className={cn(styles.tabsBlocksContent, styles.visible)}>
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
						</div>
						<div className={cn(styles.tabsBlocksContent)}>
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
						</div>
					</div>
					<div className={styles.tabsLinks}>
						<div className={cn(styles.tabsLinkTitle, styles.tabsLinkTitleLeft, styles.active)} href="#"></div>
						<div className={cn(styles.tabsLinkTitle, styles.tabsLinkTitleRigt,)} href="#"></div>
					</div>
				</div>
			</div>
			<div className={cn(styles.img, styles.bottle)}></div>
			<div className={cn(styles.img, styles.blueBubble1)}></div>
			<div className={cn(styles.img, styles.blueBubble2)}></div>
			<div className={cn(styles.img, styles.blueBubble3)}></div>
			<div className={cn(styles.img, styles.blueBubble4)}></div>
			<div className={cn(styles.img, styles.blueBubble5)}></div>
			<div className={cn(styles.img, styles.pinkBubbleTop)}></div>
			<div className={cn(styles.img, styles.pinkBubbleMiddle)}></div>
			<div className={cn(styles.img, styles.pinkBubbleBottom)}></div>
		</div>
	)
}