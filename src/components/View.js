import { h } from 'hyperapp';
import Buildable from './Buildable.js';
import Inn from './Inn.js';

export default ( state, { update, growFamilies, consumeFood }) => {
	return (
	<div
		oncreate={() => {
			setInterval(() => {
				update();
				growFamilies();
				consumeFood();
			}, state.timeStep );
		}}
	>
		<div>Money</div>
		<div>{ state.money }</div>
		<div>Food</div>
		<div>{ state.food }</div>
		<div>Families</div>
		<div>{ state.families.amount }</div>
		{state.buildings.map((building) => {
			return <Buildable {...building} />
		})}
		<Inn />
	</div>
	);
}
