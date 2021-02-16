import { AuthAction } from '../actions/auth';

export type AuthState = {
  loggedIn: boolean;
};

export const initialAuthState: AuthState = {
  loggedIn: false
};

export const authReducer = (state = initialAuthState, action: AuthAction) => {
  switch (action.type) {
    default:
      return state
  }
}
