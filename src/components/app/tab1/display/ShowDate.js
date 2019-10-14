import React, { Component } from 'react';

class ShowDate extends Component {
    render(){
        return(
            <div className="top flex"><p id="display">{this.props.setCalResults}</p></div>
        )
    }
}

export default ShowDate;