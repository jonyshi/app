/**
 * Created by wangshi on 2016/9/5.
 */
import React,{ Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    StatusBar,
    BackAndroid,DrawerLayoutAndroid,Text,
    View
} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

import Login from   './login/Login';
import Index from   './Index';
// import Index from   './Index_scroll_tabbar';
// import Index from   './Index_Custom_Icon';
const store = configureStore();

export default class MainDrawerLayoutAndroid extends Component {

    constructor() {
        super();
    }

    render = () => {
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>java</Text>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Cdd</Text>
            </View>
        );
        return (
            <Provider store={store}>
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Right}
                    renderNavigationView={() => navigationView}>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hdddello</Text>
                        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
                        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>往右边滑动</Text>
                    </View>
                </DrawerLayoutAndroid>
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
AppRegistry.registerComponent('MainDrawerLayoutAndroid', () => MainDrawerLayoutAndroid);
