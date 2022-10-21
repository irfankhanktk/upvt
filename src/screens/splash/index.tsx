import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
type props = NativeStackScreenProps<RootStackParamList, 'Splash'>;
import Config from 'react-native-config';
import { useAppDispatch, useAppSelector } from './../../hooks/use-store';
import Regular from '../../typography/regular-text';
import { SERVICES } from '../../utils';

const Splash = (props: props) => {
  const {navigation} =props;
  const dispatch =useAppDispatch();
  const store =useAppSelector(s=>s);

  React.useEffect(() => {

    (async()=>{
      let screen:'Login'|'Home' = 'Login';
      SERVICES.getItem('@user').then((userId:any)=>{
      
        if(userId){
           screen='Home';
            // getUserData();
        }
        setTimeout(() => {
          navigation?.replace(screen);
        }, 2000);
       })
    })()
  }, []);


  return (
    <View style={{...styles.container}}>
      <Regular style={styles.welcomeText} label={'Welcome to to-do'}/>
    </View>
  );
};
export default Splash;
