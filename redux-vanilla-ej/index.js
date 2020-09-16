const redux = require('redux'); 
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
//types
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';
//action creator
function buyCake() {
  //action
  return {
    type: BUY_CAKE
  }
}
//action creator
function buyIceCream() {
  //action
  return {
    type: BUY_ICECREAM
  };
}

//Reducers

// const initialState = {
//   numsOfCakes: 10,
//   numsOfIceCreams: 20
// }
//cakes

const initialCakeState = {
  numsOfCakes: 10
}
//iceCreams
const initialIceState = {
  numsOfIceCreams: 20
}
// const reducer = (state = initialState, action) => {
//   switch(action.type){
//     case BUY_CAKE: return {
//       ...state.numsOfCakes,
//       numsOfCakes: (state.numsOfCakes - 1)
//     }
//     case BUY_ICECREAM: return {
//       ...state.numsOfIceCreams,
//       numsOfIceCreams: (state.numsOfIceCreams - 1)
//     }
//     default: return state
//   }
// }

//cake reducer
const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type){
    case BUY_CAKE: return {
      ...state,
      numsOfCakes: (state.numsOfCakes - 1)
    }
    default: return state
  }
}

//ice cream reducer
const iceCreamReducer = (state = initialIceState, action) => {
  switch(action.type){
    case BUY_ICECREAM: return {
      ...state,
      numsOfIceCreams: (state.numsOfIceCreams - 1)
    }
    default: return state
  }
}
//root of my reducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

//Store
const store = createStore(rootReducer, applyMiddleware(logger));
//test
console.log('initial state: ', store.getState());
const unSubscribe = store.subscribe(  ()=> {} );
store.dispatch(buyCake()); //-1 cake
store.dispatch(buyCake()); //-1 cake
store.dispatch(buyCake()); //-1 cake
store.dispatch(buyIceCream()); //-1 IceCream
store.dispatch(buyIceCream()); //-1 IceCream
store.dispatch(buyIceCream()); //-1 IceCream
unSubscribe(); //function for call store state 