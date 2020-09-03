import q from './questions.json'

const getItem = () => {
    return q[parseInt(Math.random()*q.length-1)]
}

export const getQuestions = () => {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            const rews = Array(6).fill(0).map(getItem)
            resolve(rews)
        }, 1500)
    })
}