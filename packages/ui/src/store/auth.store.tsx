import { createStore } from "react-hooks-global-state";
import { IAuthState, AuthCommand } from "../interface/authState.interface";

const initialState: IAuthState = {
  user: null,
  error: null,
  jwt: localStorage.getItem("jwt"),
  command: undefined,
  commandTrigger: 0,
  returnTo: localStorage.getItem("returnTo"),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (state: IAuthState, action: any) => {
  switch (action.type) {
    case "COMMAND":
      return {
        ...state,
        ...action.meta,
        command: action.command,
        commandTrigger: state.commandTrigger + 1,
      };

    default:
      return state;
  }
};

export const command = (
  command: AuthCommand,
  meta?: Partial<IAuthState>
): null => {
  dispatch({
    type: "COMMAND",
    command,
    meta,
  });
  return null;
};

export const login = (returnTo?: string): null =>
  command("login", { returnTo });
export const logout = (returnTo?: string): null =>
  command("logout", { returnTo });

export const { dispatch, useGlobalState: useAuthState } = createStore(
  reducer,
  initialState
);
