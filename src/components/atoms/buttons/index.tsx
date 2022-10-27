import React from 'react'
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'
import { colors } from '../../../config/colors'
import { mvs } from '../../../config/metrices'
import Regular from '../../../typography/regular-text'
import { Loader } from '../loader'
type props = {
    onPress: () => void
    title: string
    disabled?:boolean
    loading?:boolean
    textStyle?:StyleProp<ViewStyle>
    containerStyle?:StyleProp<ViewStyle>
}
export const PlusButton = (props: props) => {
    const {
        onPress,
        title,
    } = props;
    return (
        <TouchableOpacity style={styles.plusContainer} onPress={onPress}>
            <Regular style={styles.plusText} label={'+'}/>
        </TouchableOpacity>
    )
};
export const PrimaryButton = (props: props) => {
    const {
        onPress,
        title,
        disabled,
        loading,
        textStyle,
        containerStyle,
    } = props;
    return (
        <TouchableOpacity disabled={disabled||loading} style={[styles.primaryContainer,containerStyle,{backgroundColor:`${colors.primary}${disabled?'50':''}`,}]} onPress={onPress}>
            {loading?
            <Loader/>
            :<Regular style={[styles.primaryText,textStyle]} label={title}/>}
        </TouchableOpacity>
    )
};
export const ProfileButton = (props: props) => {
    const {
        onPress,
        title,
        disabled,
        loading,
        textStyle,
        containerStyle,
    } = props;
    return (
        <TouchableOpacity disabled={disabled||loading} style={[styles.profileContainer,containerStyle]} onPress={onPress}>
            {loading?
            <Loader/>
            :<Regular style={[styles.profileText,textStyle]} label={title}/>}
        </TouchableOpacity>
    )
};


const styles = StyleSheet.create({
    plusContainer:{
       position:'absolute',
       bottom:mvs(40),
       ...colors.shadow,
       backgroundColor:colors.primary,
       right:mvs(20),
       justifyContent:'center',
       alignItems:'center',
    //    backgroundColor:colors.primary,
       width:mvs(50),
       height:mvs(50),
       borderRadius:mvs(25),
    },
    plusText:{
        color:colors.white,
        fontSize:mvs(20)
    },
    primaryContainer:{
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:colors.primary,
       width:'100%',
       height:mvs(50),
       borderRadius:mvs(15),
    },
    primaryText:{
        color:colors.white,
    },
    profileContainer:{
       justifyContent:'flex-end',
    //    alignItems:'center',
       backgroundColor:colors.white,
       paddingHorizontal:mvs(22),
       width:'100%',
       height:mvs(50),
       borderRadius:mvs(15),
       borderBottomWidth:0.7,
       borderBottomColor:colors.primary
    },
    profileText:{
        color:colors.primary,
        fontSize:mvs(15)
    }
})