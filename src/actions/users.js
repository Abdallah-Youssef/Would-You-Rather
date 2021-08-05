export const INITIAL_USERS = "INITIAL_USERS"
export const LOG_IN = "LOG_IN"

function name_to_id(name){
    return name.replace(' ', '').toLowerCase()
}

export function initialUsers(users){
    return {
        type: INITIAL_USERS,
        users
    }
}

export function userLogIn({name, avatarURL}){
    return {
        type: LOG_IN,
        name,
        avatarURL,
        id: name_to_id(name)
    }
}