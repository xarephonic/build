import { h } from 'hyperapp';
import Buildable from './Buildable.js';
import Inn from './Inn.js';

export default ( state, { update }) => {
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
		<Inn />
	</div>
	);
}
