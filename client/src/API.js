import { _getQuestions, _getUsers, _setUsers, _saveQuestionAnswer, _saveQuestion } from "./_DATA";

export function getUsers() {return _getUsers()}
export function setUsers(users) {return _setUsers(users)}
export function saveQuestion(optionOneText, optionTwoText, author) {return _saveQuestion({optionOneText, optionTwoText, author})}

export function saveQuestionAnswer(authedUser, qid, answer ){
    return _saveQuestionAnswer({ authedUser, qid, answer })
}

export function getData(){
    return Promise.all([_getUsers(), _getQuestions()])
}

