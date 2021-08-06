import {Image} from '../Image/Image'
import { Carousel } from '../Carousel/Carousel';
import { HomeSlideFirst } from '../Slides/HomeSlideFirst/HomeSlideFirst';
import { HomeSlideSecond } from '../Slides/HomeSlideSecond/HomeSlideSecond';
import { HomeSlideThird } from '../Slides/HomeSlideThird/HomeSlideThird';

import home from './home.svg'
import logo from './logo.png'
import styles from './App.module.css';

export function App() {
	return (
		<div className={styles.appWrapper}>
			<div className={styles.controlPanel}>
				<button className={styles.homeButton}>
					<Image
						className={styles.homeImg}
						src={home}
					/>
				</button>
				<div className={styles.homeText}>Project</div>
			</div>
			<Carousel>
				{/* <HomeSlideFirst /> */}
				{/* <HomeSlideSecond/> */}
				<HomeSlideThird/>
			</Carousel>
			<Image
				className={styles.logoImg}
				src={logo}
			/>
		</div>
	);
}

export default App;
