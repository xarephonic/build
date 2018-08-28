export default {
  updateLevel: value => state => {
  	const updateObj = state.buildings[value.type];

  	updateObj.level += value.amount

  	return updateObj;
  },
  updateMoney: value => state => ({ money: state.money + value }),
  update: () => state => {
  	const newAccruedTimeStep = state.timeStepAccrued + state.timeStep <= state.timeResetAmount
  									? state.timeStepAccrued + state.timeStep
  									: 0;
	let totalIncome = 0;

	Object.entries(state.buildings).forEach((building) => {
		building = building[1];
		totalIncome += newAccruedTimeStep % building.timer === 0 ? building.level * building.income : 0;
	});

	console.log(`Generated Income: ${totalIncome}`);
	//console.log(state);
  	return {
  		timeStepAccrued: newAccruedTimeStep,
  		money: state.money + totalIncome
  	}
  }
};
