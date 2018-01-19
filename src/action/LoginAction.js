import * as types from '../constants/ActionTypes';
import * as menth_type from '../constants/RequestType';
import fetch from 'isomorphic-fetch';

//ajax 调用数据
export function Login(obj) {
    let method = obj.method?obj.method :"GET";
    menth_type[method].method =method;
    if(method == "POST"){
        menth_type[method].headers = {
            'Accept': 'src/json',
            'Content-Type': 'src/json'
        };
        menth_type[method].body = obj.body?JSON.stringify(obj.body):{};
    }
    return dispatch => {
        return fetch(obj.url)
            .then(response => response.json())
            .then(json => dispatch(result_login(json)))
    }
}
function result_login(json) {
    return {
        type: types.SYSTEM_LOGIN,
        data: json.data
    }
}


//ajax 调用数据
export function getList(obj) {
    let method = obj.method?obj.method :"GET";
    menth_type[method].method =method;
    if(method == "POST"){
        menth_type[method].headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        menth_type[method].body = obj.body?JSON.stringify(obj.body):{};
    }
    return dispatch => {
        return fetch(obj.url)
            .then(response => response.json())
            .then(json => dispatch(result_list(json)))
            .catch((error) => {console.error(error);});
    }
}
function result_list(json) {
    return {
        type: types.SYSTEM_LIST,
        data: json.result.data
    }
}
