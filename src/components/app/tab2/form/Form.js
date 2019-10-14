import React, { Component } from 'react';
import Button from './button/Button';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
                app:"trade",
                start:"2019-09-19",
                end:"2019-09-25",
                pageno:'1',
                pagesize:'7',
                localtime:'2019-09-25 10:39:34'
        }
    }
    //app选择
    selected1(e){
        this.setState({
            app:e.target.value
        })
    }

    //psize选择
    selected2(e){
        this.setState({
            pagesize:e.target.value
        })
    }

    //开始日期
    start(e){
        this.setState({
            start:e.target.value
        })
    }

    //结束日期
    end(e){
        this.setState({
            end:e.target.value
        })
    }

    //对选中的按钮点击事件判断
    getBtnCh(btn){
        let getLocalTime=()=>{
            let date = new Date();
            let seperator1 = "-";
            let seperator2 = ":";
            //外国的月份都是从0开始的，所以+1
            let month = date.getMonth() + 1;
            let strDate = date.getDate();
            //1-9月用0补位
            if(month >=1 && month <=9){
                month = "0" + month;
            }
            //1-9日用0补位
            if(strDate >=0 && strDate <= 9){
                strDate = "0" + strDate;
            }
            //年月日
            let date1=date.getFullYear() + seperator1;
            let date2=month + seperator1 + strDate + " ";
            let date3=date.getHours() + seperator2;
            let date4=date.getMinutes() + seperator2;
            //获取当前时间 yyyy-MM-dd HH:mm:ss
            let currentdate = date1+date2+date3+date4+date.getSeconds();
            return currentdate;
        }
        if(btn==='同步'){
            //同步时间设置
            this.setState({
                localtime:getLocalTime()
            })
        }
        this.setState({
            pageno:'1'
        },()=>{
            let arr={
                app:this.state.app,
                start:this.state.start,
                end:this.state.end,
                pageno:this.state.pageno,
                pagesize:this.state.pagesize
            };
            this.props.getChangePage(arr);//同步更新后显示页面数应该为第一页
        });
        
    }
    render() {
        let options=[1,2,3,4,5,6,7,8];
        let btnVal=['查询','同步'];
        return (
            <div className="check flex">
                <div className="check-selected">
                    <select onChange={this.selected1.bind(this)} defaultValue="trade">
                        <option value="trade">交易</option>
                        <option value="other">其他</option>
                    </select>
                </div>
                <div className="check-selected">
                    <select onChange={this.selected2.bind(this)} defaultValue="7">
                        {
                            options.map((item,key)=>{
                                return(
                                    <option key={key} value={item}>{item}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="showdates" style={{fontSize:14}}>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日期选择</span>&nbsp;
                        <input type="date" id="user_date1" defaultValue="2019-09-19" onChange={this.start.bind(this)} /> -&nbsp;
                        <input type="date" id="user_date2"  defaultValue="2019-09-25" onChange={this.end.bind(this)}/>&nbsp;
                    </div>
                <div>
                    {
                        btnVal.map((item,key)=>{
                            return(
                                <Button getBtnVal={this.getBtnCh.bind(this)} key={key} value={item}/>
                            )
                        })
                    }
                </div>
                <div style={{fontSize: 14}}>交易上次手动同步时间：<span>{this.state.localtime}</span></div>
            </div>
        );
    }
}

export default Form;