import React, { Component } from 'react';

class Tablerow extends Component {
    handleClick(e){//阻止点击事件的静默冒泡事件
        e.preventDefault();
    }
    render() {
        return (
            <ul className="table-row">
                <li className="table-cell"><a href="/" style={{textDecoration:'none',color:'#5DABEB'}} onClick={this.handleClick.bind(this)}>{this.props.date.day}</a></li>
                <li className="table-cell">{this.props.date.payorder}</li> 
                <li className="table-cell">{this.props.date.freeorder}</li> 
                <li className="table-cell">{this.props.date.singleprice}</li> 
                <li className="table-cell">{this.props.date.totalprice}</li> 
                <li className="table-cell">{this.props.date.vipafterdatenum}</li> 
                <li className="table-cell">{this.props.date.neworder}({this.props.date.neworderpay}元)</li> 
                <li className="table-cell">{this.props.date.againorder}({this.props.date.againorderpay}元)</li> 
                <li className="table-cell">{this.props.date.updateorder}({this.props.date.updateorderpay}元)</li> 
                <li className="table-cell">{this.props.date.autoagainorder}</li> 
                <li className="table-cell">{this.props.date.vipagainpaynum}%</li> 
                <li className="table-cell">{this.props.date.monthcycle}({this.props.date.monthcyclepay}元)</li> 
                <li className="table-cell">{this.props.date.aquartercycle}({this.props.date.monthcyclepay}元)</li> 
                <li className="table-cell">{this.props.date.sixmonthscycle}({this.props.date.sixmonthscyclepay}元)</li> 
                <li className="table-cell">{this.props.date.ayearcycle}({this.props.date.ayearcyclepay}元)</li>
                <li className="table-cell"><a href="/" style={{textDecoration:'none',color:'#5DABEB'}}>分析</a></li>
            </ul>
        );
    }
}

export default Tablerow;