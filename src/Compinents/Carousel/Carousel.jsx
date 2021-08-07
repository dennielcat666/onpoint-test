import { useState, useEffect } from 'react';
import cn from 'classnames'
import styles from './Carousel.module.css';

export function Carousel({children, activeSlide, setActiveSlide}) {

	const [startPosition, setStartPosition] = useState(0);

	const mouseDown = (e) => {
		if (e.type === 'touchstart') {
			setStartPosition(e.changedTouches[0].clientX)
		}
		if (e.type === 'mousedown') {
			setStartPosition(e.clientX)
		}
	}

	const mouseUp = (e) => {
		const typeEvent = e.type === 'touchend' ? e.changedTouches[0].clientX : e.clientX
		const bias = startPosition - typeEvent
		if (children.length > activeSlide + 1 && bias > 0) {
			return setActiveSlide(activeSlide + 1)
		}
		if (activeSlide !== 0 && bias < 0) {
			return setActiveSlide(activeSlide - 1)
		}
	}

	const offset = activeSlide * -1024
	
	return (
		<div className={styles.carousel}>
			<ul 
			onMouseDown={mouseDown}
			onMouseUp={mouseUp}
			onTouchStart={mouseDown}
			onTouchEnd={mouseUp}
			style={{
				transform: `translateX(${offset}px)`
			}} 
			className={cn(styles.carouselBlock)}
			>
				{children}
			</ul>
		</div>
	)
}