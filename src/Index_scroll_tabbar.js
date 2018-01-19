import React, {Component} from 'react';
import { connect } from 'react-redux';
import {StyleSheet,ScrollView, Text, View,TextInput,ListView,Platform,Image} from 'react-native';
import {projectUrl} from './constants/Url';
import {Login,getList} from './action/LoginAction';
import TabNavigator from 'react-native-tab-navigator';
import FacebookTabBar from '../src/components/FacebookTabBar';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import { createIconSet } from 'react-native-vector-icons';
import TbaBar from '../src/components/react-native-tabbar';
import Custom_Icon from './components/icons/custom_Icon';

class Index extends Component {

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
        let obj = [
            {"title":"关于我","icon":"","list":["爱设计、爱交互、爱学习、爱思考、爱桌球、执着在这条路上走到黑的刚刚上路的小菜鸟。"]},
            {"title":"个人作品","icon":"","list":["www.githibute.com"]},
            {"title":"个人技能","icon":"","list":["java、adobe flex、as3、css+div..."]},
            {"title":"联系方式","icon":"","list":["1378083072@qq.com","小丸子UI"]},

            {"title":"关于我","icon":"","list":["爱设计、爱交互、爱学习、爱思考、爱桌球、执着在这条路上走到黑的刚刚上路的小菜鸟。"]},
            {"title":"个ty人作品","icon":"","list":["www.githibute.com"]},
            {"title":"个人技能","icon":"","list":["java、adobe flex、as3、css+div..."]},
            {"title":"关ty于我","icon":"","list":["爱设计、爱交互、爱学习、爱思考、爱桌球、执着在这条路上走到黑的刚刚上路的小菜鸟。"]},
            {"title":"个人ty作品","icon":"","list":["www.githibute.com"]},
            {"title":"个f人技能","icon":"","list":["java、adobe flex、as3、css+div..."]},
            {"title":"关于ty我","icon":"","list":["爱设计、爱交互、爱学习、爱思考、爱桌球、执着在这条路上走到黑的刚刚上路的小菜鸟。"]},
            {"title":"个ert人作品","icon":"","list":["www.githibute.com"]},
            {"title":"个dsf人技能","icon":"","list":["java、adobe flex、as3、css+div..."]},
            {"title":"关dfg于我","icon":"","list":["爱设计、爱交互、爱学习、爱思考、爱桌球、执着在这条路上走到黑的刚刚上路的小菜鸟。"]},
            {"title":"个dfgdfg人作品","icon":"","list":["www.githibute.com"]},
            {"title":"个ty人技能","icon":"","list":["java、adobe flex、as3、css+div..."]},
            {"title":"关ytfdg于我","icon":"","list":["爱设计、爱交互、爱学习、爱思考、爱桌球、执着在这条路上走到黑的刚刚上路的小菜鸟。"]},
            {"title":"个gdhdsfg人作品","icon":"","list":["www.githibute.com"]},
            {"title":"个dyusfg人技能","icon":"","list":["java、adobe flex、as3、css+div..."]}
        ];
        return obj;
    }
    render() {
         return(
             <View style={styles.index}>
            {/**/}
               <Text >SimpleExample 最普通的tab切换控件。 </Text>
                <ScrollableTabView
                    style={{marginTop: 20, }}
                    renderTabBar={() => <DefaultTabBar />}
                >
                    <Text tabLabel='Tab #1'>My</Text>
                    <Text tabLabel='Tab #2'>favorite</Text>
                    <Text tabLabel='Tab #3'>project</Text>
                </ScrollableTabView>

                <Text >ScrollableTabsExample tab的个数可以动态增加显示</Text>
                <ScrollableTabView
                    style={{marginTop: 20, }}
                    initialPage={0}
                    renderTabBar={() => <ScrollableTabBar />}
                >
                    <Text tabLabel='Tab #1'>My</Text>
                    <Text tabLabel='Tab #2 word word'>favorite</Text>
                    <Text tabLabel='Tab #3 word word word'>project</Text>
                    <Text tabLabel='Tab #4 word word word word'>favorite</Text>
                    <Text tabLabel='Tab #5'>project</Text>
                </ScrollableTabView>

                <Text >OverlayExample 浮动在最上面</Text>
                 <ScrollableTabView
                     style={{ marginTop: 30}}
                     renderTabBar={()=><DefaultTabBar backgroundColor='rgba(255, 255, 255, 0.7)' />}
                     tabBarPosition='overlayTop'
                 >
                     <ScrollView tabLabel='iOS'>
                         <Icon name='logo-apple' color='black' size={300} style={styles.icon} />
                         <Icon name='ios-phone-portrait' color='black' size={300} style={styles.icon} />
                         <Icon name='logo-apple' color='#DBDDDE' size={300} style={styles.icon} />
                         <Icon name='ios-phone-portrait' color='#DBDDDE' size={300} style={styles.icon} />
                     </ScrollView>
                     <ScrollView tabLabel='Android'>
                         <Icon name='logo-android' color='#A4C639' size={300} style={styles.icon} />
                         <Icon name='logo-android' color='black' size={300} style={styles.icon} />
                         <Icon name='logo-android' color='brown' size={300} style={styles.icon} />
                     </ScrollView>
                 </ScrollableTabView>

                 <Text >FacebookExample 一般用作手机上方的tab切换</Text>
                 <ScrollableTabView
                     style={{marginTop: 20, }}
                     initialPage={1}
                     renderTabBar={() => <FacebookTabBar />}
                 >
                     <ScrollView tabLabel="ios-paper" style={styles.tabView}>
                         <View style={styles.card}>
                             <Text>News</Text>
                         </View>
                     </ScrollView>
                     <ScrollView tabLabel="ios-people" style={styles.tabView}>
                         <View style={styles.card}>
                             <Text>Friends</Text>
                         </View>
                     </ScrollView>
                     <ScrollView tabLabel="ios-chatboxes" style={styles.tabView}>
                         <View style={styles.card}>
                             <Text>Messenger</Text>
                         </View>
                     </ScrollView>
                     <ScrollView tabLabel="ios-notifications" style={styles.tabView}>
                         <View style={styles.card}>
                             <Text>Notifications</Text>
                         </View>
                     </ScrollView>
                     <ScrollView tabLabel="ios-list" style={styles.tabView}>
                         <View style={styles.card}>
                             <Text>Other nav</Text>
                         </View>
                     </ScrollView>
                 </ScrollableTabView>


            </View>
        );
    }
}
const styles = StyleSheet.create({
    index:{
      flex:1
    },
    container: {
        marginTop: 30,
    },
    icon: {
        width: 300,
        height: 300,
        alignSelf: 'center',
    },

})
function mapStateToProps(state) {
    const {list} = state.loginReducers;
    return{
        list
    }
}
export default connect(mapStateToProps)(Index);