import React, { Component } from 'react';

class Ryg extends Component {
    render(){
        let ryg=[1,2,3];
        return(
            <div className="box_left flex">
                {
                    ryg.map((item,key)=>{
                        return <div key={key} className="circle"></div>
                    })
                }
            </div>
        )
    }
}

export default Ryg;