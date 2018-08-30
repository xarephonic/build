import { h } from 'hyperapp';
import Buildable from './Buildable.js';


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
		<div>Food</div>
		<div>{ state.food }</div>
		{state.buildings.map((building) => {
			return <Buildable {...building} />
		})}
	</div>);
}
