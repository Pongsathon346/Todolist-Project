import { call, put, takeEvery } from 'redux-saga/effects'

import { 
    SHOW_LIST_DATA,
    showListData,
    ADD_LIST_DATA,
    addListData,
    DELETE_LIST_DATA,
    deleteListData,
    updateDesc,
    UPDATE_DESCRIPTION,
    updateDue,
    UPDATE_DUEDATE,
    updateStat,
    UPDATE_STATUS,
    REGISTER_USER,
    registerUser,
    LOGIN_USER,
    loginUser 
} from './actions'

//lists
import { showTodolist, addTodolist, deleteTodolist, updateDescription, updateStatus, updateDueDate } from './apis/todolist'

//users
import { login, register } from './apis/user'

function* showList(action){
    try{
        const data = yield call(showTodolist())
        yield put(showListData)
    }catch(err){
        console.log(err)
    }
}

function* addList(action){
    try{
        const data = yield call(addTodolist())
        yield put(addListData)
    }catch(err){
        console.log(err)
    }
}

function* deleteList(action){
    try{
        const data = yield call(deleteTodolist())
        yield put(deleteListData)
    }catch(err){
        console.log(err)
    }
}

function* updateDescrip(action){
    try{
        const data = yield call(updateDescription())
        yield put(updateDesc)
    }catch(err){
        console.log(err)
    }
}

function* updatestatus(action){
    try{
        const data = yield call(updateStatus())
        yield put(updateStat)
    }catch(err){
        console.log(err)
    }
}

function* updateDuedate(action){
    try{
        const data = yield call(updateDueDate())
        yield put(updateDue)
    }catch(err){
        console.log(err)
    }
}

function* userregister(action){
    try{
        const data = yield call(register(action.data.user, action.data.email, action.data.password))
        yield put(registerUser)
    }catch(err){
        console.log(err)
    }
}

function* userlogin(action){
    try{
        const data = yield call(login(action.data.username, action.data.password))
        yield put(loginUser)
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
    yield takeEvery(UPDATE_DUEDATE, updateDuedate)
    yield takeEvery(REGISTER_USER, userregister)
    yield takeEvery(LOGIN_USER, userlogin)
}