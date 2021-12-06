export const SHOW_LIST_DATA = 'SHOW_LIST_DATA'
export const ADD_LIST_DATA = 'ADD_LIST_DATA'
export const DELETE_LIST_DATA = 'DELETE_LIST_DATA'
export const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION'
export const UPDATE_STATUS = 'UPDATE_STATUS'
export const UPDATE_DUEDATE = 'UPDATE_DUEDATE'

export const showListData = data => ({ type: SHOW_LIST_DATA, data })
export const addListData = data => ({ type: ADD_LIST_DATA, data })
export const deleteListData = data => ({ type: DELETE_LIST_DATA, data })
export const updateDesc = data => ({ type: UPDATE_DESCRIPTION, data })
export const updateStat = data => ({ type: UPDATE_STATUS, data })
export const updateDue = data => ({ type: UPDATE_DUEDATE, data })

export const REGISTER_USER = 'REGISTER_USER'
export const LOGIN_USER = 'LOGIN_USER'

export const registerUser = (user,email,password) => ({ type: REGISTER_USER, data:{user,email,password} })
export const loginUser = (username,password) => ({ type: LOGIN_USER, data:{username,password} })