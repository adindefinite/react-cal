import React, { Component } from 'react';

class Loading extends Component {
    render(){
        let load=[1,2,3,4,5,6,7,8,9,10,11,12];
        return (
            <div className="loading" style={{display:this.props.Setdisplay?'block':'none'}}>
                {
                    load.map((key)=>{
                        return <span key={key}></span>
                    })
                }
            </div>
        )
    }
}

export default Loading;