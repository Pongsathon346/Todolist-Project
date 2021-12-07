export const SHOW_LIST_DATA = 'SHOW_LIST_DATA'
export const ADD_LIST_DATA = 'ADD_LIST_DATA'
export const DELETE_LIST_DATA = 'DELETE_LIST_DATA'
export const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION'
export const UPDATE_STATUS = 'UPDATE_STATUS'
export const INSERT_LIST_DATA = 'INSERT_LIST_DATA'

export const showListData = (user_id) => ({ type: SHOW_LIST_DATA, data:{user_id} })
export const addListData = (description, status, user_id) => ({ type: ADD_LIST_DATA, data:{description,status,user_id} })
export const deleteListData = (id) => ({ type: DELETE_LIST_DATA, data:{id} })
export const updateDesc = data => ({ type: UPDATE_DESCRIPTION, data })
export const updateStat = (id) => ({ type: UPDATE_STATUS, data:{id} })
export const insertListData = data => ({ type: INSERT_LIST_DATA, data })

export const REGISTER_USER = 'REGISTER_USER'
export const LOGIN_USER = 'LOGIN_USER'

export const registerUser = (user,email,password) => ({ type: REGISTER_USER, data:{user,email,password} })
export const loginUser = (username,password) => ({ type: LOGIN_USER, data:{username,password} })