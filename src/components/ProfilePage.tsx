import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProfileData } from '../actions/profile';
import { ProfileData } from '../ProfileData';
import { RootState } from '../reducers/rootReducer';

export const ProfilePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:4040/profile');
      const json = await response.json();
      dispatch(setProfileData(json as ProfileData));
    })();
  }, [dispatch]);
  const profileData = useSelector((state: RootState) => state.profile.data);
  if (profileData) {
    return (
      <div>
        <div>
          Nimi: {profileData.name}
        </div>
        <div>
          Email: {profileData.email}
        </div>
        <div>
          <img src={profileData.photo} alt="Profile" width={150} height={150} />
        </div>
      </div>
    );
  } else {
    return <div>Laen andmeid ...</div>
  }
};
