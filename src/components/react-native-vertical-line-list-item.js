import React, {Component} from 'react';
import { connect } from 'react-redux';
import {StyleSheet,ScrollView, Text, View,TextInput,ListView,Platform,Image,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Custom_Icon from './../components/icons/custom_Icon';

class VerticalLineList extends Component {

    static propTypes = {
        data: React.PropTypes.object, //数据列表
    }
    constructor(props) {
        super(props);
    }
    // 预留以后如果是数组
    getArrayDataHtml(){
        let datas = [];//this.props.data is array
        let items = [];
        datas.map((da, i) => {
            let item = <View key={"react_native_vertical_line_list_style_"+i} style={styles.react_native_vertical_line_list_style}>
                <View key={"components_inex_"+i} style={[styles.components_inex,{width:width}]}>
                    <View key={"components_inex_icon_"+i} style={[styles.components_inex_icon,{width:(width_icon)}]}>
                        <View key={"verticalLine_"+i} style={styles.verticalLine}></View>
                        <Custom_Icon key={"components_inex_icon_circular_"+i} style={styles.components_inex_icon_circular} name='components-circular' color='#DB7E7E' size={30}  ></Custom_Icon>
                    </View>
                    <View key={"components_inex_context_"+i} style={[styles.components_inex_context,{width:(width-width_icon)}]}>
                        <Text key={"title_text_"+i} style={styles.title_text}>{da["name"]}</Text>
                    </View>
                </View>
                {/!*内容区域*!/}
                <View key={"_2components_inex"+i} style={[styles.components_inex,{width:width,height:50}]}>
                    <View key={"_2components_inex_icon"+i} style={[styles.components_inex_icon,{width:(width_icon)}]}>
                        <View key={"_2verticalLine"+i} style={styles.verticalLine}></View>
                    </View>
                    <View key={"_2components_inex_context"+i} style={[styles.components_inex_context,{width:(width-width_icon)}]}>
                        <Text key={"_2title_context_text"+i} style={styles.title_context_text}>     {context}</Text>
                    </View>
                </View>
            </View>;
            items.push(item);
        })
        return items;
    }


    render() {
        let {width}=Dimensions.get('window');
        let width_icon = 65;
       let da = this.props.data;
       let i = this.props.rowHasChanged;
        let context = da["context"].length >67?da["context"].substring(0,67)+".....":da["context"];
        return (
            <View style={styles.react_native_vertical_line_list_app_style}>
                <View key={"react_native_vertical_line_list_style_"+i} style={styles.react_native_vertical_line_list_style}>
                    <View key={"components_inex_"+i} style={[styles.components_inex,{width:width}]}>
                        <View key={"components_inex_icon_"+i} style={[styles.components_inex_icon,{width:(width_icon)}]}>
                            <View key={"verticalLine_"+i} style={styles.verticalLine}></View>
                            <Custom_Icon key={"components_inex_icon_circular_"+i} style={styles.components_inex_icon_circular} name='components-circular' color='#DB7E7E' size={30}  ></Custom_Icon>
                        </View>
                        <View key={"components_inex_context_"+i} style={[styles.components_inex_context,{width:(width-width_icon)}]}>
                            <Text key={"title_text_"+i} style={styles.title_text}>{da["name"]}</Text>
                        </View>
                    </View>
                    {/*内容区域*/}
                    <View key={"_2components_inex"+i} style={[styles.components_inex,{width:width,height:60}]}>
                        <View key={"_2components_inex_icon"+i} style={[styles.components_inex_icon,{width:(width_icon-width_icon+15)}]}>
                            <View key={"_2verticalLine"+i} style={styles.verticalLine}></View>
                        </View>
                        <View key={"_2components_inex_context"+i} style={[styles.components_inex_context,{width:(width-width_icon)}]}>
                            <Text key={"_2title_context_text"+i} style={styles.title_context_text}>    {context}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    react_native_vertical_line_list_app_style:{
        paddingBottom:0.5,
    },
    react_native_vertical_line_list_style:{
        backgroundColor:'green',
        flex:1,
    },
    components_inex:{
        flexDirection:"row",
        height:40,
        // backgroundColor:'red',
    },
    components_inex_icon:{
        // backgroundColor:'yellow',
        position:'relative',
        flex:1,
    },
    components_inex_icon_circular:{
        left:15,
        top:3,
    },
    verticalLine:{
        left:29,
        top:0,
        backgroundColor:'#CCC',
        height:80,
        width:2,
        position:'absolute',
    },
    components_inex_context:{
        flex:1,
        // backgroundColor:'green',
        //paddingLeft:5,
    },
    title_text:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
        // padding:5,
        flex:1,
        textAlignVertical:'center',
    },
    title_context_text:{
        // paddingLeft:1,
        lineHeight:21,
    },
});
export default VerticalLineList;
