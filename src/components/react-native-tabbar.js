import React, {Component} from 'react';
import {
    StyleSheet,
    View,Image,
    TouchableOpacity,
    Text
} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
import Custom_Icon from './icons/custom_Icon';

class TabBar extends Component {

  static propTypes = {
    goToPage: React.PropTypes.func, // 跳转到对应tab的方法
    activeTab: React.PropTypes.number, // 当前被选中的tab下标
    tabs: React.PropTypes.array, // 所有tabs集合
    tabItems:React.PropTypes.array
  }

  setAnimationValue({value}) {
    console.log(" setAnimationValue ");
    console.log(value);
  }

  componentDidMount() {
    // Animated.Value监听范围 [0, tab数量-1]
    this.props.scrollValue.addListener(this.setAnimationValue);
    console.log(" componentDidMount ");
  }

  renderTabOption(tab, i) {
    let color = this.props.activeTab == i ? "#e5ed00" : "#ADADAD"; // 判断i是否是当前选中的tab，设置不同的颜色
    let bgColor = this.props.activeTab == i ? "red" : "#000";
    let itemObj = this.props.tabItems[i];
    return (
        <TouchableOpacity key={"tabbar_"+i} onPress={()=>this.props.goToPage(i)} style={styles.tab}>
          <View key={"tabbar_view"+i} style={[styles.tabItem,{backgroundColor:bgColor}]}>
            <Custom_Icon key={"tabbar_Custom_Icon_view"+i} name={itemObj["icon"]} size={30}  color={color}/>
            <Text key={"tabbar_Text_view"+i} style={{color: color}}>
              {itemObj["name"]}
            </Text>
          </View>
        </TouchableOpacity>
    );
  }
  render() {
    return (
        <View style={styles.tabs}>
          {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
        </View>
    );
  }
}
const styles = StyleSheet.create({
  tab: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',

  },
  tabs: {
    flexDirection: 'row',
    // margin:10,
  },
  tabItem: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    borderRightWidth:1,
    borderRightColor:'#000000',
    padding:1,
  },
  tabItem_img:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,height: 30,overflow: 'visible'
  }
});
export default TabBar;