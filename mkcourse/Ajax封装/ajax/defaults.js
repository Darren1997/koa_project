import {HTTP_GET,CONTENT_TYPE_FORM_URLENCODED,CONTENT_TYPE_JSON} from './contants.js';

// 默认参数
const DEFAULTS = {
    method:HTTP_GET,
    params:null,
    data:null,
    contentType:CONTENT_TYPE_FORM_URLENCODED,
    responseType:'',
    timeoutTime:0,
    withCredentials:false,

    success(){},
    httpCodeError(){},
    error(){},
    abort(){},
    timeout(){}
}

export default DEFAULTS;