import React, { useReducer } from "react";

interface User {}

export enum Actions {
  SetUser = 'setUser',
  LoggedIn = 'loggedin',
  LoggedOut = 'loggedout',

  // An action to set some loaded data.
  SetThings = 'setthings'
}

const userItem = window.localStorage.getItem('user');
let user: User | null = null;
if (userItem) {
  user = JSON.parse(userItem);
}


export interface StateType {
  user?: User | null;

  // This is where you'd put references to loaded data
  // types from Firebase
  things: any[];
}

let initialState: StateType = {
  user: null,
  things: []
};


let reducer = (state: any, action: any) => {
  switch (action.type) {
    case Actions.SetUser:
      return { ...state, user: action.user }
    case Actions.LoggedIn:
      return { ...state, user: action.user }
    case Actions.LoggedOut:
      return { ...state, user: null }
    case Actions.SetThings:
      return { ...state, things: action.things }
  }
  return state;
};

const logger = (reducer: any) => {
  const reducerWithLogger = (state: any, action: any) => {
    console.log("%cPrevious State:", "color: #9E9E9E; font-weight: 700;", state);
    console.log("%cAction:", "color: #00A7F7; font-weight: 700;", action);
    console.log("%cNext State:", "color: #47B04B; font-weight: 700;", reducer(state,action));
    return reducer(state,action);
  };
  return reducerWithLogger;
}


const loggerReducer = logger(reducer);


/**
 * 
 */
export interface AppContextState {

}


/**
 * 
 */
export const AppContext = (React as any).createContext();

/**
 * 
 * @param props 
 */
export function AppContextProvider(props: any) {
  const fullInitialState = {
    ...initialState,
    user
  }

  const [state, dispatch] = useReducer(loggerReducer, fullInitialState);
  return (
    <AppContext.Provider value={{
        state: state,
        dispatch
    }}>
      {props.children}
    </AppContext.Provider>
  );
}

/**
 * 
 */
export const AppContextConsumer = AppContext.Consumer;
