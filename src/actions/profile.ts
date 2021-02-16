import { ProfileData } from '../ProfileData';

export const SET_PROFILE_DATA = 'SET_PROFILE_DATA';

export type SetProfileData = {
  type: typeof SET_PROFILE_DATA;
  data: ProfileData;
};

export type ProfileAction = SetProfileData;

export const setProfileData = (data: ProfileData): SetProfileData =>
  ({ type: SET_PROFILE_DATA, data });
