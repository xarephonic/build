import { h } from 'hyperapp';
import House from './House.js';
import Workshop from './Workshop.js';


export default ( state, { updateMoney, increaseLevel, update }) => {
	return (
	<div
		oncreate={() => { 
			setInterval(() => { 
				update();
			}, state.timeStep ); 
		}}
	>
		<div>Money</div>
		<div>{ state.money }</div>
		<House />
		<Workshop />
	</div>);
}