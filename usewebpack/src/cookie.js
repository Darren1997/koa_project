const set = (name, value, {max_age, domain, path, secure} = {})=>{
    let cookieText = `${encodeURIComponent(name)} = ${encodeURIComponent(value)}`;
    if(typeof max_age === 'number') cookieText += `; max-age = ${max_age}`;
    if(domain)  cookieText += `; domain = ${domain}`;
    if(path)    cookieText += `; path = ${path}`;
    if(secure)  cookieText += '; secure'
    document.cookie = cookieText;
}

const get = (cookieName)=>{
    let name1 = `${encodeURIComponent(cookieName)}`;
    let cookieList = document.cookie.split('; ');
    for(const item of cookieList){
        const [name2, value] = item.split('=')
        if(name2 == name1)   return value;
    }
    return 'unknow'
}

const remove = (cookieNane, {domain, path}={})=>{
    set(cookieNane, '', {domain,path,max_age:-1});
}
export {set, get, remove};