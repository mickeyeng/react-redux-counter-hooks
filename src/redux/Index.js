import {createStore} from "redux";
import countReducer from "./Count";

const store = createStore(countReducer)

store.subscribe(() => {
  console.log(store.getState());
})

export default store