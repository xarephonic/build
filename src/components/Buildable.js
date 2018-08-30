import { h } from 'hyperapp';

/**
 * first object in the store is 'state' (an object - {})
 * second object in the store is 'actions' (an object - {})
 * here we destructure what is needed
 * 'num' from 'state' and 'add'/'sub' from 'actions'
 */
export default (building) => ( state , { updateLevel, updateMoney }) => {

  const {
    name,
    type,
    level,
    timer,
    income,
    cost,
    unlocked
  } = building;

  return (
  <div>
    <div>{ name }</div>
    <div>{ level }</div>
    <div>{`Generating ${level * income} every ${timer/1000} seconds`}</div>
    <div>{`${level * income / (timer / 1000)} per second`}</div>
    <button onclick={() => {
      updateLevel({ type, amount: 1});
      updateMoney(cost * -1);
    }}>+</button>
    <button onclick={() => {
      updateLevel({ type, amount: 10});
      updateMoney(cost * -10);
    }}>++</button>
  </div>);
}
