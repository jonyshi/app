import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput,ListView,Platform} from 'react-native';
import {projectUrl} from './constants/Url';
import {Login,getList} from './action/LoginAction';

export default class List_View extends Component {

  constructor(props) {
    super(props);
    let dataSource = new ListView.DataSource({
      getRowData: (dataBlob, sid, rid) => dataBlob[sid][rid],
      getSectionHeaderData: (dataBlob, sid) => dataBlob[sid],
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });
    this.state = {
      data:[],
      dataSource: cloneWithData(dataSource, props.data)
    };
  }
  //在组件接收到新的 props 的时候调用。在初始化渲染的时候，该方法不会调用。
  componentWillReceiveProps(nextProps){
    if (this.props.data !== nextProps.data) {
      this.setState({
        dataSource: cloneWithData(this.state.dataSource, nextProps.data),
      });
    }
  }
  //初始化渲染后触发
  componentDidMount() {
  }

  renderFooter(){
    if (this.state.dataSource.getRowCount() === 0) {
      return this.props.renderEmptyList && this.props.renderEmptyList();
    }
    return this.props.renderFooter && this.props.renderFooter();
  }

  render() {
    {/*contentInset={{bottom, top: contentInset.top}}*/}
    {/*onContentSizeChange={this.onContentSizeChange}*/}
    return(
          <ListView
              initialListSize={10}
              pageSize={LIST_VIEW_PAGE_SIZE}
              {...this.props}
              ref="listview"
              dataSource={this.state.dataSource}
              renderFooter={this.renderFooter}
          />
    );
  }
}

// FIXME: Android has a bug when scrolling ListView the view insertions
// will make it go reverse. Temporary fix - pre-render more rows
const LIST_VIEW_PAGE_SIZE = Platform.OS === 'android' ? 20 : 1;

const styles = StyleSheet.create({
  text:{
    width:140,
    height:40
  }
});