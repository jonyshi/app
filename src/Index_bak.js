import React, {Component} from 'react';
import { connect } from 'react-redux';
import {StyleSheet, Text, View,TextInput,ListView,Platform,Image} from 'react-native';
import {projectUrl} from './constants/Url';
import {Login,getList} from './action/LoginAction';

class Index extends Component {

    constructor(props) {
        super(props);
        this.getRenderRow = this.getRenderRow.bind(this);

        // const ds = new ListView.DataSource({
        //     rowHasChanged: (r1, r2) => r1 !== r2
        // });
        this.state = {
            list:[],
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
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
        const { dispatch } = this.props;
        let request_param = {url:projectUrl+""};
        // let request_param = {url:projectUrl+"data.json"};
        console.log("---------------------查询----------------------");
        console.log(request_param)
        dispatch(getList(request_param));
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

    render() {
        return(<View>
                <Text key="A6SDF7G8G67HFH">数据列表</Text>
                {/*{
                    this.state.loaded==false?this.renderLoadingView():
                        <ListView dataSource={this.state.dataSource}
                                  initialListSize={4}
                                  renderRow={(rowData,rowHasChanged) =>this.getRenderRow(rowData,rowHasChanged)}
                                  style={styles.listView}
                        />
                }*/}
                <View style={styles.itemlist}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    itemlist:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});
function mapStateToProps(state) {
    const {list} = state.loginReducers;
    return{
        list
    }
}
export default connect(mapStateToProps)(Index);