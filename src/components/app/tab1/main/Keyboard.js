import React, { Component } from 'react';
import Singlekey from './button/Singlekey';

class Keyboard extends Component {
    //传递参数给父组件
    getkey(value){
        //console.log(value);
        //此处将用户点击的键盘按钮的数值传给父组件
        this.props.getCuls(value);
    }
    render(){//用于输出组件
        let keys=['AC','+/-','%','/','7','8','9','*','4','5','6','-','1','2','3','+','0','.','='];
        return (
            <div className="main flex">
                {
                    keys.map((item,key)=>{
                        return (
                            <Singlekey getCul={this.getkey.bind(this)} key={key} value={item}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default Keyboard;