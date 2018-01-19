import React, {Component} from 'react';
import { connect } from 'react-redux';
import {StyleSheet,ScrollView, Text, View,TextInput,ListView,Platform,Image,Dimensions} from 'react-native';
import {projectUrl} from './../../constants/Url';
// import {Login,getList} from './action/LoginAction';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import Custom_Icon from './../../components/icons/custom_Icon';
import VerticalLineListItem from '../../components/react-native-vertical-line-list-item';

class IndexPageView extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            personal_list_source:ds.cloneWithRows(this._genRows())
        };
    }

    _genRows(){
        let list = [
            {"name":"2015/07 - 2016/10","context":"徐州网络系统工程有限公司 担任职位：实习生.　1.负责大客户的售前支持;2.制定新产品的技术支持方案;3.负责部门日常管理，协调部门内部工作;4.负责销售人员和技术支持工程师的技术培训。"},
            {"name":"2015/07 - 2016/10","context":"徐州网络系统工程有限公司 担任职位：组长.　1.负责大客户的售前支持;2.制定新产品的技术支持方案;3.负责部门日常管理，协调部门内部工作;4.负责销售人员和技术支持工程师的技术培训。"},
            {"name":"2015/07 - 2016/10","context":"徐州网络系统工程有限公司 担任职位：部门经理.　1.负责大客户的售前支持;2.制定新产品的技术支持方案;3.负责部门日常管理，协调部门内部工作;4.负责销售人员和技术支持工程师的技术培训。"},
            {"name":"2015/07 - 2016/10","context":"徐州网络系统工程有限公司 担任职位：架构师.　1.负责大客户的售前支持;2.制定新产品的技术支持方案;3.负责部门日常管理，协调部门内部工作;4.负责销售人员和技术支持工程师的技术培训。"},
            {"name":"2015/07 - 2016/10","context":"徐州网络系统工程有限公司 担任职位：总经理.　1.负责大客户的售前支持;2.制定新产品的技术支持方案;3.负责部门日常管理，协调部门内部工作;4.负责销售人员和技术支持工程师的技术培训。"},
            {"name":"2015/07 - 2016/10","context":"徐州网络系统工程有限公司 担任职位：副总.　1.负责大客户的售前支持;2.制定新产品的技术支持方案;3.负责部门日常管理，协调部门内部工作;4.负责销售人员和技术支持工程师的技术培训。"},

            {"name":"2015/07 - 2016/10","context":"徐州网络系统工程有限公司 担任职位：部门经理.　1.负责大客户的售前支持;2.制定新产品的技术支持方案;3.负责部门日常管理，协调部门内部工作;4.负责销售人员和技术支持工程师的技术培训。"},
            {"name":"2015/07 - 2016/10","context":"徐州网络系统工程有限公司 担任职位：架构师.　1.负责大客户的售前支持;2.制定新产品的技术支持方案;3.负责部门日常管理，协调部门内部工作;4.负责销售人员和技术支持工程师的技术培训。"},
            {"name":"2015/07 - 2016/10","context":"徐州网络系统工程有限公司 担任职位：总经理.　1.负责大客户的售前支持;2.制定新产品的技术支持方案;3.负责部门日常管理，协调部门内部工作;4.负责销售人员和技术支持工程师的技术培训。"},
            {"name":"2015/07 - 2016/10","context":"徐州网络系统工程有限公司 担任职位：副总.　1.负责大客户的售前支持;2.制定新产品的技术支持方案;3.负责部门日常管理，协调部门内部工作;4.负责销售人员和技术支持工程师的技术培训。"},
            {"name":"2015/07 - 2016/10","context":"徐州网络系统工程有限公司 担任职位：部门经理.　1.负责大客户的售前支持;2.制定新产品的技术支持方案;3.负责部门日常管理，协调部门内部工作;4.负责销售人员和技术支持工程师的技术培训。"},
            {"name":"2015/07 - 2016/10","context":"徐州网络系统工程有限公司 担任职位：架构师.　1.负责大客户的售前支持;2.制定新产品的技术支持方案;3.负责部门日常管理，协调部门内部工作;4.负责销售人员和技术支持工程师的技术培训。"},
            {"name":"2015/07 - 2016/10","context":"徐州网络系统工程有限公司 担任职位：总经理.　1.负责大客户的售前支持;2.制定新产品的技术支持方案;3.负责部门日常管理，协调部门内部工作;4.负责销售人员和技术支持工程师的技术培训。"},
            {"name":"2015/07 - 2016/10","context":"徐州网络系统工程有限公司 担任职位：副总.　1.负责大客户的售前支持;2.制定新产品的技术支持方案;3.负责部门日常管理，协调部门内部工作;4.负责销售人员和技术支持工程师的技术培训。"},
            {"name":"2015/07 - 2016/10","context":"徐州网络系统工程有限公司 担任职位：部门经理.　1.负责大客户的售前支持;2.制定新产品的技术支持方案;3.负责部门日常管理，协调部门内部工作;4.负责销售人员和技术支持工程师的技术培训。"},
            {"name":"2015/07 - 2016/10","context":"徐州网络系统工程有限公司 担任职位：架构师.　1.负责大客户的售前支持;2.制定新产品的技术支持方案;3.负责部门日常管理，协调部门内部工作;4.负责销售人员和技术支持工程师的技术培训。"},
            {"name":"2015/07 - 2016/10","context":"徐州网络系统工程有限公司 担任职位：总经理.　1.负责大客户的售前支持;2.制定新产品的技术支持方案;3.负责部门日常管理，协调部门内部工作;4.负责销售人员和技术支持工程师的技术培训。"},
            {"name":"2015/07 - 2016/10","context":"徐州网络系统工程有限公司 担任职位：副总.　1.负责大客户的售前支持;2.制定新产品的技术支持方案;3.负责部门日常管理，协调部门内部工作;4.负责销售人员和技术支持工程师的技术培训。"},
            {"name":"2015/07 - 2016/10","context":"徐州网络系统工程有限公司 担任职位：部门经理.　1.负责大客户的售前支持;2.制定新产品的技术支持方案;3.负责部门日常管理，协调部门内部工作;4.负责销售人员和技术支持工程师的技术培训。"},
            {"name":"2015/07 - 2016/10","context":"徐州网络系统工程有限公司 担任职位：架构师.　1.负责大客户的售前支持;2.制定新产品的技术支持方案;3.负责部门日常管理，协调部门内部工作;4.负责销售人员和技术支持工程师的技术培训。"},
            {"name":"2015/07 - 2016/10","context":"徐州网络系统工程有限公司 担任职位：总经理.　1.负责大客户的售前支持;2.制定新产品的技术支持方案;3.负责部门日常管理，协调部门内部工作;4.负责销售人员和技术支持工程师的技术培训。"},
            {"name":"2015/07 - 2016/10","context":"徐州网络系统工程有限公司 担任职位：副总.　1.负责大客户的售前支持;2.制定新产品的技术支持方案;3.负责部门日常管理，协调部门内部工作;4.负责销售人员和技术支持工程师的技术培训。"},


            {"name":"2015/07 - 2016/10","context":"徐州网络系统工程有限公司 担任职位：职业经理人.　1.负责大客户的售前支持;2.制定新产品的技术支持方案;3.负责部门日常管理，协调部门内部工作;4.负责销售人员和技术支持工程师的技术培训。"}
        ]
        return list;
    }

    getPersonalRenderRow(data,rowHasChanged){
      /*  let list_ht = [];
        data.list.map((da, i) => {
            list_ht.push(<Text style={styles.title_context} key={da+"_personalRenderRow_"+i}>{da}</Text>)
        });
        let ht =  <View style={styles.personal_render_row_view}>
            <Text style={styles.title} >{data.name}</Text>
        </View>;*/
        return(<VerticalLineListItem data={data} rowHasChanged={rowHasChanged} ></VerticalLineListItem>);
    }
    render() {
        return (<View style={styles.my_introduction_view_style}>
                <ListView dataSource={this.state.personal_list_source}
                          initialListSize={1}
                          renderRow={(rowData,rowHasChanged) =>this.getPersonalRenderRow(rowData,rowHasChanged)}
                          style={{flex:5}}
                />
                   {/* <VerticalLineList data={list}></VerticalLineList >*/}
            </View>
        );

    }
}
const styles = StyleSheet.create({
    my_introduction_view_style:{
        flex:1,
    },

});
function mapStateToProps(state) {
    const {list} = state.loginReducers;
    return{
        list
    }
}
export default connect(mapStateToProps)(IndexPageView);