import { useState } from 'react';
import {Image} from '../Image/Image'
import { Carousel } from '../Carousel/Carousel';
import { HomeScreenFirst } from '../Screen/HomeScreenFirst/HomeScreenFirst';
import { HomeScreenSecond } from '../Screen/HomeScreenSecond/HomeScreenSecond';
import { HomeScreenThird } from '../Screen/HomeScreenThird/HomeScreenThird';

import home from './home.svg'
import logo from './logo.png'
import styles from './App.module.css';

export function App() {

	const [activeSlide, setActiveSlide] = useState(0);

	const handleClick = () => {
		setActiveSlide(1)
		console.log('state', activeSlide);
	}

	return (
		<div className={styles.appWrapper}>
			<div className={styles.controlPanel}>
				<button onClick={() => (setActiveSlide(0))} className={styles.homeButton}>
					<Image
						className={styles.homeImg}
						src={home}
					/>
				</button>
				<div className={styles.homeText}>Project</div>
			</div>
			<Carousel setActiveSlide={setActiveSlide} activeSlide={activeSlide}>
				<HomeScreenFirst onClick={handleClick} />
				<HomeScreenSecond activeSlide={activeSlide}/>
				<HomeScreenThird/>
			</Carousel>
			<Image
				className={styles.logoImg}
				src={logo}
			/>
		</div>
	);
}

export default App;
