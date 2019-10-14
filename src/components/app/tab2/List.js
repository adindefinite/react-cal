import React, { Component } from 'react';
import Form from './form/Form';
import Table from './table/Table';

class List extends Component {
    constructor(props) {
        super(props);
        this.state={
            app:"trade",
            start:"2019-09-19",
            end:"2019-09-25",
            pageno:'1',
            pagesize:'7'
        }
    }
    updateDate(value){
        //value是从form表单中获取到的查询条件的信息
        this.setState(value);//设置整个state的值
    }
    render() {
        return (
            <div>
                <Form ref='leo' getChangePage={this.updateDate.bind(this)}/>
                <Table FormDate={this.state}/>
            </div>
        );
    }
}

export default List;