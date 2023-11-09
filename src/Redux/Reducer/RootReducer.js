import { combineReducers } from "redux";
import StepFormData from "./StepFormData";


const RootReducer = combineReducers({
    Data :StepFormData
})

export default RootReducer;