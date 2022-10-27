import moment from 'moment';
import React from 'react';
import { Image, StyleProp, StyleSheet, TextStyle, View } from 'react-native';
import { IMAGES } from '../../../assets/images';
import { colors } from '../../../config/colors';
import { mvs } from '../../../config/metrices';
import { TripData } from '../../../types/entities-types';
import Medium from '../../../typography/medium-text';
import Regular from '../../../typography/regular-text';
type props = {
  style?: StyleProp<TextStyle>

}
const TripCard = ({
  style,
  tripDestination,
  tripCost,
  description,
  createdAt,
  tripImage,

}: TripData & props) => {
  return (
    <View style={[styles.container]}>
      <Image style={{ height: mvs(140), width: '100%', borderRadius: mvs(20) }} source={{uri:tripImage}} />
      <View style={{ padding: mvs(6) }}>
        <Medium style={[styles.title]} label={tripDestination} />
        <Regular style={[styles.value]} label={description} />
        <Regular fontSize={mvs(11)} label={moment(createdAt).fromNow()} />
      </View>
    </View>
  )
}
export default React.memo(TripCard);
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: mvs(10),
    borderRadius: mvs(20),
    overflow: 'hidden',
    width: '49%',
    ...colors.shadow
  },
  title: {
    fontSize: mvs(13),
    color: colors.primary,
  },
  value: {
    fontSize: mvs(11),
    color: colors.black,
    // width: '50%',
  },
  icon: {
    width: mvs(40),
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  left: {
    flex: 1,
    backgroundColor: colors.white,
    padding: mvs(15)
  },
  middle: {
    width: mvs(80),
    padding: mvs(15),
    height: '100%',
  },
  right: {
    width: mvs(40),
    padding: mvs(15),
    height: '100%',
    backgroundColor: colors.primary
  },
  edit: {
    fontSize: mvs(12),
    color: colors.border,
  },
  time: {
    fontSize: mvs(12),
    color: colors.border,
  }
});