import { StyleSheet } from "react-native";
import { mvs } from "../../config/metrices";
import { colors } from '../../config/colors';

const  styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white
    },
    contentContainerStyle:{
        paddingHorizontal:mvs(22),
        paddingTop:mvs(10),
    },
    button:{
        marginTop:mvs(100),
    },
    accountText:{
        color:colors.primary,
        alignSelf:'center',
        marginVertical:mvs(20)
    },
    smallButton:{
        width:'49%'
    },
    bottom:{
        flex:1,
        justifyContent:'flex-end',
        marginTop:mvs(100),
        paddingHorizontal:mvs(22),
        paddingBottom:mvs(20)
    },
    progress:{
        marginVertical:mvs(20),
    },
    plus:{
        fontSize:mvs(45),
    },
    image:{
        height:'100%',
        width:'100%',
        borderRadius:mvs(15),
    },
    imageContainer:{
        height:mvs(200),
        borderRadius:mvs(15),
        overflow:'hidden',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.white,
        marginVertical:mvs(10),
        ...colors.shadow
    }
  
});
export default styles;