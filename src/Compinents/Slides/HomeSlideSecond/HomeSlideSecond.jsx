import styles from './HomeSlideSecond.module.css';
import cn from 'classnames'

export function HomeSlideSecond() {
	return (
		<li className={styles.wrapper}>
			<div className={styles.title}>текст <br/>сообщения</div>
			<div className={styles.textBlock}>
				<div className={styles.scrollbar}>
					<div className={styles.scrollbarTrack}>
						<div className={styles.scrollbarThumb}></div>
					</div>
				</div>
				<div className={styles.subText}><span className={styles.subTextSpan}>Lorem ipsum dolor sit amet,</span> consectetur adipiscing elit, sed do 
					eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Duis ut diam quam nulla. Mauris in aliquam sem fringilla ut morbi 
					tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam eget 
					felis. Nulla pharetra diam sit amet nisl. Eget nulla facilisi etiam 
					dignissim diam quis enim lobortis. Est sit amet facilisis magna. 
					Neque laoreet suspendisse interdum consectetur libero id. 
					Nec ullamcorper sit amet risus nullam eget felis eget. 
					Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. 
					Euismod quis viverra nibh cras pulvinar mattis nunc. 
					Massa massa ultricies mi quis. Sit amet massa vitae tortor 
					condimentum lacinia. Et malesuada fames ac turpis egestas 
					integer eget. Elementum pulvinar etiam non quam lacus suspendisse 
					faucibus interdum posuere.

					Amet justo donec enim diam vulputate ut pharetra sit. 
					Risus ultricies tristique nulla aliquet enim tortor at auctor. 
					Velit sed ullamcorper morbi tincidunt ornare massa. 
					Quis hendrerit dolor magna eget est lorem ipsum. Etiam dignissim 
					diam quis enim. Gravida neque convallis a cras. Ut enim blandit 
					volutpat maecenas volutpat. Mauris sit amet massa vitae tortor 
					condimentum lacinia quis vel.
				</div>
			</div>
			<div className={cn(styles.img, styles.spermTopFirst)}></div>
			<div className={cn(styles.img, styles.spermTopMiddle)}></div>
			<div className={cn(styles.img, styles.spermTopLast)}></div>
			<div className={cn(styles.img, styles.spermBottomNear)}></div>
			<div className={cn(styles.img, styles.spermBottomFurther)}></div>
		</li>
	)
}