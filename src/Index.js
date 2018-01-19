import React, {Component} from 'react';
import { connect } from 'react-redux';
import {StyleSheet,ScrollView, Text, View,TextInput,ListView,Platform,Image} from 'react-native';
import {projectUrl} from './constants/Url';
// import {Login,getList} from './action/LoginAction';
import TabNavigator from 'react-native-tab-navigator';
import FacebookTabBar from '../src/components/FacebookTabBar';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import { createIconSet } from 'react-native-vector-icons';
import TbaBar from '../src/components/react-native-tabbar';
import Custom_Icon from './components/icons/custom_Icon';
import IndexPage from './view/index/IndexPageView';
import MyIntroductionView from './view/introduction/MyIntroductionView';
import MySkillView from './view/skill/MySkillView';
import MyMailView from './view/mail/MyMailView';

class Index extends Component {

    constructor(props) {
        super(props);
        this.getRenderRow = this.getRenderRow.bind(this);
        this.gotoPage = this.gotoPage.bind(this);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            list:[],
            dataSource:ds,
            loaded: false,
            render_tab_bar_obj:null
        };
    }
    //在组件接收到新的 props 的时候调用。在初始化渲染的时候，该方法不会调用。
    componentWillReceiveProps(nextProps){
        this.state.list = nextProps.list;
        if(nextProps.list.length != 0){
            this.state.dataSource = this.state.dataSource.cloneWithRows(nextProps.list);
            this.state.loaded = true;
        }

        this.setState({
            ...this.state
        });
    }
    //初始化渲染后触发
    componentDidMount() {
        this.dispatchService();
    }

    dispatchService(){
        // const { dispatch } = this.props;
        // let request_param = {url:projectUrl+""};
        // // let request_param = {url:projectUrl+"data.json"};
        // console.log("---------------------查询----------------------");
        // console.log(request_param)
       // dispatch(getList(request_param));
    }

    getRenderRow(team,rowHasChanged){
        let ht =  <View style={styles.container}>
            <Image
                source={require('./img/2.png')}
                style={styles.thumbnail}
            />
            <View style={styles.rightContainer}>
                <Text style={styles.name}>{team.team_cn}</Text>
                <Text style={styles.rank}>{team.team_order}</Text>
            </View>
        </View>;
        return(ht);
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                   正在玩命加载...
                </Text>
            </View>
        );
    }

    gotoPage(key){
        this.refs.tabView.goToPage(key);
    }

    render() {
        let tabItem = [
            {"name":"个人","icon":"components-phone","tooltip":"黑的刚刚上路的小菜鸟。"},
            {"name":"简历","icon":"components-word","tooltip":"java、adobe flex、as3、css+div..."},
            {"name":"技能","icon":"components-jineng","tooltip":"java、adobe flex、as3、css+div..."},
            {"name":"联系方式","icon":"components-mail","tooltip":"1378083072@qq.com"}
        ];
        // {"name":"作品","icon":"components-mac","tooltip":"www.githibute.com"},
            return (<View style={styles.app_inex}  >
                   <View style={styles.tabBar_top}  >
                        <View style={{flex:1,alignItems:'center'}}  >
                            <Custom_Icon name='components-kuloutou' color='#000000' size={30}  />
                        </View>
                        <View style={{flex:5,borderLeftWidth:1,borderRightWidth:1,borderLeftColor:'#000000',borderRightColor:'#000000'}}  >
                            <Text style={{flex:1,textAlign:'center',textAlignVertical:'center'}}>关于我</Text>
                        </View>
                        <View style={{flex:1,alignItems:'center'}}  >
                            <Icon name='ios-mail-outline' color='#5a626d' size={30}  />
                        </View>
                    </View>
                    <ScrollableTabView style={styles.tabBar_bottom} scrollWithoutAnimation={true} ref="tabView"
                        renderTabBar={(renderObj) =><TbaBar tabItems={tabItem}/>} tabBarPosition='bottom'>
                        <IndexPage style={styles.context} gotoFatherPage={this.gotoPage} ></IndexPage>
                        <MyIntroductionView style={styles.context}></MyIntroductionView>
                        <MySkillView style={styles.context}></MySkillView>
                        <MyMailView style={styles.context}></MyMailView>
                    </ScrollableTabView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    app_inex:{
        flex:1.4,
        padding:5,
        // backgroundColor:'red',
    },
    tabBar_top:{
        flexDirection:'row',
        justifyContent:'flex-start',
        backgroundColor:'#F7F7F7',
        flex:1.2,
    },
    tabBar_bottom:{
        flex:14,
       // backgroundColor:'red',
       // backgroundColor:'#000',
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
    personal_render_row_view_item_view:{
        height:68,
        //backgroundColor:'red',
    },
});
function mapStateToProps(state) {
    const {list} = state.loginReducers;
    return{
        list
    }
}
export default connect(mapStateToProps)(Index);