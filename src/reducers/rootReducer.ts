import { combineReducers } from 'redux'
import { authReducer, AuthState } from './authReducer';
import { countReducer, CountState } from './countReducer'
import { profileReducer, ProfileState } from './profileReducer';

export type RootState = {
  auth: AuthState;
  count: CountState;
  profile: ProfileState;
};

export const rootReducer = combineReducers<RootState>({
  auth: authReducer,
  count: countReducer,
  profile: profileReducer
});
