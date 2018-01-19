import * as types from '../constants/ActionTypes'

const initialState = [
    {
        dic: {}
    }
];


export default function getSystemDic(state = initialState, action) {
    switch (action.type) {
        case types.GET_SYSTEM_DIC:
            return Object.assign({}, state, {
                dic: action.data
            });
        case types.GET_SYSTEM_REGION://地市字典表查询
            return Object.assign({}, state, {
                region_dic: action.data
            });
        case types.GET_USER_INFO://用户信息查询、包括用户基本信息，用户的权限菜单，登录时系统时间
            return Object.assign({}, state, {
                user_name: action.data,
                sys_time:action.systime
            });
        case types.GET_SYSTEM_BYTAGNAME://根据标签名称模糊匹配
            return Object.assign({}, state, {
                tagNameList: action.data,
            });
        case types.GET_SYSTEM_BYTAGDOMAINID://根据标签名称匹配值域
            return Object.assign({}, state, {
                tagDomainIdList: action.data,
            });
        default:
            return state
    }
}
