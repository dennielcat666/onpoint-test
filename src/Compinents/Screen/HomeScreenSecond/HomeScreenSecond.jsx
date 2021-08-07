import { useState, useRef } from 'react';
import styles from './HomeScreenSecond.module.css';
import cn from 'classnames';

export function HomeScreenSecond({ activeSlide }) {
	const scrollTrackRef = useRef(null);
	const scrollThumbRef = useRef(null);
	const [startMove, setStartMove] = useState(0);
	const [topBias, setTopBias] = useState(0);

	const mouseDown = e => {

		if (e.type === 'touchstart') {
			setStartMove(e.changedTouches[0].clientY);
		}
		if (e.type === 'mousedown') {
			setStartMove(e.clientY);
		}
	};

	const mouseMove = e => {
		const trackHeight = scrollTrackRef.current.offsetHeight;
		const thumbHeight = e.target.offsetHeight;
		const offsetTop = scrollThumbRef.current.offsetTop;
		const clientY = e.type === 'touchmove' ? e.changedTouches[0].clientY : e.clientY;
		const bias = clientY - startMove + offsetTop;
		const biasePercent = (bias * 100) / trackHeight;
		const thumb = (thumbHeight * 100) / trackHeight;

		if (biasePercent < 0) {
			return setTopBias(0);
		}

		if (biasePercent > 100 - thumb) {
			return setTopBias(100 - thumb);
		}

		setTopBias(biasePercent);
		setStartMove(clientY);
	};

	return (
		<li className={styles.wrapper}>
			<div className={styles.title}>
				текст <br />
				сообщения
			</div>
			<div className={styles.textBlock}>
				<div className={styles.scrollbar}>
					<div ref={scrollTrackRef} className={styles.scrollbarTrack}>
						<div
							className={styles.scrollbarThumb}
							onTouchStart={mouseDown}
							onTouchMove={mouseMove}
							ref={scrollThumbRef}
							style={{
								top: `${topBias}%`,
							}}
						></div>
					</div>
				</div>
				<div className={styles.subTextBlock}>
					<div className={styles.overflow}>
						<div
							className={styles.subText}
							style={{
								transform: `translateY(-${topBias}%)`,
							}}
						>
							<p className={styles.subTextParagraph}>
								<span className={styles.subTextSpan}>
									Lorem ipsum dolor sit amet,
								</span>{' '}
								consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
								labore et dolore magna aliqua. Duis ut diam quam nulla. Mauris in
								aliquam sem fringilla ut morbi tincidunt. Vitae aliquet nec
								ullamcorper sit amet risus nullam eget felis. Nulla pharetra diam
								sit amet nisl. Eget nulla facilisi etiam dignissim diam quis enim
								lobortis. Est sit amet facilisis magna. Neque laoreet suspendisse
								interdum consectetur libero id. Nec ullamcorper sit amet risus
								nullam eget felis eget. Mollis aliquam ut porttitor leo a diam
								sollicitudin tempor id. Euismod quis viverra nibh cras pulvinar
								mattis nunc. Massa massa ultricies mi quis. Sit amet massa vitae
								tortor condimentum lacinia. Et malesuada fames ac turpis egestas
								integer eget. Elementum pulvinar etiam non quam lacus suspendisse
								faucibus interdum posuere.
							</p>
							<p className={styles.subTextParagraph}>
								Amet justo donec enim diam vulputate ut pharetra sit. Risus
								ultricies tristique nulla aliquet enim tortor at auctor. Velit sed
								ullamcorper morbi tincidunt ornare massa. Quis hendrerit dolor magna
								eget est lorem ipsum. Etiam dignissim diam quis enim. Gravida neque
								convallis a cras. Ut enim blandit volutpat maecenas volutpat. Mauris
								sit amet massa vitae tortor condimentum lacinia quis vel.
							</p>
							<p className={styles.subTextParagraph}>
								<span className={styles.subTextSpan}>
									Lorem ipsum dolor sit amet,
								</span>{' '}
								consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
								labore et dolore magna aliqua. Duis ut diam quam nulla. Mauris in
								aliquam sem fringilla ut morbi tincidunt. Vitae aliquet nec
								ullamcorper sit amet risus nullam eget felis. Nulla pharetra diam
								sit amet nisl. Eget nulla facilisi etiam dignissim diam quis enim
								lobortis. Est sit amet facilisis magna. Neque laoreet suspendisse
								interdum consectetur libero id. Nec ullamcorper sit amet risus
								nullam eget felis eget. Mollis aliquam ut porttitor leo a diam
								sollicitudin tempor id. Euismod quis viverra nibh cras pulvinar
								mattis nunc. Massa massa ultricies mi quis. Sit amet massa vitae
								tortor condimentum lacinia. Et malesuada fames ac turpis egestas
								integer eget. Elementum pulvinar etiam non quam lacus suspendisse
								faucibus interdum posuere.
							</p>
							<p className={styles.subTextParagraph}>
								Amet justo donec enim diam vulputate ut pharetra sit. Risus
								ultricies tristique nulla aliquet enim tortor at auctor. Velit sed
								ullamcorper morbi tincidunt ornare massa. Quis hendrerit dolor magna
								eget est lorem ipsum. Etiam dignissim diam quis enim. Gravida neque
								convallis a cras. Ut enim blandit volutpat maecenas volutpat. Mauris
								sit amet massa vitae tortor condimentum lacinia quis vel.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				className={cn(styles.img, styles.spermTopFirst, {
					[styles.active]: activeSlide === 1,
				})}
			></div>
			<div
				className={cn(styles.img, styles.spermTopMiddle, {
					[styles.active]: activeSlide === 1,
				})}
			></div>
			<div
				className={cn(styles.img, styles.spermTopLast, {
					[styles.active]: activeSlide === 1,
				})}
			></div>
			<div
				className={cn(styles.img, styles.spermBottomNear, {
					[styles.active]: activeSlide === 1,
				})}
			></div>
			<div
				className={cn(styles.img, styles.spermBottomFurther, {
					[styles.active]: activeSlide === 1,
				})}
			></div>
		</li>
	);
}
