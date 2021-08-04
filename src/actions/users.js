export const INITIAL_USERS = "INITIAL_USERS"
export const LOG_IN = "LOG_IN"


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
        avatarURL
    }
}