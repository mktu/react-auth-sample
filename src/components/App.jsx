import React, { useReducer, useEffect } from 'react';
import AuthContext from '../AuthContext';
import MainPage from './MainPage';
import authReducer from '../authReducer';
import { listenAuthState } from '../auth';

function App() {
  const [state, dispatch] = useReducer(authReducer.reducer,authReducer.initialState);
  useEffect(()=>{
    return listenAuthState(dispatch);
  },[]);
  return (
      <AuthContext.Provider value={state}>
        <MainPage />
      </AuthContext.Provider>
  );
}

export default App;