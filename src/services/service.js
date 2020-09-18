import axios from 'axios';
import questions from '../mocks/questions.json';

const LOCAL_URL = 'http://localhost:3001/'

const getItem = (questions) => () => {
    const length = questions.length-1
    return questions[parseInt(Math.random()*length)]
}



export const  getQuestions = async () => {
    let questionsList;

    console.log('process.env.REACT_APP_LOCAL_SERVER', process.env.REACT_APP_LOCAL_SERVER)

    if (process.env.REACT_APP_LOCAL_SERVER !== 'e2e') {
        questionsList = questions
    } else {
        const {data: questionsList} = await axios.get(URL)
    }
    
    const rews = Array(6).fill(0).map(getItem(questionsList))
    return rews
}