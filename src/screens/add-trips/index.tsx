import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { PrimaryButton } from '../../components/atoms/buttons';
import AppHeader from '../../components/atoms/headers/index';
import PrimaryInput from '../../components/atoms/inputs';
import { KeyboardAvoidScrollview } from '../../components/atoms/keyboard-avoid-scrollview';
import ProgressBar from '../../components/atoms/progress-bar';
import { Row } from '../../components/atoms/row';
import { mvs } from '../../config/metrices';
import { useAppDispatch } from '../../hooks/use-store';
import RootStackParamList from '../../types/navigation-types/root-stack';
import Medium from '../../typography/medium-text';
import styles from './styles';
type props = NativeStackScreenProps<RootStackParamList, 'AddTrips'>;








const AddTrips = (props: props) => {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const [progress, setProgress] = React.useState(0);
  const initial = {
    tripDestination: '',
    destination: '',
    vehicle: '',
    hotelName: '',
    hotelUrl: '',
    decision:'',
    tripCost: '',
    bestImage: '',

  }
  const [values, setValues] = React.useState(initial);
  const bool = !values?.tripDestination || !values?.destination || !values.vehicle || !values.hotelName || !values.hotelUrl || !values.tripCost || !values.bestImage
  React.useEffect(() => {
    if (bool) {
      setProgress(0)
    } else {
      setProgress(0.4)
    }
  }, [bool])
  return (
    <View style={styles.container}>
      <AppHeader back title="Add-Trips" />
      <KeyboardAvoidScrollview contentContainerStyle={styles.contentContainerStyle}>
        <>
         
        <PrimaryInput  style={{height:mvs(30),padding:mvs(8)}}  keyboardType={'default'} label={'Where did you go?'} onChangeText={(str) => setValues({ ...values, tripDestination: str })} value={values.tripDestination} />
        <PrimaryInput style={{height:mvs(30),padding:mvs(8)}} keyboardType={'default'} label={'Where did you from?'} onChangeText={(str) => setValues({ ...values, destination: str })} value={values.destination} />
        <PrimaryInput style={{height:mvs(30),padding:mvs(8)}} keyboardType={'default'} label={'How did you get there by?(car, train, airoplane, etc)'} onChangeText={(str) => setValues({ ...values, vehicle: str })} value={values.vehicle} />
        <PrimaryInput style={{height:mvs(30),padding:mvs(8)}} keyboardType={'default'} label={'Which hotel did you use?'} onChangeText={(str) => setValues({ ...values, hotelName: str })} value={values.hotelName} />
        <PrimaryInput style={{height:mvs(30),padding:mvs(8)}} keyboardType={'default'} label={'URL of booked hotel/housing?'} onChangeText={(str) => setValues({ ...values, hotelUrl: str })} value={values.hotelUrl} />
        <PrimaryInput  keyboardType={'default'} label={'What did you love about this trip?'} onChangeText={(str) => setValues({ ...values, decision: str })} value={values.decision} />
        <PrimaryInput style={{height:mvs(30),padding:mvs(8)}} keyboardType={'numeric'} label={'What was the total cost?'} onChangeText={(str) => setValues({ ...values, tripCost: str })} value={values.tripCost} />
        {/* <PrimaryInput keyboardType={'url'} label={'Add best image from the trip?'} onChangeText={(str) => setValues({ ...values, bestImage: str })} value={values.bestImage} /> */}
          
        </>
      </KeyboardAvoidScrollview>
      <View style={styles.bottom}>
        <PrimaryButton
          disabled={bool} title={'Submit'}
          containerStyle={styles.button}
          onPress={() => props?.navigation?.navigate('SignupPreferences', values)}
        />
        <Medium style={styles.accountText} onPress={props?.navigation?.goBack} label={'Already have an account'} />
      </View>
    </View>

  );
};
export default AddTrips;
