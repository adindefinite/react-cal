import React, { Component } from 'react';

class Singlekey extends Component {
    handleOnClick(value){
        this.props.getCul(value);
    }
    render(){
        return(
            <div onClick={this.handleOnClick.bind(this,this.props.value)}>
                <p>{this.props.value}</p>
            </div>
        )
    }
}

export default Singlekey;