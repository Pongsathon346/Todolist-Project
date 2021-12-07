import { call, put, takeEvery } from 'redux-saga/effects'

import { 
    SHOW_LIST_DATA,
    showListData,
    ADD_LIST_DATA,
    DELETE_LIST_DATA,
    UPDATE_DESCRIPTION,
    UPDATE_STATUS,
    LOGIN_USER,
    REGISTER_USER,
    insertListData,
    UNDO_STATUS,
} from './actions'

//lists
import { showTodolist, addTodolist, deleteTodolist, updateDescription, updateStatus, undoStat } from './apis/todolist'

//users
import { login, register } from './apis/user'

function* showList(action){
    try{
        const data = yield call(showTodolist, action.data.user_id)
        yield put(insertListData(data))
    }catch(err){
        console.log(err)
    }
}

function* addList(action){
    try{
        yield call(addTodolist, action.data.description, action.data.status, action.data.user_id)
    }catch(err){
        console.log(err)
    }
}

function* deleteList(action){
    try{
        yield call(deleteTodolist, action.data.id)
    }catch(err){
        console.log(err)
    }
}

function* updateDescrip(action){
    try{
        yield call(updateDescription())
    }catch(err){
        console.log(err)
    }
}

function* updatestatus(action){
    try{
        yield call(updateStatus,action.data.id,action.data.status)
    }catch(err){
        console.log(err)
    }
}

function* undostatus(action){
    try{
        yield call(undoStat,action.data.id)
    }catch(err){
        console.log(err);
    }
}

function* userregister(action){
    try{
        yield call(register, action.data.user, action.data.email, action.data.password)
    }catch(err){
        console.log(err)
    }
}

function* userlogin(action){
    try{
        yield call(login(action.data.username, action.data.password))
    }catch(err){
        console.log(err)
    }
}

export default function* mySaga(){
    yield takeEvery(SHOW_LIST_DATA, showList)
    yield takeEvery(ADD_LIST_DATA, addList)
    yield takeEvery(DELETE_LIST_DATA, deleteList)
    yield takeEvery(UPDATE_STATUS, updatestatus)
    yield takeEvery(UPDATE_DESCRIPTION, updateDescrip)
    yield takeEvery(REGISTER_USER, userregister)
    yield takeEvery(LOGIN_USER, userlogin)
    yield takeEvery(UNDO_STATUS, undostatus)
}