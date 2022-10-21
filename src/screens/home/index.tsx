import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, View } from 'react-native';
import { PlusButton } from '../../components/atoms/buttons';
import AppHeader from '../../components/atoms/headers/index';
import HomeCard from '../../components/molecules/cards/home-card';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
type props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = (props: props) => {
  const { navigation } = props;

  const renderItem = React.useCallback(({ item, index }: any) => {
    return <HomeCard title="First task" />;
  }, []);
  return (
    <View style={styles.container}>
      <AppHeader title="To-do List" />
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={[0, 1]} renderItem={renderItem} />
        <PlusButton onPress={()=>props?.navigation?.navigate('AddTask')} title='Add'/>
    </View>
  );
};
export default Home;
