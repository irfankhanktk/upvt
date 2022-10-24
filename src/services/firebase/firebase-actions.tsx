import { Alert } from "react-native";
import { createUserWithEmailAndPassword, saveData, signInWithEmailAndPassword } from ".";
import { AppDispatch, RootState } from "../../store";
import { setUserInfo } from "../../store/reducers/user-reducer";
import { SignUpData } from "../../types/entities-types";
import { NavigationProps } from "../../types/navigation-types";
import { SERVICES } from "../../utils";
import { getData } from './index';

export const onLoginPress = (email: string, password: string, props: NavigationProps) => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        try {
            console.log('====================================');
            console.log(email, password);
            console.log('====================================');
            const res = await signInWithEmailAndPassword(email, password);
            console.log('res of onLoginPress=>', res);
            const response = await getData('users', res?.user?.uid);
            SERVICES.setItem('@userId', res?.user?.uid);
            dispatch(setUserInfo(response));
            SERVICES.resetStack(props, 'Home');

        } catch (error: any) {
            console.log('error in onLoginPress', error);
            Alert.alert('', SERVICES._returnError(error),);
        }
    }
}
export const onSignupPress = (data: SignUpData, props: any) => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        try {

            const res = await createUserWithEmailAndPassword(data?.email, data?.password);
            console.log('res of onSignupPress=>', res);
            const user = {
                userId: res?.user?.uid,
                firstName: data?.firstName,
                familyName: data?.familyName,
                email: data?.email,
                birth: data?.birth,
                gender: data?.gender,
                country: data?.country,
                city: data?.city,
                travelCount: data?.travelCount,
                travelExpense: data?.travelExpense,
                travelWith: data?.travelWith,
                interests:data?.interests

            }
            await saveData('users', res?.user?.uid, user);
            SERVICES.setItem('@userId', res?.user?.uid);
            dispatch(setUserInfo(user));
            SERVICES.resetStack(props, 'Login');
        } catch (error: any) {
            console.log('error in onSignupPress', error);
            Alert.alert('', error,);
        }
    }
}