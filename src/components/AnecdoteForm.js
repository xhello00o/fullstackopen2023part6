import { useMutation, useQueryClient } from 'react-query'
import anecdoteService from '../requests.js/anecdoteService'


const AnecdoteForm = () => {
  const queryClient = useQueryClient()

  const newAnecdoteMutation = useMutation(
    anecdoteService.createNew, {
    onSuccess: () => {
      queryClient.invalidateQueries('anecdotes')
    }
  }
  )



  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    console.log("🚀 ~ file: AnecdoteForm.js:12 ~ onCreate ~ content:", content)
    event.target.anecdote.value = ''
    const newAnecdote ={
      content,
      votes:0
    }
    newAnecdoteMutation.mutate(newAnecdote)

    


}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
