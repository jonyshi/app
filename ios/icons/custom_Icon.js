import { createIconSet } from 'react-native-vector-icons';
const glyphMap = {
    "components-phone": 58882, //骷髅头
    "components-jineng": 58886, //技能
    "components-word": 58883,
    "components-mac": 58885,
    "components-mail": 58884,
    "components-geren": 58880,
    "components-kuloutou":58881,
    "components-circular":58887,//双层点的圆形
};
let custom_Icon = createIconSet(glyphMap, 'iconfont','iconfont.ttf');
module.exports = custom_Icon;
// module.exports.glyphMap = glyphMap;
// e602	58882
// e606	58886
// e603	58883
// e605	58885
// e604	58884
// e600	58880
// e601	58881