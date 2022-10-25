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
import RootStackParamList from '../../types/navigation-types/root-stack';
import Medium from '../../typography/medium-text';
import styles from './styles';
type props = NativeStackScreenProps<RootStackParamList, 'SignupPersonal'>;








const SignupPersonal = (props: props) => {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const [progress, setProgress] = React.useState(0);
  const initial = {
    firstName: '',
    familyName: '',
    email: '',
    password: '',
    confirmPassword: '',
    birth: '',
    gender: '',

  }
  const [values, setValues] = React.useState(initial);
  const bool = !values?.email || !values?.password || !values.firstName || !values.familyName || !values.confirmPassword || !values.birth || !values.gender
  React.useEffect(() => {
    if (bool) {
      setProgress(0)
    } else {
      setProgress(0.4)
    }
  }, [bool])
  return (
    <View style={styles.container}>
      <AppHeader back title="Sign-up" />
      <ProgressBar style={styles.progress} value={progress} />
      <KeyboardAvoidScrollview contentContainerStyle={styles.contentContainerStyle}>
        <>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <PrimaryInput containerStyle={styles.smallButton} label={'First Name'} onChangeText={(str) => setValues({ ...values, firstName: str })} value={values.firstName} />
            <PrimaryInput containerStyle={styles.smallButton} label={'Family Name'} onChangeText={(str) => setValues({ ...values, familyName: str })} value={values.familyName} />
          </View>
          <PrimaryInput keyboardType={'email-address'} label={'Email'} onChangeText={(str) => setValues({ ...values, email: str })} value={values.email} />
          <Row>
            <PrimaryInput
              containerStyle={styles.smallButton}
              secureTextEntry
              placeholder={'********'}
              label={'Password'}
              onChangeText={(str) => setValues({ ...values, password: str })}
              value={values.password} />
            <PrimaryInput containerStyle={styles.smallButton} secureTextEntry label={'Confirm password'} onChangeText={(str) => setValues({ ...values, confirmPassword: str })} value={values.confirmPassword} />
          </Row>
          <Row>
            <PrimaryInput containerStyle={styles.smallButton} label={'Birth date'} onChangeText={(str) => setValues({ ...values, birth: str })} value={values.birth} />
            <PrimaryInput containerStyle={styles.smallButton} label={'Gender'} onChangeText={(str) => setValues({ ...values, gender: str })} value={values.gender} />
          </Row>
        </>
      </KeyboardAvoidScrollview>
      <View style={styles.bottom}>
        <PrimaryButton
          disabled={bool} title={'Next'}
          containerStyle={styles.button}
          onPress={() => props?.navigation?.navigate('SignupPreferences', values)}
        />
        <Medium style={styles.accountText} onPress={props?.navigation?.goBack} label={'Already have an account'} />
      </View>
    </View>

  );
};
export default SignupPersonal;
