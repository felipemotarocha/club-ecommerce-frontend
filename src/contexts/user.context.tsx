import { createContext, FunctionComponent, useState } from 'react'

import User from '../types/user.types'

export interface IUserContext {
  currentUser: User | null
  isAuthenticated: boolean
  loginUser: (user: User) => void
  logoutUser: () => void
}

export const UserContext = createContext<IUserContext>({
  currentUser: null,
  isAuthenticated: false,
  loginUser: () => {},
  logoutUser: () => {}
})

interface UserContextProviderProps {
  initialValues?: Partial<IUserContext>
}

const UserContextProvider: FunctionComponent<UserContextProviderProps> = ({
  children,
  initialValues
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const isAuthenticated = currentUser !== null

  const loginUser = (user: User) => {
    setCurrentUser(user)
  }

  const logoutUser = () => {
    setCurrentUser(null)
  }

  return (
    <UserContext.Provider
      value={{
        currentUser,
        isAuthenticated,
        loginUser,
        logoutUser,
        ...initialValues
      }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
