import React, {Component} from 'react';
import {TouchableHighlight, StyleSheet, Text, View} from 'react-native';

export default class Button_Stone extends Component {
    render() {
        return (
            <TouchableHighlight  underlayColor={this.props.underlayColor} activeOpacity={0.5}  style={this.props.style} onPress={this.props.onPress}>
                <Text style={styles.style_view_text}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    style_view_text: {
        textAlign: 'center',
        fontSize: 16, color: '#fff',
        lineHeight:39,
        padding:50,
    }
});