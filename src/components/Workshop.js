import { h } from 'hyperapp';

/**
 * first object in the store is 'state' (an object - {})
 * second object in the store is 'actions' (an object - {})
 * here we destructure what is needed
 * 'num' from 'state' and 'add'/'sub' from 'actions'
 */
export default () => ({ buildings }, { updateLevel, updateMoney }) => {

  const {
    level,
    timer,
    income
  } = buildings.workshop;

  return (
  <div>
    <div>Workshop</div>
    <div>{ level }</div>
    <div>{`Generating ${level * income} every ${timer/1000} seconds`}</div>
    <div>{`${level * income / (timer / 1000)} per second`}</div>
    <button onclick={() => {
      updateLevel({ type: 'workshop', amount: 1});
      updateMoney(-1);
    }}>+</button>
    <button onclick={() => {
      updateLevel({ type: 'workshop', amount: 10});
      updateMoney(-10);
    }}>++</button>
  </div>);
}