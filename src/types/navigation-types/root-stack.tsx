import { SignUpData } from "../entities-types";

type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Login: undefined;
  SignupPersonal: undefined;
  SignupPreferences: SignUpData;
  SignupInterest: SignUpData;
  AddTask:undefined,
};
export default RootStackParamList;
