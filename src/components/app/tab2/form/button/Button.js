import React, { Component } from 'react';

class Button extends Component {
    handleOnClick(value){
        this.props.getBtnVal(value);//向父组件传递点击事件选中的值
    }
    render(){
        return(
            <button className="button" onClick={this.handleOnClick.bind(this,this.props.value)}>{this.props.value}</button>
        )
    }
}

export default Button;