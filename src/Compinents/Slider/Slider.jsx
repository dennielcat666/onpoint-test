import { useState, Children, cloneElement } from 'react';
import cn from 'classnames';
import styles from './Slider.module.css';

export function Slider({ children }) {
	const [visibleTab, setVisibleTab] = useState(0);

	const handleClickArrow = direction => {
		if (visibleTab !== 0 && direction === 'left') {
			setVisibleTab(visibleTab - 1);
		}
		if (children.length > visibleTab + 1 && direction === 'right') {
			setVisibleTab(visibleTab + 1);
		}
	};

	return (
		<div className={styles.tabs}>
			<div className={styles.tabsBlocks}>
				{Children.map(children, (slide, index) =>
					cloneElement(slide, { visible: index === visibleTab })
				)}
			</div>
			<div className={styles.tabsLinks}>
				<button
					className={cn(styles.tabsLinkTitle, styles.tabsLinkTitleLeft)}
					onClick={() => handleClickArrow('left')}
				/>
				{Children.map(children, (slide, index) => {
					return (
						<button
							className={cn(styles.tabsCircle, visibleTab === index && styles.active)}
							onClick={() => setVisibleTab(index)}
						/>
					);
				})}
				<button
					className={cn(styles.tabsLinkTitle, styles.tabsLinkTitleRigt)}
					onClick={() => handleClickArrow('right')}
				/>
			</div>
		</div>
	);
}
