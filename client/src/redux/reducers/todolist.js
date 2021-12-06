import { INSERT_LIST_DATA } from "../actions";

export default ( state = {}, { type, data }) => {
    switch(type){
        case INSERT_LIST_DATA:
            return data
        default:
            return state
    }
}