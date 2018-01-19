import React,{ Component } from 'react';
import { StyleSheet, Text, View, Navigator, TouchableOpacity} from 'react-native';
import Login from   './login/Login';
import Index from   './Index';

export default class Main extends Component {
    constructor() {
        super();
    }
    renderScene(route, navigator) {
        var routeId = route.id;
        if (routeId === 'Login') {
            return (<Login  navigator={navigator}/>);
        }
        if (routeId === 'Index') {
            return (<Index navigator={navigator}/>);
        }
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

    render() {
        return (
            <Navigator
                initialRoute={{id: 'Login', name: 'Index'}} renderScene={this.renderScene.bind(this)}
                configureScene={(route) => {
                    if (route.sceneConfig) {
                        return route.sceneConfig;
                    }
                    return Navigator.SceneConfigs.FloatFromRight;
                }}
            />
        );
    }
}
var styles = StyleSheet.create({
    navigator_view:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
    }
});