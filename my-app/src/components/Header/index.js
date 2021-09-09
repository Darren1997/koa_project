import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Menu } from 'antd';
// import {  } from '@ant-design/icons';
import logo from './logo.png';
import './style.css';

class AppHeader extends Component{
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount(){
        axios.get("http://www.dell-lee.com/react/api/header.json")
            .then((res)=>{
                // console.log(res.data.data);
                this.setState({
                    list: res.data.data
                })
            })
    }

    getMenuItem(){
        return (
            this.state.list.map(item => {
                return(
                    <Menu.Item key={item.id}>
                        <Link to={`/${item.id}`}>
                            {item.title}
                        </Link>
                    </Menu.Item>
                )
            })
        )
    }

    render(){
        return (
            <Fragment>
                <Link to='/'>
                    <img src={logo} className='app-header-logo' alt="logo"/>
                </Link>
                <Menu mode="horizontal" className='app-header-menu'>
                    {this.getMenuItem()}
                </Menu>
            </Fragment>
        )
    }
}

export default AppHeader;