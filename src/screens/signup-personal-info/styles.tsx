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
        paddingTop:mvs(30),
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
    }
  
});
export default styles;