import  {combineReducers}  from "redux";
import { counterReducer } from "../Reducer/counter.reducer";

export const rootReducer =combineReducers({
    counter: counterReducer
})