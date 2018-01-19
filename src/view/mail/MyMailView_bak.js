import React, {Component} from 'react';
import { connect } from 'react-redux';
import {StyleSheet,ScrollView, Text, View,TextInput,ListView,Platform,Image,Animated,Easing} from 'react-native';
import {projectUrl} from './../../constants/Url';
// import {Login,getList} from './action/LoginAction';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import Custom_Icon from './../../components/icons/custom_Icon';

class IndexPageView extends Component {

    constructor(props) {
        super(props);
        console.log("  -----constructor-------- ");
        this.state = {
            fadeInOpacity: new Animated.Value(0), // 初始值
            bounceValue: new Animated.Value(0),
        };
    }
    componentDidMount() {
        console.log("  -----componentDidMount-------- ");
        Animated.timing(this.state.fadeInOpacity, {
            toValue: 1, // 目标值
            duration: 2500, // 动画时间
            easing: Easing.linear // 缓动函数
        }).start();

        this.state.bounceValue.setValue(1.5);     // 动画开始的时候 设置一个比较大的值
        Animated.spring(                          // 动画可选类型: spring, decay, timing
            this.state.bounceValue,                 // Animate `bounceValue`
            {
                toValue: 0.8,                         // Animate to smaller size
                friction: 1,                          // Bouncier spring
            }
        ).start();

    }
    render() {
        return (
            <View style={{alignItems:'flex-start',paddingLeft:10}}>

                <Animated.Image                         // 基础组件: Image, Text, View
                    source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
                    style={{
                        width:400,
                        height:300,
                        flex: 1,
                        transform: [                        // `transform`   有顺序的数组
                            {scale: this.state.bounceValue},  // Map `bounceValue` to `scale`
                        ]
                    }}
                />


                <Animated.View style={[styles.demo, {
                    opacity: this.state.fadeInOpacity
                }]}>
                    <Text style={styles.text}>悄悄的，我出现了</Text>
                </Animated.View>

               {/* <Text style={{paddingTop:10}}>王石
                </Text>
                <Text>
                    神州泰岳软件股份有限公司
                </Text>
                <Text>
                    电话：+86(10)15810266391
                </Text>
                <Text>
                    邮件：wangshi@ultrapower.com.cn
                </Text>
                <Text>
                    网址：www.ultrapower.com.cn
                </Text>
                <Text>
                    地址：北京市朝阳区北苑路甲13号院北辰泰岳大厦22层  100107
                </Text>
                <Text>
                    （地铁5号线北苑路北站，A2出口，向北100米十字路口西南角）
                </Text>
                <Text>
                    ----------- 居利思义 • 身劳心安 • 人强我强 • 共同发展 -----------
                </Text>
                <Text>

                    保密提示：本邮件仅供上述收件人使用，并可能包含受法律保护之秘密信息。如果您并非上述所列之收件人，请立即删除本邮件，并勿阅读、传播、复制或以任何方式扩散本邮件。谢谢！
                </Text>*/}
            </View>

        );

    }
}
const styles = StyleSheet.create({

    demo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 30
    }

});
function mapStateToProps(state) {
    return{
    }
}
export default connect(mapStateToProps)(IndexPageView);