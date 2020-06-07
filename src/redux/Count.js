


export const increment = (count) => {
  return {
    type: "INCREMENT_COUNT"
  }

}

export const decrement = (count) => {
  return {
    type: "DECREMENT_COUNT"
  }
}

const countReducer = (state = 0, action) => {
  switch(action.type) {
    case "INCREMENT_COUNT":
      return state + 1;
    case "DECREMENT_COUNT": 
      return state - 1;
    default: 
      return state;
  }
}

export default countReducer