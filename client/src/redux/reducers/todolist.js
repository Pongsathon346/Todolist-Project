import { SHOW_LIST_DATA, ADD_LIST_DATA, DELETE_LIST_DATA, UPDATE_DESCRIPTION, UPDATE_DUEDATE, UPDATE_STATUS } from "../actions";

export default ( state = {}, { type, data }) => {
    switch(type){
        case SHOW_LIST_DATA:
            return data
        case ADD_LIST_DATA:
            return data
        case DELETE_LIST_DATA:
            return data
        case UPDATE_DESCRIPTION:
            return data
        case UPDATE_DUEDATE:
            return data
        case UPDATE_STATUS:
            return data
        default:
            return state
    }
}