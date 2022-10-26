import React, { PureComponent } from 'react';
import { View, StyleProp, TextStyle, StyleSheet, Image } from 'react-native';
import { Complete, Like } from '../../../assets/icons';
import { IMAGES } from '../../../assets/images';
import { colors } from '../../../config/colors';
import { mvs } from '../../../config/metrices';
import { TripData } from '../../../types/entities-types';
import Bold from '../../../typography/bold-text';
import Medium from '../../../typography/medium-text';
import Regular from '../../../typography/regular-text';
import { PrimaryButton } from '../../atoms/buttons';
import { Row } from '../../atoms/row';
type props = {
  style?: StyleProp<TextStyle>
 
}
const HomeCard = ({
  style,
  tripDestination,
  tripCost,
  description,

}:TripData&props ) => {
  return (
    <View style={[styles.container]}>
      <Row>
        <Image style={{ height: mvs(140), width: '45%', borderRadius: mvs(20)}} source={IMAGES.homePic} />
        <View style={{ flex: 1, padding: mvs(10),justifyContent:'space-between' }}>
          <Row>
            <Medium style={[styles.title]} label={'Location'} />
            <Regular style={[styles.value]} label={tripDestination} />
          </Row>
          <Row>
            <Medium style={[styles.title]} label={'Total Cost'} />
            <Regular style={[styles.value]} label={`${tripCost} $`} />
          </Row>
          <Row>
            <Medium style={[styles.title]} label={'Description'} />
            <Regular style={[styles.value]} numberOfLines={2} label={description} />
          </Row>
          <Row contentContainerStyle={{alignItems:'center'}}>
            <Like height={mvs(20)} width={mvs(20)}/>
            <PrimaryButton onPress={()=>{}} containerStyle={{height:mvs(25),width:mvs(100)}} title='Buy'/>
          </Row>
        </View>
      </Row> 
    </View>
  )
}
export default React.memo(HomeCard);
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: mvs(10),
    borderRadius: mvs(20),
    overflow: 'hidden',
    ...colors.shadow
  },
  title: {
    fontSize: mvs(13),
    color: colors.primary,
  },
  value: {
    fontSize: mvs(11),
    color: colors.black,
    width: '50%',
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