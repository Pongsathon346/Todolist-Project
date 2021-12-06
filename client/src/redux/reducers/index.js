import { combineReducers } from "redux";

import project from './project'
import todolist from "./todolist";
import user from "./user";

export default combineReducers({
    todolist,
    user
})