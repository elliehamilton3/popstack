import { createStore } from 'react-hooks-global-state';
import { IAppState } from '../interface/appState.interface';

const initialState = { count: 0 };

const reducer = (state: IAppState, action: any) => {
  switch (action.type) {
    case 'SET_STATE':
      return { ...state, ...action.state };

    default:
      return state;
  }
};

export const { dispatch, useGlobalState } = createStore(reducer, initialState);
