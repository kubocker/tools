/* app */
import { Actions } from './State';
import { hasExistingSession, getUser } from './user';

/**
 * 認証保護
 */
export const authGuard = async (
  dispatch: any,
  match: any,
  history: any
) => {

  if (!await hasExistingSession()) {
    return history.replace('/login');
  }

  const user$ = await getUser();
  dispatch({ type: Actions.SetUser, user: user$ });
}
