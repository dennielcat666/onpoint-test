import { useState } from 'react'

import cn from 'classnames'
import styles from './Slider.module.css';

export function Slide({children, visible}) {

	return (
		<div className={cn(styles.tabsBlocksContent, visible && styles.visible)}>
			{children}
		</div>
	)
}