export const LOG_IN = "LOG_IN"

export function name_to_id(name){
    return name.split(" ").join("").toLowerCase()
}



export function userLogIn({name, avatarURL}){
    return {
        type: LOG_IN,
        name,
        avatarURL,
        id: name_to_id(name)
    }
}

