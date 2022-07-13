import User from '../../../types/user.types'
import UserActionTypes from './user.action-types'

interface LoginUserAction {
  type: typeof UserActionTypes.LOGIN
  payload: User
}

export const loginUser = (payload: User): LoginUserAction => ({
  type: UserActionTypes.LOGIN,
  payload
})

interface LogoutUserAction {
  type: typeof UserActionTypes.LOGOUT
}

export const logoutUser = (): LogoutUserAction => ({
  type: UserActionTypes.LOGOUT
})

export type UserActions = LoginUserAction | LogoutUserAction
