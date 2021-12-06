import { SHOW_LIST_DATA } from "../actions";

export default ( state = {}, { type, data }) => {
    switch(type){
        case SHOW_LIST_DATA:
            return data
        default:
            return state
    }
}