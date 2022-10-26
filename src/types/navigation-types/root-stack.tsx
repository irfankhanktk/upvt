import { UserData } from "../entities-types";

type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Login: undefined;
  SignupPersonal: undefined;
  SignupPreferences: UserData;
  SignupInterest: UserData;
  AddTask:undefined,
  AddTrips:undefined,
};
export default RootStackParamList;
