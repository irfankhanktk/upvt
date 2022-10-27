import { UserData } from "../entities-types";

type RootStackParamList = {
  Splash: undefined;
  Tab: undefined;
  Login: undefined;
  SignupPersonal: undefined;
  SignupPreferences: UserData;
  SignupInterest: UserData;
  AddTask:undefined,
  AddTrips:undefined,
  SavedTrips:undefined,
  UpvotedTrips:undefined,
};
export default RootStackParamList;
