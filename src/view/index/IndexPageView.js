import React, {Component} from 'react';
import { connect } from 'react-redux';
import {StyleSheet,ScrollView, Text, View,TextInput,ListView,Platform,Image,TouchableHighlight} from 'react-native';
import {projectUrl} from './../../constants/Url';
// import {Login,getList} from './action/LoginAction';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import Custom_Icon from './../../components/icons/custom_Icon';

class IndexPageView extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.getPersonalRenderRow = this.getPersonalRenderRow.bind(this);
        this._pressRow = this._pressRow.bind(this);
        this.state = {
            list:[],
            dataSource:ds,
            loaded: false,
            personal_list_source:ds.cloneWithRows(this._genRows())
        };
    }

    _genRows(){
        let obj = [
            {"name":"0","title":"个人","icon":"components-phone","list":["爱设计、爱交互、爱学习、爱思考、爱桌球、执着在这条路上走到黑的刚刚上路的小菜鸟。"]},
            {"name":"1","title":"简历","icon":"components-mac","list":["www.githibute.com"]},
            {"name":"2","title":"技能","icon":"components-jineng","list":["java、adobe flex、as3、css+div..."]},
            {"name":"3","title":"联系方式","icon":"components-mail","list":["1378083072@qq.com","小丸子UI"]}
        ];
        return obj;
    }

    getPersonalRenderRow(data,rowHasChanged,rowID){
        let list_ht = [];
        data.list.map((da, i) => {
            list_ht.push(<Text style={styles.title_context} key={da+"_personalRenderRow_"+i}>{da}</Text>)
        });
        let ht = <TouchableHighlight underlayColor='#dddddd' onPress={()=>this._pressRow(Number(data.name))}>
                    <View style={styles.personal_render_row_view}>
                        <Image
                            source={require('./2.png')}
                            style={styles.personal_render_row_view_img} />
                        <View style={styles.personal_render_row_view_item_view}>
                            <Text style={styles.title} >{data.title}</Text>
                            {list_ht}
                        </View>
                    </View>
               </TouchableHighlight>;
        return(ht);
    }

    _pressRow(key){
        this.props.gotoFatherPage(key);
    }

    render() {
        return (<View style={styles.IndexPageView_app_inex}  >
                    <View style={styles.app_title}  >
                        <Image source={require('./3.png')}
                               capInsets={{top:10,left:100,bottom:10,right:10}}
                               resizeMode = 'stretch'
                               style={{width:70,height:70}}/>
                        <View style={{flex:1,margin:10,justifyContent:'flex-start'}}  >
                            <Text style={{flex:1,textAlignVertical:'top',color:'#FFFFFF'}}>
                                <Custom_Icon name='components-kuloutou' color='#ffffff' size={20}  backgroundColor="red" />
                                jony[软件工程师]
                            </Text>
                            <Text style={{flex:1,fontSize:14,color:'#FFFFFF'}}>一直在路上，从未被超越...</Text>
                        </View>
                    </View>

                    <ListView dataSource={this.state.personal_list_source}
                              initialListSize={1}
                              renderRow={this.getPersonalRenderRow}
                              style={{flex:5}}
                    />
            </View>
        );

    }
}
const styles = StyleSheet.create({
    IndexPageView_app_inex:{
        flex:1,
        backgroundColor:'green',
        // flex:13,
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
        // backgroundColor:'#ffffff',
    },
    personal_render_row_view:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        borderBottomWidth:1,
        borderBottomColor:'#000000',
        padding:2,
        height:70,
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
});
function mapStateToProps(state) {
    const {list} = state.loginReducers;
    return{
        list
    }
}
export default connect(mapStateToProps)(IndexPageView);