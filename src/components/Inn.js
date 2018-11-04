import { h } from 'hyperapp';

export default () => ( state , { updateInn }) => {

  return (
    <div>
      <div> Inn </div>
      <div> Level: {state.innLevel} </div>
      <button
        onclick={() => updateInn(1)}
      > Upgrade Inn </button>
    </div>
  );
}
