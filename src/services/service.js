import axios from 'axios';

const getItem = (questions) => () => {
    const length = questions.length-1
    return questions[parseInt(Math.random()*length)]
}

const URL = 'http://localhost:3001/'

export const  getQuestions = async () => {
    const {data: questions} = await axios.get(URL)
    
    const rews = Array(6).fill(0).map(getItem(questions))
    return rews
}