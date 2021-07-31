 export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUser (name){
    return {
        type: SET_AUTHED_USER,
        id: name.replace(' ', '').toLowerCase()
    }
}

