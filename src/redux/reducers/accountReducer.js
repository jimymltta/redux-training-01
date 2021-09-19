// A reducer, in Redux, is a function that take
//a state + a action as arguments, and return a new state.
//(state + action) => newState

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state - action.payload;
    default:
      return state;
  }
};

export default reducer;
