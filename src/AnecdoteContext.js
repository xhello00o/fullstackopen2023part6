import { createContext, useReducer, useContext } from 'react'

const notificationReducer = (state,action) =>{
    switch (action.type) {
        case "setMessage":
            const content = action.payload
            return content
        case "removeMessage":
            return ""
        default:
            return ""
    }
}

const NotificationContext = createContext()
export const NotificationContextProvider = (props) => {
    const [notification, notificationDispatch] = useReducer(notificationReducer,"")
    return (
        <NotificationContext.Provider value={[notification,notificationDispatch]}>
            {props.children}
        </NotificationContext.Provider>
    )
}



export const useNotification = ()=> {
    const NotificationandDispatch = useContext(NotificationContext)
    return NotificationandDispatch[0]
}

export const useNotificationDispatch =() => {
    const NotificationandDispatch = useContext(NotificationContext)
    return NotificationandDispatch[1]
}

export default NotificationContext