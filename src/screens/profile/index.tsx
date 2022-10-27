import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { profileactive as User } from '../../assets/icons';
import { ProfileButton } from '../../components/atoms/buttons';
import AppHeader from '../../components/atoms/headers/index';
import { KeyboardAvoidScrollview } from '../../components/atoms/keyboard-avoid-scrollview';
import { Row } from '../../components/atoms/row';
import { mvs } from '../../config/metrices';
import { useAppDispatch, useAppSelector } from '../../hooks/use-store';
import { useTrips } from '../../hooks/use-trips';
import { onLogout } from '../../services/firebase/firebase-actions';
import TabParamList from '../../types/navigation-types/bottom-tab';
import Medium from '../../typography/medium-text';
import styles from './styles';
type props = NativeStackScreenProps<TabParamList, 'Profile'>;

const Profile = (props: props) => {
  const { navigation } = props;
  const userInfo = useAppSelector(s => s?.user?.userInfo);
  const trips = useTrips();
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <AppHeader title="Profile" />
      <KeyboardAvoidScrollview contentContainerStyle={styles.contentContainerStyle}>
        <Row contentContainerStyle={styles.image}>
          <User height={mvs(100)} width={mvs(100)} />
          <View style={styles.nameEmail}>
            <Medium label={userInfo?.firstName} style={styles.name} />
            <Medium label={userInfo?.email} style={styles.email} />
          </View>
        </Row>
        <ProfileButton onPress={() =>props?.navigation?.navigate('SavedTrips')} title={'Saved trips'} />
        <ProfileButton onPress={() => props?.navigation?.navigate('UpvotedTrips')} title={'Upvoted trips'} />
        <ProfileButton onPress={() => dispatch(onLogout(props))} title={'Logout'} />
      </KeyboardAvoidScrollview>
    </View>
  );
};
export default Profile;
