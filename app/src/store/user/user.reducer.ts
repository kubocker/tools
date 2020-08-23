/* app */
import { Actions } from './user.actions';

export const reducer = (state: any, action: any) => {
  switch (action.type) {
  /**
   * 
   */
  case Actions.SetUser:
    return { ...state, user: action.user }

  /**
   * 
   */
  case Actions.LoggedIn:
    return { ...state, user: action.user }

  /**
   * 
   */
  case Actions.LoggedOut:
    return { ...state, user: null }

  /**
   * 
   */
  case Actions.SetThings:
    return { ...state, things: action.things }
  }

  return state;
}
