import { Alert } from "react-native";
import { createUserWithEmailAndPassword, saveData, signInWithEmailAndPassword, uploadFile } from ".";
import { COLLECTIONS, STORAGEKEYS } from "../../config/constants";
import { AppDispatch, RootState } from "../../store";
import { setUserInfo } from "../../store/reducers/user-reducer";
import { UserData, TripData } from "../../types/entities-types";
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
            SERVICES.setItem(STORAGEKEYS?.userId, res?.user?.uid);
            dispatch(setUserInfo(response));
            SERVICES.resetStack(props, 'Home');

        } catch (error: any) {
            console.log('error in onLoginPress', error);
            Alert.alert('', SERVICES._returnError(error),);
        }
    }
}
export const onSignupPress = (data: UserData, props: any) => {
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
            SERVICES.setItem(STORAGEKEYS?.userId, res?.user?.uid);
            dispatch(setUserInfo(user));
            SERVICES.resetStack(props, 'Home');
        } catch (error: any) {
            console.log('error in onSignupPress', error);
            Alert.alert('', error,);
        }
    }
}
export const onAddTripPress = (data: TripData, props: any) => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        try {
            const userId=getState()?.user?.userInfo?.userId;
            if(data?.tripImage){
                const uri=await uploadFile(data?.tripImage);
                await saveData(COLLECTIONS.trips,userId,{...data,tripImage:uri});
                Alert.alert('Trip Added Sucessfully')
                props?.navigation?.goBack();
            }else{
                throw 'Image is missing'
            }

        } catch (error: any) {
            console.log('error in onSignupPress', error);
            Alert.alert('', error,);
        }
    }
}
export const getUserData =  (userId:string) => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        try {
            const res = await getData(COLLECTIONS.users,userId);
            dispatch(setUserInfo(res));
        } catch (error: any) {
            console.log('error in onAddTaskPress', error);
            Alert.alert('', error,);
        }
    }
}