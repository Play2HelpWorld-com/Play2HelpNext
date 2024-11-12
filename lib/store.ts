import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './features/auth/authSlice'
import { usersReducer } from './features/users/userSlice'
import { notificationReducer } from './features/notifications/notificationSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      users: usersReducer,
      notifications: notificationReducer
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']