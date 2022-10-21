import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { KeyboardAvoidScrollview } from '../../components/atoms/keyboard-avoid-scrollview';
import { PrimaryButton } from '../../components/atoms/buttons';
import AppHeader from '../../components/atoms/headers/index';
import PrimaryInput from '../../components/atoms/inputs';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
type props = NativeStackScreenProps<RootStackParamList, 'AddTask'>;

const AddTask = (props: props) => {
  const { navigation } = props;
  const [values, setValues] = React.useState({
    email: '',
    password: '',
  });

  return (
    <View style={styles.container}>
      <AppHeader title="Add Tasks" />
      <KeyboardAvoidScrollview contentContainerStyle={styles.contentContainerStyle}>
        <PrimaryInput label={'Email'} onChangeText={(str) => setValues({ ...values, email: str })} value={values.email} />
        <PrimaryInput label={'Email'} onChangeText={(str) => setValues({ ...values, email: str })} value={values.email} />
        <PrimaryButton title={'Login'} onPress={() => { }} containerStyle={styles.button} />
      </KeyboardAvoidScrollview>
    </View>

  );
};
export default AddTask;
