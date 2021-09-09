import React, {Component} from 'react';
import axios from 'axios';
import { Button, Modal, Input, message } from 'antd';
import './style.css'

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            login: false,
            modal: false,
            userName: '',
            passWord: ''
        }
    }

    componentDidMount(){
        axios.get('http://www.dell-lee.com/react/api/isLogin.json',{withCredentials: true})
            .then((res)=>{
                this.setState({
                    login: res.data.data.login,
                    modal: false
                })
            })
    }

    showModal(){
        this.setState({
            modal: true
        })
    }

    hiddenModal(){
        this.setState({
            modal: false
        })
    }

    changeUser(e){
        // console.log(e.target.value)
        this.setState({
            userName: e.target.value
        })
    }

    changePassword(e){
        this.setState({
            passWord: e.target.value
        })
    }

    checkLogin(){
        const {userName, passWord} = this.state;
        // console.log(userName,passWord);
        const url = `http://www.dell-lee.com/react/api/login.json?user=${userName}&password=${passWord}`;
        axios.get(url,{withCredentials: true}).then((res)=>{
            const login = res.data.data.login;
            if(login){
                message.success("登录成功！");
                this.setState({
                    login: true,
                    modal: false
                })
            }
            else{
                message.error("登陆失败！");
            }
        })
    }

    logout(){
        const url = `http://www.dell-lee.com/react/api/logout.json`
        axios.get(url,{withCredentials:true}).then((res)=>{
            const logout = res.data.data.logout;
            if(logout){
                message.success("用户已退出！");
                this.setState({
                    login: false
                })
            }
            else{
                message.error("未知错误！");
            }
        })
    }

    render(){
        return (
            <div className="login-btn">
                {
                    this.state.login ?
                    <Button onClick={this.logout.bind(this)}>退出</Button>:
                    <Button type="primary" onClick={this.showModal.bind(this)}>登录</Button>
                }
                <Modal title="登录" visible={this.state.modal} onOk={this.checkLogin.bind(this)} onCancel={this.hiddenModal.bind(this)}>
                    <Input style={{marginBottom: 10}} placeholder="请输入用户名" 
                        value={this.state.userName} onChange={this.changeUser.bind(this)}/>
                    <Input placeholder="请输入密码" type="password" 
                        value={this.state.passWord} onChange={this.changePassword.bind(this)}/>
                </Modal>
            </div>
        )
    }
}

export default Login;