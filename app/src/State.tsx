/* react */
import React, { useReducer } from 'react';

interface User { };
let user: User | null = null;

export enum Actions {
  SetUser   = 'ユーザー情報取得',
  LoggedIn  = 'ログインしている状態',
  LoggedOut = 'ログアウトしている状態',

  SetThings = '何か',
}

export interface StateType {
  
  //
  user?: User | null;


  things: any[];
}


/**
 * 初期値
 * 状態
 */
let initialState: StateType = {
  user: null,

  things: [],
};


/**
 * 
 */
let reducer = (state: any, action: any) => {
  switch (action.type) {
  case Actions.SetUser:
    return { ...state, user: action.user };
  case Actions.LoggedIn:
    return { ...state, user: action.user };
  case Actions.LoggedOut:
    return { ...state, user: null };
  case Actions.SetThings:
    return { ...state, things: action.things };
  }
  return state;

};


/**
 * ログ
 * @param reducer 
 */
const logger = (reducer: any) => {
  const reducerWithLogger = (state: any, action: any) => {
    console.log("%cPrevious State:", "color: #9E9E9E; font-weight: 700;", state);
    console.log("%cAction:", "color: #00A7F7; font-weight: 700;", action);
    console.log("%cNext State:", "color: #47B04B; font-weight: 700;", reducer(state, action));
    return reducer(state,action);
  };
  return reducerWithLogger;
}

/**
 * 
 */
let AppContext = (React as any).createContext();


const loggerReducer = logger(reducer);


/**
 * 
 * @param props 
 */
function AppContextProvider(props: any) {
  const fullInitialState = {
    ...initialState,
    user,
  }

  let [state, dispatch] = useReducer(loggerReducer, fullInitialState);
  let value = { state, dispatch };

  if (user !== state.user) {
    
  }

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

let AppContextConsumer = AppContext.Consumer;


export {
  AppContext,
  AppContextProvider,
  AppContextConsumer,
};
