import { NavigatorScreenParams } from "@react-navigation/native";
import { UserData } from "../entities-types";
import RootStackParamList from "./root-stack";

type TabParamList = {
  Discover: NavigatorScreenParams<RootStackParamList>;
  Home: NavigatorScreenParams<RootStackParamList>;
  Profile:NavigatorScreenParams<RootStackParamList>;
};
export default TabParamList;
