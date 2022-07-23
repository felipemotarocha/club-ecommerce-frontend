import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import User from '../../../types/user.types'

interface InitialState {
  currentUser: User | null
  isAuthenticated: boolean
}

const initialState: InitialState = {
  currentUser: null,
  isAuthenticated: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload
      state.isAuthenticated = true
    },
    logoutUser: (state) => {
      state.currentUser = null
      state.isAuthenticated = false
    }
  }
})

export const { loginUser, logoutUser } = userSlice.actions

export default userSlice.reducer
