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
    //对用户选择的日期进行判断
    check(date){
        //console.log(date.target.value);
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
        let appselect = document.getElementById("selected1");　　//获取select对象
        let app = appselect.options[appselect.selectedIndex].value;　　　　　　//获取被选中的值
        if(app==="交易"){
            app="trade";
        }
        let start=document.getElementById("user_date1").value;//开始日期
        let end=document.getElementById("user_date2").value;//结束日期
        let pageselect = document.getElementById("selected2");　　//获取select对象，每页数量
        let psize = pageselect.options[pageselect.selectedIndex].value;//获取被选中的值
        this.setState({
            app:app,
            start:start,
            end:end,
            pageno:'1',
            pagesize:psize,
        },()=>{
            this.props.getChangePage(this.state);//同步更新后显示页面数应该为第一页
        });
        
    }
    render() {
        let options=[1,2,3,4,5,6,7,8];
        let btnVal=['查询','同步'];
        return (
            <div className="check flex">
                <div className="check-selected">
                    <select id="selected1">
                        <option value="交易">交易</option>
                        <option value="其他">其他</option>
                    </select>
                </div>
                <div className="check-selected">
                    <select id="selected2" defaultValue="7">
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
                        <input type="date" id="user_date1" defaultValue="2019-09-19" onChange={this.check.bind(this)} /> -&nbsp;
                        <input type="date" id="user_date2"  defaultValue="2019-09-25" onChange={this.check.bind(this)}/>&nbsp;
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