import { REGISTER_USER, LOGIN_USER } from "../actions";

export default ( state = {}, { type, data }) => {
    switch(type){
        case REGISTER_USER:
            return data
        case LOGIN_USER:
            return data
        default:
            return state
    }
}