import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {List} from 'antd';


class PageList extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }

    componentWillReceiveProps(){
        this.componentDidMount();
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        let url = "http://www.dell-lee.com/react/api/list.json";
        if(id){
            url += "?id="+id;
        }
        axios.get(url )
        .then((res)=>{
            this.setState({
                data: res.data.data
            })
        })
    }

    render(){
        return (
            <List
                style = {{background: '#fff'}}
                bordered
                dataSource={this.state.data}
                renderItem={item => (
                    <List.Item>
                        <Link to={`/detail/${item.id}`}>{item.title}</Link>
                    </List.Item>
                )}
                />
        )
    }
}

export default PageList;