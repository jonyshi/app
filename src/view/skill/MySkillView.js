import React, {Component} from 'react';
import { connect } from 'react-redux';
import {StyleSheet,ScrollView, Text, View,TextInput,ListView,Platform,Image} from 'react-native';
import {projectUrl} from './../../constants/Url';
// import {Login,getList} from './action/LoginAction';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import Custom_Icon from './../../components/icons/custom_Icon';

class MySkillView extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            list:[],
            dataSource:ds,
            loaded: false,
            personal_list_source:ds.cloneWithRows(this._genRows())
        };
    }

    _genRows(){
        //
        let obj = [
            {"type":"default","title":"技术技能","icon":"",data:[
                {"title":"java","icon":"components-phone","list":["具有面向对象思想，扎实的编程功底以及良好的编码习惯;熟练应用servlet,struts1x,struts2x,hibernate,spring,springMVC,ibatis"],'stars':'4'},
                {"title":"flex,as3","icon":"components-mac","list":["flex3.x,flex4.x,As3,以及Cairngorm,prueMVC框架等。"],'stars':'5'},
                {"title":"html","icon":"components-jineng","list":["js,requireJS,seaJS,AMD和CMD规范,熟悉了解ECMAScript4,5,6部分语法。熟练使用js各种使用,以及js的高级编程,喜欢封装自己的组件库"],'stars':'4'},
                {"title":"css","icon":"components-jineng","list":["对css不是特别熟悉，尤其是涉及到布局的时候，感觉思维不够使用感觉思维不够使用"],'stars':'2'},
                {"title":"react","icon":"components-mail","list":["熟悉reactJS,react native,fetch,webpack等。。。"],'stars':'3'}
            ]},
            {"type":"chart","title":"工具技能","icon":"",data:[
                {"title":"java","icon":"components-phone",icon_style:"color:red","list":["具有面向对象思想，扎实的编程功底以及良好的编码习惯;熟练应用servlet,struts1x,struts2x,hibernate,spring,springMVC,ibatis"],'stars':'4'},
                {"title":"flex,as3","icon":"components-mac",icon_style:"color:yellow","list":["flex3.x,flex4.x,As3,以及Cairngorm,prueMVC框架等。"],'stars':'5'},
                {"title":"html","icon":"components-jineng",icon_style:"color:blue","list":["js,requireJS,seaJS,AMD和CMD规范,熟悉了解ECMAScript4,5,6部分语法。熟练使用js各种使用,以及js的高级编程,喜欢封装自己的组件库"],'stars':'4'},
                {"title":"css","icon":"components-jineng",icon_style:"color:green","list":["对css不是特别熟悉，尤其是涉及到布局的时候，感觉思维不够使用感觉思维不够使用"],'stars':'3'},
                {"title":"react","icon":"components-mail",icon_style:"color:yellow","list":["熟悉reactJS,react native,fetch,webpack等。。。"],'stars':'3'}
            ]}
        ];
        return obj;
    }

    // item row default style
    getDefaultItemRemder(data,_key){
        let list_ht = [];
        data.list.map((da, i) => {
            list_ht.push(<Text style={styles.title_context} key={da+"_personalRenderRow_"+i}>    {da}</Text>)
        });
        let xin_hts = [];
        for (let i=0;i<5;i++){
            if(i <= (Number(data["stars"])-1)){
                xin_hts.push(<Custom_Icon key={"xinxin_"+i} name='components-kuloutou' color='#f5bc24' size={22} />);
            }else{
                xin_hts.push(<Custom_Icon key={"xinxin_"+i} name='components-kuloutou' color='#ccc' size={22} />);
            }
        }
        let ht =  <View key={"View_"+_key} style={styles.personal_render_row_view}>
            <Custom_Icon key={"Custom_Icon_"+_key} style={[styles.personal_render_row_view_img,{alignItems: 'center',textAlignVertical:'center'}]} name={data["icon"]}  size={40} />
            <View key={"View_View_"+_key} style={[styles.personal_render_row_view_item_view,{flex:1}]}>
                <View key={"View_View_View_"+_key} style={styles.personal_render_row_view_item_view_title}>
                    <Text key={"View_View_View_Text"+_key} style={styles.title} >{data.title}</Text>
                    <View key={"View_View_View_View"+_key} style={{flex:1.4,alignItems: 'flex-end',flexDirection:'row'}}>
                        <Text key={"View_View_View_View_Text"+_key} style={{flex:1,textAlignVertical:'center',color:'#FFFFFF'}}>擅长指数:</Text>
                        {xin_hts}
                    </View>
                </View>
                {list_ht}
            </View>
        </View>;
        return(ht);
    }
    // item row default style
    getChartItemRemder(data,_key){
        // data["icon_style"]
        let ht =   <View key={"remder_view_"+_key} style={{backgroundColor:'#ccc',height:80,width:100,marginLeft:10,marginTop:10,alignItems: 'center',}}>
                        <View key={"remder_view_view_"+_key}>
                            <Custom_Icon  key={"remder_view_view_Custom_Icon"+_key} style={{alignItems: 'center',textAlignVertical:'center',}} name="components-jineng" size={50} />
                        </View>
                        <View  key={"remder_view_view2_"+_key}>
                            <Text key={"remder_view_view2_Text_"+_key} style={{alignItems: 'center',textAlignVertical:'center'}}>{data.title}</Text>
                            <View key={"remder_view_view2_View_"+_key} style={{backgroundColor:'#2d2e32',height:6,borderRadius:8}}>
                                <View  key={"remder_view_view2_View_View_"+_key} style={{backgroundColor:'#268fb2',height:6,width:30,borderRadius:8}}>
                                </View>
                            </View>
                        </View>
        </View>;
        return(ht);
    }
    //list item row
    getPersonalRenderRow(da,rowHasChanged){
        let item_hts = [];
        let title_ht = null;
        if(da.type && da.type == "default"){
            da.data.map((item_da, i) => {
                let item_ht = this.getDefaultItemRemder(item_da,rowHasChanged+"_"+i);
                item_hts.push(item_ht);
            });
            ht = <View>
                <Text style={{height:35,textAlignVertical:'center',color:'#FFFFFF',backgroundColor:'#5c589e'}}>{da.title}</Text>
                {item_hts}
            </View>;

        }else if(da.type == "chart"){
            da.data.map((item_da, i) => {
                let item_ht = this.getChartItemRemder(item_da,rowHasChanged+"_"+i);
                item_hts.push(item_ht);
            });
            ht = <View>
                <Text style={{height:35,textAlignVertical:'center',color:'#FFFFFF',backgroundColor:'#5c589e'}}>{da.title}</Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {item_hts}
                </View>
            </View>;
        }else{}
        // height:100,  {item_hts}

        return (ht);
    }


    render() {
        return (<View style={styles.IndexPageView_app_inex}  >
               <View style={styles.app_title}  >
                   {/* <Image source={require('./3.png')}
                           capInsets={{top:10,left:100,bottom:10,right:10}}
                           resizeMode = 'stretch'
                           style={{}}/>*/}

                   <Custom_Icon style={{alignItems: 'center',textAlignVertical:'center',width:70,height:70}} name="components-jineng"  size={55} />

                    <View style={{flex:1,margin:10,justifyContent:'flex-start'}}  >
                        <Text style={{flex:1,textAlignVertical:'top',color:'#FFFFFF'}}>
                            <Custom_Icon name='components-kuloutou' color='#ffffff' size={20}  backgroundColor="red" />
                            jony[软件工程师]
                        </Text>
                        <Text style={{flex:1,fontSize:14,color:'#FFFFFF'}}>一直在路上，从未被超越...</Text>
                    </View>
                </View>

                <ListView  contentContainerStyle={styles.list}
                           dataSource={this.state.personal_list_source}
                          initialListSize={1}
                          renderRow={(rowData,rowHasChanged) =>this.getPersonalRenderRow(rowData,rowHasChanged)}
                          style={{flex:5}}
                />
            </View>
        );

    }
}
const styles = StyleSheet.create({
    IndexPageView_app_inex:{
        flex:1,
        // backgroundColor:'green',
    },
    app_title:{
        flex:1,
        backgroundColor:'#292d2c',
        flexDirection:'row',
        alignItems: 'center',
        paddingLeft:20,
    },
    title_context:{
        flexDirection:'column',
        color:'#000000',
        fontSize:13,
        flex:1,
        textAlignVertical:'top',
        lineHeight:21,
        // backgroundColor:'#ffffff',
    },
    personal_render_row_view:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        borderBottomWidth:1,
        borderBottomColor:'#000000',
        padding:2,
        // flex:1,
        // height:70,
    },
    personal_render_row_view_img:{
        width:50,
        // height:50,
        lineHeight:50,
        flexDirection:'column',
        justifyContent:'flex-start',
        //backgroundColor:'yellow',
    },
    personal_render_row_view_item_view:{

    },
    personal_render_row_view_item_view_title:{
        flexDirection:'row',
    },
    title:{
        color:'#000000',
        fontSize:16,
        flex:1,
        textAlignVertical:'center',
        fontWeight: 'bold',
    },

    personal_render_row_view_char:{
        backgroundColor:'red',
        flexDirection:'row',
        flexWrap:"wrap",
        justifyContent:'flex-start',
        // alignItems: 'center',
        // borderBottomWidth:1,
        // borderBottomColor:'#000000',
        // padding:2,
    },
});
function mapStateToProps(state) {
    const {list} = state.loginReducers;
    return{
        list
    }
}
export default connect(mapStateToProps)(MySkillView);