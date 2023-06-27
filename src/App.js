import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import anecdoteService from './requests.js/anecdoteService'
import { useNotificationDispatch } from './AnecdoteContext'

const App = () => {

  const queryClient = useQueryClient()
  const newVoteMutation = useMutation(
    anecdoteService.vote,
    { onSuccess: (newAnecdote) => {
        const anecdotes = queryClient.getQueryData('anecdotes',)
        queryClient.setQueryData('anecdotes', anecdotes.map(obj => obj.id === newAnecdote.id ? newAnecdote : obj))
      }
    })


    const notificationDispatch = useNotificationDispatch()


  const handleVote = (anecdote) => {
    console.log("🚀 ~ file: App.js:35 ~ handleVote ~ anecdote:", anecdote)
    newVoteMutation.mutate(anecdote)
    notificationDispatch({type:'setMessage',payload:`you have voted for '${anecdote.content}'`})
    setTimeout(() => {notificationDispatch({type:'removeMessage'})
    }, 5000);

  }


  const result = useQuery(
    'anecdotes',
    anecdoteService.fetchAll,
    { retry: false }
  )
  console.log(result)
  console.log('testing')

  if (result.status === 'loading') {
    return <p> Loading...</p>
  }
  if (result.status === 'error') {
    return <p>anecdote service not available due to problems in server</p>
  }

  const anecdotes = result.data


  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
