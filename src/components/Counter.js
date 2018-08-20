import { h } from 'hyperapp';

/**
 * first object in the store is 'state' (an object - {})
 * second object in the store is 'actions' (an object - {})
 * here we destructure what is needed
 * 'num' from 'state' and 'add'/'sub' from 'actions'
 */
export default ({ houseLevel }, { increaseLevel }) =>
  <div>
    <div>House</div>
    <div>{ houseLevel }</div>
    <button onclick={() => {
      increaseLevel(1);
    }}>+</button>
    <button onclick={() => {
      increaseLevel(10);
    }}>++</button>
  </div>;
