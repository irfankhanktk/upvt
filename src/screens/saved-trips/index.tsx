import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, View } from 'react-native';
import { PlusButton } from '../../components/atoms/buttons';
import AppHeader from '../../components/atoms/headers/index';
import TripCard from '../../components/molecules/cards/trip-card';
import { useAppSelector } from '../../hooks/use-store';
import { useTrips } from '../../hooks/use-trips';
import TabParamList from '../../types/navigation-types/bottom-tab';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
type props = NativeStackScreenProps<RootStackParamList, 'SavedTrips'>;

const SavedTrips = (props: props) => {
  const { navigation } = props;
  const userInfo=useAppSelector(s=>s?.user?.userInfo);
  const trips=useTrips();
  console.log('userInfo',userInfo);
  

  const renderItem = React.useCallback(({ item, index }: any) => {
    return <TripCard {...item} />;
  }, []);
  return (
    <View style={styles.container}>
      <AppHeader back title="Saved-Trips" />
      <FlatList
       numColumns={2}
       columnWrapperStyle={{justifyContent:'space-between'}}
        contentContainerStyle={styles.contentContainerStyle}
        data={trips} renderItem={renderItem} />
        <PlusButton onPress={()=>props?.navigation?.navigate('AddTrips')} title='Add'/>
    </View>
  );
};
export default SavedTrips;
