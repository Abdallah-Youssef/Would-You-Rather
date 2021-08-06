import { _getQuestions, _getUsers, _setUsers, _saveQuestionAnswer } from "./_DATA";

export function getUsers() {return _getUsers()}
export function setUsers(users) {return _setUsers(users)}


export function saveQuestionAnswer(authedUser, qid, answer ){
    return _saveQuestionAnswer({ authedUser, qid, answer })
}

export function getData(){
    return Promise.all([_getUsers(), _getQuestions()])
}

