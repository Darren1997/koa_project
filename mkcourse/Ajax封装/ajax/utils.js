// 工具函数


const serialize = param => {
    const result = [];
    for(const [key,value] of Object.entries(param)){
        result.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
        return result.join('&');
    }
}

const addURLData = (url, data) => {
    if(!data) return '';
    const mark = url.includes('?')? '&':'?';
    return `${mark}${data}`
}

export {serialize,addURLData};