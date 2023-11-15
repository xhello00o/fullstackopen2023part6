# fullstackopen2023part6
## Course Content
We'll learn about the lightweight version of Redux directly supported by React, namely the React context and useRedux hook, as well as the React Query library that simplifies the server state management.

There are _ projects in this part. The first one is a simple counter which uses redux to count its state. The second one is an Anecdotes list voting application that allows for 'vote' or 'like' of their favourite anecdote.

For more details, click [here](https://fullstackopen.com/en/part6/flux_architecture_and_redux)

### Flux-architecture and Redux ( Exercise 6.1 - 6.8 )
The use of ```redux``` to store the states and ```react-redux``` to share these states across different components. Exercise 6.1 - 6.2 created a simple counter that can be found in the [```[main]```](https://github.com/xhello00o/fullstackopen2023part6/tree/main) branch. Whereas, exercise 6.3 onwards created an Anecdote Voting App that can be found in the [```[part6.3_redux_anecdote]```](https://github.com/xhello00o/fullstackopen2023part6/tree/part6.3_redux_anecdote/) branch. 

** Note that the Anecdote Voting App made in exercise 6.3 is continued on in the other exercises further down. Therefore, what you see is the final state of the Application.

## Many Reducers ( Exercise 6.9 - 6.13 )
When more reducers are required for more states, the ```combinedReducers``` function from ```redux``` can be used to create a store with multiple states/reducers. This was intially used to create a filter for the Anecdote Voting App, however, later on in this course, ```configureStore```function from ```reduxjs/toolkit``` was introduced to replace the ```combinedReducers``` function in handling multiple states. THe benefit of this is that ```configureStore``` function has many additional benefits such as the effortless integration of development tools and many commonly used libraries without the need for additional configuration. A Notification was also created using a new reducer to store the notifcation state.

