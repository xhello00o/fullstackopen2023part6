import axios from "axios";
const baseUrl = 'http://localhost:3001/anecdotes'

const createNew = (anecdote)=>{
    return axios.post(baseUrl,anecdote).then(res=>res.data)
    
}

const fetchAll = ()=>{
    return axios.get(baseUrl).then(res => res.data)
}

const vote = (anecdote) => {
    const newAnecdote ={...anecdote,votes:anecdote.votes +=1}
    
    console.log("🚀 ~ file: anecdoteService.js:16 ~ vote ~ newAnecdote:", newAnecdote)
    return axios.put(`${baseUrl}/${anecdote.id}`,newAnecdote).then(res => res.data)
}

export default {createNew,fetchAll,vote}
