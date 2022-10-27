import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, TouchableOpacity, Alert, Image } from 'react-native';
import { PrimaryButton } from '../../components/atoms/buttons';
import AppHeader from '../../components/atoms/headers/index';
import PrimaryInput from '../../components/atoms/inputs';
import { KeyboardAvoidScrollview } from '../../components/atoms/keyboard-avoid-scrollview';
import { MultiSelection } from '../../components/atoms/multi-selection';
import ProgressBar from '../../components/atoms/progress-bar';
import { Row } from '../../components/atoms/row';
import { mvs } from '../../config/metrices';
import { useAppDispatch } from '../../hooks/use-store';
import { onAddTripPress } from '../../services/firebase/firebase-actions';
import RootStackParamList from '../../types/navigation-types/root-stack';
import Bold from '../../typography/bold-text';
import Medium from '../../typography/medium-text';
import Regular from '../../typography/regular-text';
import { SERVICES } from '../../utils';
import styles from './styles';
type props = NativeStackScreenProps<RootStackParamList, 'AddTrips'>;








const AddTrips = (props: props) => {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const [progress, setProgress] = React.useState(0);
  const initial = {
    tripDestination: '',
    origin: '',
    vehicle: '',
    hotelName: '',
    hotelUrl: '',
    description: '',
    tripCost: '',
    tripImage: 'https://',

  }
  const [categories, setCategories] = React.useState<any[]>([
    { title: 'Fun ', flag: false },
    { title: 'Food ', flag: false },
    { title: 'Mountain ', flag: false },
    { title: 'Clean ', flag: false },
    { title: 'Family Trip ', flag: false },
    { title: 'Culture ', flag: false },
    { title: 'Solo Travel ', flag: false },
    { title: 'Other ', flag: false },
  ]);
  const [values, setValues] = React.useState(initial);
  const bool = !values?.tripDestination || !values?.origin || !values.vehicle || !values.hotelName || !values.hotelUrl || !values.tripCost || !values.tripImage


  const onGallery=async()=>{
    try {
      const res=await  SERVICES?._returnImageGallery();
      setValues({...values,tripImage:res?.uri});
    } catch (error) {
      console.log(SERVICES?._returnError(error));
    }

  }
  return (
    <View style={styles.container}>
      <AppHeader back title="Add-Trips" />
      <KeyboardAvoidScrollview contentContainerStyle={styles.contentContainerStyle}>
        <>
          <PrimaryInput label={'Where did you go?'} onChangeText={(str) => setValues({ ...values, tripDestination: str })} value={values.tripDestination} />
          <PrimaryInput label={'Where did you from?'} onChangeText={(str) => setValues({ ...values, origin: str })} value={values.origin} />
          <PrimaryInput label={'How did you get there by?(car, train, airoplane, etc)'} onChangeText={(str) => setValues({ ...values, vehicle: str })} value={values.vehicle} />
          <PrimaryInput label={'Which hotel did you use?'} onChangeText={(str) => setValues({ ...values, hotelName: str })} value={values.hotelName} />
          <PrimaryInput label={'URL of booked hotel/housing?'} onChangeText={(str) => setValues({ ...values, hotelUrl: str })} value={values.hotelUrl} />
          <PrimaryInput label={'What did you love about this trip?'} onChangeText={(str) => setValues({ ...values, description: str })} value={values.description} />
          <PrimaryInput keyboardType={'numeric'} label={'What was the total cost?'} onChangeText={(str) => setValues({ ...values, tripCost: str })} value={values.tripCost} />
        </>
        <TouchableOpacity style={styles.imageContainer} onPress={onGallery}>
        {!values?.tripImage? <Regular label={'+'} style={styles.plus}/>:
        <Image source={{uri:values?.tripImage}} style={styles.image}/>
        }
        </TouchableOpacity>
        <MultiSelection label='Category' setItems={(items) => {
          console.log('itemss=>', items);
          setCategories(items)
          if (categories?.some(x => x?.flag)) {
          }
        }} items={categories} />
      </KeyboardAvoidScrollview>
      <View style={styles.bottom}>
        <PrimaryButton
          disabled={bool} title={'Submit'}
          containerStyle={styles.button}
          onPress={() =>dispatch(onAddTripPress(values,props))}
        />
        <Medium style={styles.accountText} onPress={props?.navigation?.goBack} label={'Already have an account'} />
      </View>
    </View>

  );
};
export default AddTrips;
