import {Button} from '../../Button/Button'
import {Popup} from '../../Popup/Popup'
import styles from './HomeSlideThird.module.css';

export function HomeSlideThird() {
	return (
		<li>
			<div>картинка с пшиком</div>
			<div>
				<div>Ключевое сообщение</div>
				<div>brend<span>xy</span></div>
				<div>
					<div>Ehicula ipsum a arcu 
						cursus vitae. Eu non 
						diam phasellus 
						vestibulum lorem sed 
						risus ultricies
					</div>
					<div>
						<div>A arcu cursus vitae</div>
						<Button>Подробнее</Button>
					</div>
				</div>
				<Popup/>
			</div>
		</li>
	)
}