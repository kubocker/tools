
/* capacitor */
import { Plugins } from '@capacitor/core';

/* app */
import { Actions } from './State';
import { hasExistingSession, getUser } from './user';

/**
 * Capacitor
 * プラグイン
 */
const {
  // モーダル
  Modals,

} = Plugins;


/**
 * 認証ガード
 * @param dispatch -
 * @param match    -
 * @param history  -
 */
export const authGuard = async (
    dispatch: any,
    match: any,
    history: any
  ) => {
  if (!await hasExistingSession()) {
    return await Modals.alert({
        title: '確認',
        message: '認証が取れていません\nログアウトします',
        buttonTitle: 'OK'
      })
      .then(_ => {
        history.replace('/login');
      });
  }

  const user$ = await getUser();
  dispatch({ type: Actions.SetUser, user: user$ });
}