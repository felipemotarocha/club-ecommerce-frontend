import User from '../../../types/user.types'
import UserActionTypes from './user.action-types'

export const loginUser = (payload: User) => ({
  type: UserActionTypes.LOGIN,
  payload
})

export const logout = () => ({ type: UserActionTypes.LOGOUT })
