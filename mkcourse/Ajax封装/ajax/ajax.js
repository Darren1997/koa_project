import DEFAULTS from './defaults.js';
import {serialize, addURLData} from './utils.js';
import {HTTP_GET,CONTENT_TYPE_FORM_URLENCODED,CONTENT_TYPE_JSON} from './contants.js';

// Ajax类
class Ajax{
    constructor(url, options){
        this.url = url;
        this.options = Object.assign({},DEFAULTS,options);

        // 初始化
        this.init();
    }

    init(){
        const xhr = new XMLHttpRequest();
        this.xhr = xhr;
        this.bindEvents();
        xhr.open(this.options.method,this.url+this.addParam(),true);
        this.setResponseType();
        this.setCookie();
        this.setTimeout();
        // 发送请求
        this.sendData();
    }
    // 绑定事件
    bindEvents(){
        const xhr = this.xhr;
        const {success,httpCodeError,error,abort,timeout} = this.options;
        // load
        xhr.addEventListener(
            'load',
            ()=>{
                if(this.ok()){
                    success(xhr.response,xhr);
                }
                else{
                    httpCodeError(xhr.status,xhr);
                }
            },
            false
        );
        // error
        xhr.addEventListener(
            'error',
            ()=>{
                error(xhr);
            },
            false
        );
        // abort
        xhr.addEventListener(
            'abort',
            ()=>{
                abort(xhr);
            },
            false
        );
        // timeout
        xhr.addEventListener(
            'timeout',
            ()=>{
                timeout(xhr);
            },
            false
        );
    }

    ok(){
        const xhr = this.xhr;
        return (xhr.status>=200 && xhr.status<300) || xhr.status === 304;
    }

    // 在url添加参数
    addParam(){
        const {params} = this.options;

        if(!params) return '';

        return addURLData(this.url, serialize(params));
    }

    setResponseType(){
        this.xhr.responseType = this.options.responseType;
    }
    setCookie(){
        if(this.options.withCredentials){
            this.xhr.withCredentials = true;
        }
    }
    setTimeout(){
        if(this.options.timeoutTime > 0){
            this.xhr.timeout = this.options.timeoutTime;
        }
    }

    sendData(){
        const xhr = this.xhr;
        if(!this.isSendData()){
            return xhr.send(null);
        }
    }
    isSendData(){
        const {data, method} = this.options;
        if(!data)   return false;
        if(method.toLowerCase() === HTTP_GET.toLowerCase())    return false;
        return true;
    }
}

export default Ajax;