import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput} from 'react-native';

import Button_Stone from '../common/button/Button_Stone';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.btn_result = this.btn_result.bind(this);
        this.state = {
            user:'',
            pass:''
        };
    }

    btn_result(e) {
        var navigator = this.props.navigator;
        navigator.replace({
            id: 'Index',
        });
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                <View style={{flex: 1, backgroundColor: 'powderblue',flexDirection:'column'}}>
                    <View style={{flex: 1, backgroundColor: 'skyblue',flexDirection:'row',justifyContent:'center'}}>
                        <TextInput style={{flex:1, borderColor: 'gray', borderWidth: 1}}
                                   placeholder='请输入用户名...' defaultValue='请输入用户名...' clearTextOnFocus={false}
                                   onChangeText={(text) => this.setState({user:text})} value={this.state.user}
                        />
                    </View>

                    <View style={{flex: 1, backgroundColor: 'yellow',flexDirection:'row'}}>
                        <TextInput style={{flex:1, borderColor: 'gray', borderWidth: 1}} secureTextEntry={true}
                                   placeholder='请输入用密码...' defaultValue='请输入用密码...' clearTextOnFocus={true}
                                   onChangeText={(text) => this.setState({pass:text})} value={this.state.pass} />
                    </View>

                    <View style={{flex: 1, backgroundColor: 'powderblue',flexDirection:'row',justifyContent:'center'}}>
                        <Button_Stone underlayColor='#4169e1'style={styles.style_view_button}  text='登录' onPress={this.btn_result} />
                        <Button_Stone underlayColor='#4169e1'style={styles.style_view_button}  text='返回' />
                    </View>
                </View>
                <View style={{flex: 1, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    default: {
        height: 26,
        borderWidth: 0.5,
        borderColor: '#0f0f0f',
        flex: 1,
        fontSize: 13,
        padding: 4,
    },
    style_view_button: {
        margin: 5,
        backgroundColor: '#63B8FF',
        borderColor: '#5bc0de',
        height: 45,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    style_view_login:{
        backgroundColor:'#cccccc',
    }
});