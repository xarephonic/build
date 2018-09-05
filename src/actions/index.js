export default {
  updateLevel: value => state => {
  	const updateObj = state.buildings.find((building) => {
      return building.type === value.type;
    });

  	updateObj.level += value.amount

  	return updateObj;
  },
  updateMoney: value => state => ({ money: state.money + value }),
  updateFood: value => state => ({ food: state.food + value }),
  growFamilies: () => state => {
    const updateObj = {};

    if(state.timeStepAccrued % state.families.growthTimer === 0) {
      const currentFamilies = state.families;
      const houseLevel = state.buildings.find((building) => {
        return building.type === 'house';
      }).level;

      if(currentFamilies.amount !== houseLevel) {
        currentFamilies.amount += currentFamilies.growth
      }
      updateObj.families = currentFamilies;
    }

    return updateObj;
  },
  consumeFood: () => state => {
    const updateObj = {};
    if(state.timeStepAccrued % state.families.foodConsumptionTimer === 0) {
      //we dont want food to go negative
      updateObj.food = Math.max(0,state.food - state.families.amount * state.families.foodConsumption);
    }

    return updateObj;
  },
  update: () => state => {

    const updateObj = {};

    const newAccruedTimeStep = state.timeStepAccrued + state.timeStep <= state.timeResetAmount
      ? state.timeStepAccrued + state.timeStep
      : 0;

    updateObj.timeStepAccrued = newAccruedTimeStep;
    updateObj.money = state.money;

    state.buildings.forEach((building) => {
      if(newAccruedTimeStep % building.timer === 0) {
        updateObj.money += building.level * building.income;
        if(building.special) {
          const specialResult = building.special(building.level)(state);
          Object.keys(specialResult).forEach((key) => {
            if(updateObj.hasOwnProperty(key)){
              updateObj[key] += specialResult[key];
            } else {
              updateObj[key] = specialResult[key];
            }
          });
        }
      }
    });
    //console.log(state);
    return updateObj;
  }
};
