import React, { Component } from 'react';
import Tablerow from './table-row/Tablerow';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state={
            date:this.props.FormDate,
            pageno:'1'
        };
    }
    //加载、查询表格内容
    ShowDate(){
        let psize=this.state.date.pagesize;
        let submitDate={
            app:this.state.date.app,
            start:this.state.date.start,
            end:this.state.date.end,
            pageno:this.state.pageno,
            pagesize:psize
        }
        let jsons=[{"id":"6812","day":"2019-09-25","app":"trade","payorder":"401","freeorder":"2666","singleprice":"93.62","totalprice":"37543.52","refunsprice":"0","neworder":"56","againorder":"184","updateorder":"153","autoagainorder":"8","getbackorder":"0","refunsorder":"0","monthcycle":"0","aquartercycle":"149","sixmonthscycle":"63","ayearcycle":"189","vipafterdatenum":"5205","vipagainpaynum":"3.54","neworderpay":"5184","againorderpay":"19615","updateorderpay":"12328.52","monthcyclepay":"0","aquartercyclepay":"7012","sixmonthscyclepay":"5233","ayearcyclepay":"25298.52"},{"id":"6808","day":"2019-09-24","app":"trade","payorder":"1632","freeorder":"12934","singleprice":"89.05","totalprice":"145329.75","refunsprice":"0","neworder":"302","againorder":"551","updateorder":"775","autoagainorder":"4","getbackorder":"0","refunsorder":"0","monthcycle":"0","aquartercycle":"690","sixmonthscycle":"364","ayearcycle":"578","vipafterdatenum":"6973","vipagainpaynum":"7.9","neworderpay":"26953","againorderpay":"54967","updateorderpay":"63201.75","monthcyclepay":"0","aquartercyclepay":"34737","sixmonthscyclepay":"30715.63","ayearcyclepay":"79877.12"},{"id":"6804","day":"2019-09-23","app":"trade","payorder":"1632","freeorder":"14342","singleprice":"88.45","totalprice":"144356.25","refunsprice":"0","neworder":"336","againorder":"502","updateorder":"777","autoagainorder":"17","getbackorder":"0","refunsorder":"0","monthcycle":"0","aquartercycle":"695","sixmonthscycle":"375","ayearcycle":"562","vipafterdatenum":"7107","vipagainpaynum":"7.06","neworderpay":"29027","againorderpay":"50549","updateorderpay":"63896.25","monthcyclepay":"0","aquartercyclepay":"35801.62","sixmonthscyclepay":"31817","ayearcyclepay":"76737.63"},{"id":"6800","day":"2019-09-22","app":"trade","payorder":"1456","freeorder":"13890","singleprice":"86.88","totalprice":"126493.83","refunsprice":"0","neworder":"294","againorder":"422","updateorder":"731","autoagainorder":"9","getbackorder":"0","refunsorder":"0","monthcycle":"0","aquartercycle":"652","sixmonthscycle":"334","ayearcycle":"470","vipafterdatenum":"6384","vipagainpaynum":"6.61","neworderpay":"25569","againorderpay":"41386","updateorderpay":"59070.83","monthcyclepay":"0","aquartercyclepay":"33726","sixmonthscyclepay":"28229.84","ayearcyclepay":"64537.99"},{"id":"6796","day":"2019-09-21","app":"trade","payorder":"1451","freeorder":"14819","singleprice":"87.7","totalprice":"127252.87","refunsprice":"0","neworder":"285","againorder":"411","updateorder":"743","autoagainorder":"12","getbackorder":"0","refunsorder":"0","monthcycle":"0","aquartercycle":"638","sixmonthscycle":"337","ayearcycle":"476","vipafterdatenum":"10702","vipagainpaynum":"3.84","neworderpay":"24815","againorderpay":"40447","updateorderpay":"61174.87","monthcyclepay":"0","aquartercyclepay":"33041.55","sixmonthscyclepay":"28733","ayearcyclepay":"65478.32"},{"id":"6792","day":"2019-09-20","app":"trade","payorder":"1699","freeorder":"16091","singleprice":"89.04","totalprice":"151280.74","refunsprice":"0","neworder":"336","againorder":"473","updateorder":"875","autoagainorder":"15","getbackorder":"0","refunsorder":"0","monthcycle":"0","aquartercycle":"724","sixmonthscycle":"393","ayearcycle":"582","vipafterdatenum":"16130","vipagainpaynum":"2.93","neworderpay":"32101","againorderpay":"46902","updateorderpay":"71401.74","monthcyclepay":"0","aquartercyclepay":"36573.89","sixmonthscyclepay":"34090.95","ayearcyclepay":"80615.9"},{"id":"6788","day":"2019-09-19","app":"trade","payorder":"1743","freeorder":"15928","singleprice":"88.29","totalprice":"153896.49","refunsprice":"0","neworder":"321","againorder":"491","updateorder":"919","autoagainorder":"12","getbackorder":"0","refunsorder":"0","monthcycle":"0","aquartercycle":"777","sixmonthscycle":"366","ayearcycle":"600","vipafterdatenum":"8347","vipagainpaynum":"5.88","neworderpay":"29313","againorderpay":"49399","updateorderpay":"74368.49","monthcyclepay":"0","aquartercyclepay":"39525.22","sixmonthscyclepay":"31591","ayearcyclepay":"82780.27"}]
        //let num=json.num;//表格总行数
        let num=6;
        let totalpage=1;
        if(num/psize > parseInt(num/psize)){//共分为几页
            //this.state.totalpage=parseInt(num/psize)+1;
            totalpage=parseInt(num/psize)+1;
          }else{
            //this.state.totalpage=parseInt(num/psize);
            totalpage=parseInt(num/psize);
        }
        let all={jsons,totalpage};
        //将数据显示到表格上
        //let table=document.getElementById("bodymain");//绑定表格主体数据显示部分
        //let j=json.content;
        return all;
    }
    //异步获取父组件设置的state，在父组件数据更新后，子组件的state也更新
    //nextprops是更新后的数据,prevprops是初始的数据
    static getDerivedStateFromProps(nextProps,prevProps) {
        if(nextProps.FormDate!==prevProps.date){
            return{
                date:nextProps.FormDate,
                pageno:'1'
            }
        }
        //否则，对于state不进行任何操作
        return null;
    }

    //点击上一页
    pageback(e){
        e.preventDefault();
        if(this.state.pageno==='1'){
            return;
        }
        //上一页
        let pageinit=this.state.pageno;
        this.setState({
            pageno:--pageinit+""
        })
        //this.ShowDate();//对表格数据进行更新
    }
    //点击下一页
    pagenext(e){
        e.preventDefault();
        if(this.state.pageno==='444'){
            return;
        }
        //下一页
        let pageinit=this.state.pageno;
        this.setState({
            pageno:++pageinit+""
        },()=>{
            console.log(this.state.pageno);
        })
        //this.ShowDate();//对表格数据进行更新
    }

    render() {
        let lis=[1,2,3,4,5,6,7,8,9,10,11,12,13];
        let title=['日期','付费人数','免费人数','客单价','总收入','到期（人）','新订（单）','续订（单）','升级（单）','后台（单）','续订率','一个月（单）','一季度（单）','半年（单）','一年（单）','来源'];
        let json=this.ShowDate().jsons;//获取表格最新数据
        return (
            <div className="table">
                <div className="table-header-group">
                    <ul className="table-row">
                        {
                            title.map((item,key)=>{
                                return(
                                    <li className="table-cell" key={key}>{item}</li>
                                )
                            })
                        }
                    </ul> 
                </div>
                <div id="bodymain" className="table-row-group">
                    {
                        json.map((item,key)=>{
                            return(
                                <Tablerow key={key} date={item}/>
                            )
                        })
                    }
                </div>
                <div className="table-footer-group">
                    <ul className="table-row">
                        {
                            lis.map((key)=>{
                                return(
                                    <li className="table-cell" key={key}></li>
                                )
                            })
                        }
                        <li className="table-cell">
                            <div className="flex pages">
                                <div className="blue"><a href="/" style={{textDecoration:'none',color:'#5DABEB'}} onClick={this.pageback.bind(this)}>上一页&nbsp;</a></div>
                                <div ref="pageshow">{this.state.pageno+'/'+this.ShowDate().totalpage}</div>
                                <div className="blue"><a href="/" style={{textDecoration:'none',color:'#5DABEB'}} onClick={this.pagenext.bind(this)}>&nbsp;下一页</a></div>
                            </div>
                        </li>
                        <li className="table-cell"></li>
                        <li className="table-cell"></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Table;