import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { PrimaryButton } from '../../components/atoms/buttons';
import AppHeader from '../../components/atoms/headers/index';
import PrimaryInput from '../../components/atoms/inputs';
import SmallInput from '../../components/atoms/inputs/smallInput';
import smallInput from '../../components/atoms/inputs/smallInput';
import { KeyboardAvoidScrollview } from '../../components/atoms/keyboard-avoid-scrollview';
import { useAppDispatch } from '../../hooks/use-store';
import { onSignupPress } from '../../services/firebase/firebase-actions';
import RootStackParamList from '../../types/navigation-types/root-stack';
import Medium from '../../typography/medium-text';
import styles from './styles';
type props = NativeStackScreenProps<RootStackParamList, 'Signup'>;








const Signup = (props: props) => {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const [values, setValues] = React.useState({
    firstName: '',
    familyName: '',
    email: '',
    password: '',
    confirmPassword: '',
    birth: '',
    gender: '',

  });

  return (
    <View style={styles.container}>
      <AppHeader back title="Sign-up" />
      <KeyboardAvoidScrollview contentContainerStyle={styles.contentContainerStyle}>
       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <SmallInput label={'First Name'} onChangeText={(str) => setValues({ ...values, firstName: str })} value={values.firstName} />
        <SmallInput label={'Family Name'} onChangeText={(str) => setValues({ ...values, familyName: str })} value={values.familyName} />
        </View>
        <PrimaryInput style={{backgroundColor:'grey',borderBottomWidth:0,width:'100%',borderRadius:10}} keyboardType={'email-address'} label={'Email'} onChangeText={(str) => setValues({ ...values, email: str })} value={values.email} />
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <SmallInput
          secureTextEntry
          placeholder={'********'}
          label={'Password'}
          onChangeText={(str) => setValues({ ...values, password: str })}
          value={values.password} />
        <SmallInput secureTextEntry label={'Confirm password'} onChangeText={(str) => setValues({ ...values, confirmPassword: str })} value={values.confirmPassword} />
</View>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <SmallInput label={'Birth date'} onChangeText={(str) => setValues({ ...values, birth: str })} value={values.birth} />
        <SmallInput label={'Gender'} onChangeText={(str) => setValues({ ...values, gender: str })} value={values.gender} />
</View>

        <PrimaryButton
          disabled={!values?.email || !values?.password || !values.firstName || !values.familyName || !values.confirmPassword || !values.birth || !values.gender} title={'Signup'}
          onPress={() => dispatch(onSignupPress(values?.firstName, values?.familyName, values?.email, values?.password, values?.confirmPassword, values?.birth, values?.gender,props))} containerStyle={styles.button} />
        <Medium style={styles.accountText} onPress={props?.navigation?.goBack} label={'Already have an account'} />
      </KeyboardAvoidScrollview>
    </View>

  );
};
export default Signup;
