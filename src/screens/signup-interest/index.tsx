import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { PrimaryButton } from '../../components/atoms/buttons';
import AppHeader from '../../components/atoms/headers/index';
import PrimaryInput from '../../components/atoms/inputs';
import { KeyboardAvoidScrollview } from '../../components/atoms/keyboard-avoid-scrollview';
import { MultiSelection } from '../../components/atoms/multi-selection';
import ProgressBar from '../../components/atoms/progress-bar';
import { Row } from '../../components/atoms/row';
import { useAppDispatch } from '../../hooks/use-store';
import { onSignupPress } from '../../services/firebase/firebase-actions';
import RootStackParamList from '../../types/navigation-types/root-stack';
import Medium from '../../typography/medium-text';
import styles from './styles';
import { createUserWithEmailAndPassword } from '../../services/firebase/index';
type props = NativeStackScreenProps<RootStackParamList, 'SignupInterest'>;








const SignupInterest = (props: props) => {
  const { navigation,route } = props;
  const data=route?.params;
  const dispatch = useAppDispatch();
  const [progress, setProgress] = React.useState(0.4);
  const [interests, setInterests] = React.useState<any[]>([
    { title: 'song', flag: false },
    { title: 'fun ', flag: false },
    { title: 'family', flag: false },
    { title: 'food', flag: false },
    { title: 'girls trip', flag: false },
    { title: 'boys trip', flag: false },
    { title: 'mix trip', flag: false },
    { title: 'single', flag: false },
  ]);
 
  React.useEffect(() => {
    setTimeout(() => {
      setProgress(0.7)
    }, 1000);
  }, [])
  return (
    <View style={styles.container}>
      <AppHeader back title="Sign-up" />
      <KeyboardAvoidScrollview contentContainerStyle={styles.contentContainerStyle}>
        <ProgressBar value={progress} />
        <MultiSelection setItems={(items) => {
          console.log('itemss=>', items);
          setInterests(items)
          if (interests?.some(x => x?.flag)) {

            setProgress(1)
          } else {
            setProgress(0.7)

          }
        }} items={interests} />
      </KeyboardAvoidScrollview>
      <View style={styles.bottom}>
      
        <PrimaryButton
          disabled={!interests?.some(x => x?.flag)} title={'Signup'}
          onPress={() => dispatch(onSignupPress({...data,interests:interests?.filter(x=> x?.flag&&x?.title)?.map(x=>x?.title)},props))}
          containerStyle={styles.button} />
        <Medium style={styles.accountText} onPress={props?.navigation?.goBack} label={'Already have an account'} />
      </View>
    </View>

  );
};
export default SignupInterest;
