import { _getQuestions, _getUsers, _setUsers } from "./_DATA";

export function getUsers() {return _getUsers()}
export function setUsers(users) {return _setUsers(users)}

export function getData(){
    return Promise.all([_getUsers(), _getQuestions()])
}