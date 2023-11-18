# fullstackopen2023part6
## Course Content
We'll learn about the lightweight version of Redux directly supported by React, namely the React context and useRedux hook, as well as the React Query library that simplifies the server state management.

There are 2 projects in this part. The first one is a simple counter which uses redux to count its state. The second one is an Anecdotes list voting application that allows for 'vote' or 'like' of their favourite anecdote. The second project was made using different methods (```react-redux``` \ ```react-query```)

For more details, click [here](https://fullstackopen.com/en/part6/flux_architecture_and_redux)

### Flux-architecture and Redux ( Exercise 6.1 - 6.8 )
The use ```createStore``` of ```redux``` to store the states while ```useSelector``` and ```useDispatch``` from ```react-redux``` to share and change these states across different components . Exercise 6.1 - 6.2 created a simple counter that can be found in the [```[main]```](https://github.com/xhello00o/fullstackopen2023part6/tree/main) branch. Whereas, exercise 6.3 onwards created an Anecdote Voting App that can be found in the [```[part6.3_redux_anecdote]```](https://github.com/xhello00o/fullstackopen2023part6/tree/part6.3_redux_anecdote/) branch. 

** Note that the Anecdote Voting App made in exercise 6.3 is continued on in the other exercises further down. Therefore, what you see is the final state of the Application.

## Many Reducers ( Exercise 6.9 - 6.13 )
When more reducers are required for more states, the ```combinedReducers``` function from ```redux``` can be used to create a store with multiple states/reducers. This was intially used to create a filter for the Anecdote Voting App, however, later on in this course, ```configureStore```function from ```reduxjs/toolkit``` was introduced to replace the ```combinedReducers``` function in handling multiple states. ```configureStore``` function has many additional benefits such as the effortless integration of development tools and many commonly used libraries without the need for additional configuration. 
A Notification was also created using a new reducer to store the notifcation state. ```reduxjs/toolkit``` works with ```react-redux``` to manage and change states across different components.

## Communicating with a server with redux application ( Exercise 6.14 - 6.19 )
_This is a continuation of the previous exercises for the Anecdote Voting Application._
```json-server``` was used to build a temporary backend server and a anecdoteService was created to handle GET/POST/PUT request to the server using ```axios```. Using Redux Thunk, several asynchronous services that require ```async/await``` can be handle seperately as Redux Thunk allows for the a function that takes in ```dispatch``` from Redux store to be return. Similar changes was also made to the notification reducer with the use of the Redux Thunk to handle the appearance and disappearance of the notification. 

E.g
```javascript
export const initialize=()=>{
  return async (dispatch) => {
    const response = await anecdoteService.getAll()
    console.log("🚀 ~ file: anecdoteReducer.js:59 ~ return ~ response:", response)
    
   dispatch(setAll(response))
  }
}
```
## React Query, useReducer and the context ( Exercises 6.20 - 6.24 )
The same Anecdote Voting Application was made but it is using ```@tanstack/react-query``` instead. As compared with ```redux```, a client-state library, ```react-query``` is more a server-state library which means that it acts as a cache to store data instead of storing it in the states like ```redux```. The ```useQuery```  from ``` react-query``` is used to handle fetching from and server and storing in cache, while ```useMutation``` is used to handle change requests and make changes to the cache. Similar to ```redux```, ```useReducer``` for ```react``` is used to create the reducer to handle the actions and state. While the context is created using ```createContext``` and ```useContext``` from ```react``` to pass these states across components. 

** This application was done using ```react-query``` version 3.39.3. While the current version is 4. So there may be some differences.

These exercises can be found in the branch [```[part6.20_query_anecdote]```](https://github.com/xhello00o/fullstackopen2023part6/blob/part6.20_query_anecdote) branch. 
