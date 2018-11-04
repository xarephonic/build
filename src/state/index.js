import actions from '../actions/index.js';

export default {
  money: 0,
  food: 0,
  families: {
    amount: 1,
    growth: 1,
    growthTimer: 16000,
    foodConsumption: 1,
    foodConsumptionTimer: 4000
  },
  buildings: [
    {
      name: 'House',
      type: 'house',
      level: 1,
      timer: 1000,
      income: 1,
      cost: 1,
      unlocked: true
    },
    {
      name: 'Workshop',
      type: 'workshop',
      level: 0,
  		timer: 2000,
  		income: 3,
      cost: 5,
      unlocked: true
	  },
    {
      name: 'Farm',
      type: 'farm',
      level: 0,
      timer: 4000,
      income: 7,
      cost: 10,
      unlocked: true,
      special: actions.updateFood
    }
  ],
  innLevel: 0,
  timeStep: 500,
  timeStepAccrued: 0,
  timeResetAmount: 100000
};
