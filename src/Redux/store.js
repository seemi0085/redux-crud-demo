import { createStore } from "redux";
// import UserReducer from "./Reducers/UserReducer";
import rootReducer from "./Reducers";

//const store = createStore(UserReducer)
const store = createStore(rootReducer)

export default store;