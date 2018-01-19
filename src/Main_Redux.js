/**
 * Created by wangshi on 2016/9/5.
 */
import React,{ Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    StatusBar,
    BackAndroid,
    View
} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

import Login from   './login/Login';
import Index from   './Index';
// import Index from   './Index_scroll_tabbar';
// import Index from   './Index_Custom_Icon';
const store = configureStore();

import IndexPage from './view/index/IndexPageView';
import MyIntroductionView from './view/introduction/MyIntroductionView';
import MySkillView from './view/skill/MySkillView';
import MyMailView from './view/mail/MyMailView';


export default class Main_Redux extends Component {

    constructor() {
        super();
    }
    renderScene(route, navigator) {
        var routeId = route.id;
        if (routeId === 'Login') {
            return (<Login  navigator={navigator}/>);
        }
        else if (routeId === 'Index') {
            return (<Index navigator={navigator}/>);
        }
        else if (routeId === 'MyIntroductionView') {
            return (<MyIntroductionView navigator={navigator}/>);
        }
        else{}
        return this.noRoute(navigator);
    }

    noRoute(navigator) {
        return (
            <View style={styles.navigator_view}>
                <TouchableOpacity onPress={() => navigator.pop()}>
                    <Text>
                        对不起,页面跳转错误!
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    render = () => {
        return (
            <Provider store={store}>
                <Navigator
                    initialRoute={{id: 'Index', name: 'Index'}} renderScene={this.renderScene.bind(this)}
                    configureScene={(route) => {
                        if (route.sceneConfig) {
                            return route.sceneConfig;
                        }
                        return Navigator.SceneConfigs.FloatFromRight;
                }}
                />
            </Provider>
        )
    };
}
const styles = StyleSheet.create({
    navigator_view:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
    }
});
AppRegistry.registerComponent('Main_Redux', () => Main_Redux);
