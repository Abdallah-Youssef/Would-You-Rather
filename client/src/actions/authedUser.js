import { name_to_id } from "./users"
export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const LOG_OUT = 'LOG_OUT'


export function setAuthedUser(name) {
    return {
        type: SET_AUTHED_USER,
        id: name_to_id(name)
    }
}

export function logOut(){
    return {
        type: LOG_OUT
    }
}

