import * as types from '../constants/ActionTypes'

const initialState = [
    {
        login: {},
        list:[]
    }
];
export default function logReducers(state = initialState, action) {
    switch (action.type) {
        case types.SYSTEM_LOGIN:
            return Object.assign({}, state, {
            login: action.data
        });
        case types.SYSTEM_LIST://列表查询
            return Object.assign({}, state, {
            list: action.data
        });
        default:
            return state
    }
}
