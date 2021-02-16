export const AUTH_SET_LOGGED_IN = 'AUTH_SET_LOGGED_IN';

export type SetLoggedInAction = {
  type: typeof AUTH_SET_LOGGED_IN;
  loggedIn: boolean;
};

export type AuthAction = SetLoggedInAction;
