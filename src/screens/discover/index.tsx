import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import AppHeader from '../../components/atoms/headers/index';
import { useAppSelector } from '../../hooks/use-store';
import { useTrips } from '../../hooks/use-trips';
import TabParamList from '../../types/navigation-types/bottom-tab';
import styles from './styles';
type props = NativeStackScreenProps<TabParamList, 'Discover'>;

const Discover = (props: props) => {
  const { navigation } = props;
  const userInfo=useAppSelector(s=>s?.user?.userInfo);
  const trips=useTrips();
  console.log('userInfo',userInfo);
  
  return (
    <View style={styles.container}>
      <AppHeader title="Discover" />
    </View>
  );
};
export default Discover;
