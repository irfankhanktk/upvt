import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View,Image } from 'react-native';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
type props = NativeStackScreenProps<RootStackParamList, 'Splash'>;
import Config from 'react-native-config';
import { useAppDispatch, useAppSelector } from './../../hooks/use-store';
import Regular from '../../typography/regular-text';
import { SERVICES } from '../../utils';
import { STORAGEKEYS } from '../../config/constants';
import { getUserData } from '../../services/firebase/firebase-actions';
// import { Image } from 'react-native-svg';
import { IMAGES } from '../../assets/images';

const Splash = (props: props) => {
  const {navigation} =props;
  const dispatch =useAppDispatch();
  const store =useAppSelector(s=>s);

  React.useEffect(() => {

    (async()=>{
      let screen:'Login'|'Tab' = 'Login';
      SERVICES.getItem(STORAGEKEYS.userId).then((userId:any)=>{
      
        if(userId){
           screen='Tab';
           dispatch(getUserData(userId));
        }
        setTimeout(() => {
          navigation?.replace(screen);
        }, 2000);
       })
    })()
  }, []);


  return (
    <View style={{...styles.container}}>
      <Image  source={IMAGES.splashPic} style={styles.splashpic}/>
    </View>
  );
};
export default Splash;
