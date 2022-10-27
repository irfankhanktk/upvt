import { StyleSheet } from "react-native";
import { mvs } from "../../config/metrices";
import { colors } from './../../config/colors';

const  styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white
    },
    contentContainerStyle:{
        flexGrow:1,
        paddingTop:mvs(30)
        // padding:mvs(20)
    },
    image:{
        justifyContent:'flex-start',

        alignItems:'center',
    },
    email:{
        color:colors.primary,
        marginLeft:mvs(20)
    },
    nameEmail:{
        marginLeft:mvs(15)
    },
    name:{
        color:colors.black,
        marginLeft:mvs(20)
    }
});
export default styles;