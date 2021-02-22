import React, { 
    createContext, 
    useReducer, 
    Children 
} from "react";

/////////////// REDUCERS ////////////////////

import theme                from './reducers/Theme';
import authentication       from './reducers/Auth';
import news                 from  './reducers/News';

/////////////// INITIAL STATES ////////////////////

import { THEME_CONFIG }     from 'configs/AppConfig';
import authInitialState     from './initialStates/authInitialState';
import newsInitialState     from './initialStates/newsInitialState';

export const GlobalContext = createContext({});

export const GlobalProvider = ( { children } ) => {

  const [ themeState, themeDispatch ] = useReducer(theme, { ...THEME_CONFIG });
  const [ authState,  authDispatch  ] = useReducer(authentication, { ...authInitialState });
  const [ newsState,  newsDispatch  ] = useReducer(news, { ...newsInitialState });

  return (
    <GlobalContext.Provider
      value={{

        state: {

            themeState,
            authState,
            newsState
        },
    
        dispatch: {

            themeDispatch,
            authDispatch,
            newsDispatch

        }
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
