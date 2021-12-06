import { combineReducers } from "redux";

import todolist from "./todolist";
import user from "./user";

export default combineReducers({
    todolist,
    user
})