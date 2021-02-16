import { ProfileAction, SET_PROFILE_DATA } from '../actions/profile';
import { ProfileData } from '../ProfileData';

export type ProfileState = {
  data?: ProfileData;
};

export const initialProfileState: ProfileState = {};

export const profileReducer = (state = initialProfileState, action: ProfileAction) => {
  switch (action.type) {
    case SET_PROFILE_DATA:
      return { ...state, data: action.data };
    default:
      return state;
  }
};
