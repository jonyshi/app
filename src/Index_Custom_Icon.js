import React, {Component} from 'react';
import { connect } from 'react-redux';
import {StyleSheet,ScrollView, Text, View,TextInput,ListView,Platform,Image} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import { createIconSet } from 'react-native-vector-icons';
import Custom_Icon from './components/icons/custom_Icon';

class Index extends Component {

    constructor(props) {
        super(props);
    }
    render = () => {
        return (<View style={styles.app_inex}  >
            <Text style={{fontSize:30}}>
                fffgghjkl99999shjk
            </Text>
            <Custom_Icon name='components-phone' color='blue' size={80}  />
            <Custom_Icon name='components-jineng' color='#000000' size={30}  />
            <Custom_Icon name='components-word' color='#000000' size={30}  />
            <Custom_Icon name='components-mac' color='#000000' size={30}  />

            <Custom_Icon name='components-geren' color='#000000' size={30}  />
        </View>);
    };
}
const styles = StyleSheet.create({
    app_inex:{
        flex:1.4,
        padding:5,
    },
    tabBar_top:{
        flexDirection:'row',
        justifyContent:'flex-start',
        backgroundColor:'#F7F7F7',
        flex:1.2,
    },
    tabBar_bottom:{
       // backgroundColor:'#029f79',
       //  backgroundColor:'red',
        flex:14,
    },
    context:{
        backgroundColor:'green',
        flex:13,
    },
    app_title:{
        flex:1,
        backgroundColor:'#292d2c',
        flexDirection:'row',
        alignItems: 'center',
        paddingLeft:20,
    },
    personal_render_row_view:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        // borderWidth:0.5,
        // borderColor:'#000000',
        borderBottomWidth:1,
        borderBottomColor:'#000000',
        padding:2,
        height:70,
    },
    personal_render_row_view_item_view:{
        height:68,
        //backgroundColor:'red',
    },
    personal_render_row_view_img:{
        width:50,
        height:50,
        flexDirection:'column',
        justifyContent:'flex-start',
        //backgroundColor:'yellow',
    },
    title:{
        color:'#000000',
        fontSize:14,
        flex:1,
        textAlignVertical:'center',
    },
    title_context:{
        flexDirection:'column',
        color:'#000000',
        fontSize:13,
        flex:1,
        textAlignVertical:'top',
        // backgroundColor:'#ffffff',
    },

    /*context:{
        backgroundColor:'green',
        flex:13,
    },
    tabBar_bottom:{
        backgroundColor:'#029f79',
        flex:1.5,
    },
    container: {
        marginTop: 30,
    },
    icon: {
        width: 300,
        height: 300,
        alignSelf: 'center',
    },
     */
});
function mapStateToProps(state) {
    return{
    }
}
export default connect(mapStateToProps)(Index);