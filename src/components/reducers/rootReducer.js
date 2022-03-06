import * as actionTypes from '../actions/actions';

const initialState = {
  counter: 0,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.INCREMENT:
      //   const newState = Object.assign({}, state);
      //   newState.counter = state.counter + 1;
      //   return newState;
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
  }
  return state;
}

export default rootReducer;
