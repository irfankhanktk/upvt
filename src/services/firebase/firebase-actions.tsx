import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Alert } from "react-native"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, saveData } from ".";
import { AppDispatch, RootState } from "../../store";
import { setUserInfo } from "../../store/reducers/user-reducer";
import { NavigationProps } from "../../types/navigation-types";
import RootStackParamList from "../../types/navigation-types/root-stack";
import { SERVICES } from "../../utils";
import { getData } from './index';

export const onLoginPress = (email: string, password: string,props:NavigationProps) => {
    return async (dispatch: AppDispatch, getState:()=> RootState) => {
        try {
            const res = await signInWithEmailAndPassword(email, password);
            console.log('res of onLoginPress=>', res);
            const response = await getData('users', res?.user?.uid);
            SERVICES.setItem('@userId', res?.user?.uid);
            dispatch(setUserInfo(response));
            SERVICES.resetStack(props,'Home');

        } catch (error: any) {
            console.log('error in onLoginPress', error);
            Alert.alert('', SERVICES._returnError(error),);
        }
    }
}
export const onSignupPress =  (name: string, email: string, password: string,props:NavigationProps) => {
    return async (dispatch: AppDispatch, getState:()=>  RootState) => {
        try {
            const res = await createUserWithEmailAndPassword(name, email, password);
            console.log('res of onSignupPress=>', res);
            const user={
                userId:res?.user?.uid,
                name:name,
                email:email,
             }
             await saveData('users',res?.user?.uid, user);
             SERVICES.setItem('@userId', res?.user?.uid);
            dispatch(setUserInfo(user));
            SERVICES.resetStack(props,'Home');
        } catch (error: any) {
            console.log('error in onSignupPress', error);
            Alert.alert('', error,);
        }
    }
}