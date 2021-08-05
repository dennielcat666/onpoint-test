import {Carousel} from '../Carousel/Carousel'
import {SubSlideFirst} from '../Slides/SubSlideFirst/SubSlideFirst'
import {SubSlideSecond} from '../Slides/SubSlideSecond/SubSlideSecond'
import styles from './Popup.module.css';

export function Popup() {
	return (
		<div>
			<button>крестик</button>
			<div>преимущества</div>
			<div>brend<span>xy</span></div>
			<Carousel>
				<SubSlideFirst></SubSlideFirst>
				<SubSlideSecond></SubSlideSecond>
			</Carousel>
		</div>
	)
}