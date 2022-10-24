import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { PrimaryButton } from '../../components/atoms/buttons';
import AppHeader from '../../components/atoms/headers/index';
import PrimaryInput from '../../components/atoms/inputs';
import { KeyboardAvoidScrollview } from '../../components/atoms/keyboard-avoid-scrollview';
import ProgressBar from '../../components/atoms/progress-bar';
import { Row } from '../../components/atoms/row';
import { useAppDispatch } from '../../hooks/use-store';
import { onSignupPress } from '../../services/firebase/firebase-actions';
import RootStackParamList from '../../types/navigation-types/root-stack';
import Medium from '../../typography/medium-text';
import styles from './styles';
type props = NativeStackScreenProps<RootStackParamList, 'SignupPreferences'>;








const SignupPreferences = (props: props) => {
  const { navigation,route } = props;
  const data=route.params;
  const dispatch = useAppDispatch();
  const [progress, setProgress] = React.useState(0);
  const [values, setValues] = React.useState({
    ...data,
    country: '',
    city: '',
    travelCount: '',
    travelExpense: '',
    travelWith: '',

  });
 const bool=!values?.country || !values?.city || !values.travelCount || !values.travelWith || !values.travelExpense
 React.useEffect(() => {
    if (bool) {
      setProgress(0.4)
    } else {
      setProgress(0.7)
    }
  }, [bool])
  return (
    <View style={styles.container}>
      <AppHeader back title="Sign-up" />
        <ProgressBar style={styles.progress} value={progress} />
      <KeyboardAvoidScrollview contentContainerStyle={styles.contentContainerStyle}>
        <>
          <PrimaryInput label={'Which country do you live?'} onChangeText={(str) => setValues({ ...values, country: str })} value={values.country} />
          <PrimaryInput label={'City?'} onChangeText={(str) => setValues({ ...values, city: str })} value={values.city} />
          <PrimaryInput label={'How often do you take travel for fun?'} onChangeText={(str) => setValues({ ...values, travelCount: str })} value={values.travelCount} />
          <PrimaryInput label={'How much do you think you spend on travel per year?'} onChangeText={(str) => setValues({ ...values, travelExpense: str })} value={values.travelExpense} />
          <PrimaryInput label={'With how many people do you travel with mostly?'} onChangeText={(str) => setValues({ ...values, travelWith: str })} value={values.travelWith} />
        </>
      </KeyboardAvoidScrollview>
      <View style={styles.bottom}>
        <PrimaryButton
          disabled={bool} title={'Next'}
          onPress={() => props?.navigation?.navigate('SignupInterest',values)}
          containerStyle={styles.button} />
        <Medium style={styles.accountText} onPress={props?.navigation?.goBack} label={'Already have an account'} />
      </View>
    </View>

  );
};
export default SignupPreferences;
