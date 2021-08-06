import { SUBMIT_ANSWER } from "./shared"
export const INITIAL_QUESTIONS = "INITIAL_QUESTIONS"


export function initialQuestions(questions){
    return {
        type: INITIAL_QUESTIONS,
        questions
    }
}

