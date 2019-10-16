import React, { Component } from 'react'
import Ryg from './top/Ryg';
import ShowDate from './display/ShowDate';
import Loading from './loading/Loading';
import Keyboard from './main/Keyboard';


class Calculator extends Component{
    constructor() {
        super();
        this.state={
            //设置组件的数据
            results:"0",//计算过程——输出框中的内容
            type:false,//用于判断是否已进行计算，若已进行计算再点击数字，会清空输出框中的计算结果，重新进行计算
            negative:false,//用于判断是否已进行正负数运算
            display:false
        }
    }
    //修改父组件的输出框中的值属性为此处处理后的值
    showkey(res){//res为键盘点击的按钮数值
        let s_type=this.state.type;//本次操作之前的状态
        let s_negative=this.state.negative;//本次操作之前的状态
        let s_results=this.state.results;//输出框中原先的内容，在本次操作之前的数值，处理后为最终计算结果并赋值给输出框
        //res为键盘按钮点击后的值

        //判断输出框中是数字还是字符串，如果是数字，则可能未开始计算或已经计算过，如果是字符串，则说明有运算符，正在计算过程中
        let IsNaN=(value)=>{
            let regPos = /^\d+(\.\d+)?$/; //非负浮点数
            let regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
            if(regPos.test(value) || regNeg.test(value)){
                return true;//纯数字
            }else{
                return false;//包含运算符
            }
        }
        //判断当前计算过程的最后一位是数字还是运算符,true是运算符，false不是运算符
        let endStrType=(result)=>{
            if(IsNaN(result)){
                return false;
            }
            let endstr=result.substr(result.length-1,1);
            if(!IsNaN(endstr)){//若最后一位为运算符
                return true;
            }else{
                return false;
            }
        }
        // let evals=(fn)=>{
        //     let Fn=eval;
        //     return Fn(fn);
        // }

        //初始化
        if(res === 'AC'){
            s_results = "0";
            s_type=false;
            s_negative=false;
        }//正负
        else if(res === "+/-"){
            if(s_results==="0"){//初始化状态0不可以修改正负数的数字
                return;
            }
            //如果计算过程输出框中是一个数字类型的，比如浮点数,或者输出框中的内容是纯数字
            else if(IsNaN(s_results) && !endStrType(s_results)){
                if(s_results>=0){//正数
                    s_results=-s_results;
                }else{
                    s_results=Math.abs(s_results);//取绝对值，负数变正数
                }
            }
            else if(!endStrType(s_results)){//最后一位字符为数字
                let endstr=s_results.match(/(\d+)[^0-9]*$/)[1];//截取字符串最后一组数
                let end2str=s_results.substr(s_results.length-endstr.length-2,1);//截取字符串倒数第二位数
                if(!IsNaN(end2str) && s_negative){//数字倒数第一位肯定不是数字，因为endstr截取的就是最后一组数
                    s_results=s_results.substring(0,s_results.length-endstr.length-1);//删除字符串最后一位数
                    //endstr=Math.abs(endstr);//取绝对值，负数变正数
                    s_results += endstr;//追加在原有元素后
                    s_negative=false;
                }else{
                    let end3str=s_results.substr(s_results.length-endstr.length-1,1);//截取字符串倒数第1位数
                    if(end3str==='-'){
                        return;
                    }
                    else{
                        s_results=s_results.substr(0,s_results.length-endstr.length);//删除字符串最后一位数
                        endstr=-endstr;//设置负数
                        s_results += endstr;//追加在原有元素后
                        s_negative=true;
                    }
                }
            }
        }
        //等号计算
        else if(res === "="){
            this.setState({
                display: true
            },()=>{
                //console.log(this.state.displays);
            })
            setTimeout(()=>{//显示loading，持续1.5s后消失
                this.setState({
                    display: false
                })
                if(endStrType(s_results)){//若计算过程中最后一位字符为运算符，则不能进行计算
                    return;
                }
                //s_results = this.eval(s_results);//进行计算
                s_results=(0, eval)(s_results);//进行计算
                s_type=true;
                //将最终结果赋值给计算结果输出框
                this.setState({
                    results:s_results,
                    type:s_type,
                    negative:s_negative
                });
            },1500);
        }
        //对键盘数值判断
        else if(IsNaN(s_results)){//如果输出框中是纯数字，则可能已经进行计算也可能是输入的要计算的数
            if(s_type){//若已经进行过一轮计算
                if(IsNaN(res)){//若已经计算并再次点击数字部分,清空原先计算结果重新计数
                    //清空原先计算结果重新计数,此处要赋值给输出框的同样是res
                    s_results=res;
                    s_type=false;
                }else{//若计算后点击运算符部分
                    if((s_results+"").indexOf('.')!==-1 && res==='.'){//若计算后点击小数点，如果计算结果中有小数点,则不能追加
                        return;
                    }else{
                        s_results += res;//追加在原有元素后
                    }
                }
                s_negative=false;
            }else{//还没有开始计算
                if(IsNaN(res) || res==='.' || !(s_results=== '0')){
                    if(s_results==='0' && IsNaN(res)){//如果输出框中显示的是0
                        s_results=res;
                    }else{
                        s_results += res;//追加在原有元素后
                    }
                    s_negative=false;
                }else{
                    //若直接点击运算符部分，则提示先输入数字再点击运算符
                    alert("请先选择数字再点击运算符");
                    
                }
            }
        }else{//不是纯数字说明正在计算中
            if((endStrType(s_results) && !IsNaN(res))){
                //如果当前计算过程中最后一位是运算符，为了避免优先级问题，不能继续追加运算符元素
                return;
            }else{
                s_results += res;//追加在原有元素后
            }
        }
        //将最终结果赋值给计算结果输出框
        this.setState({
            results:s_results,
            type:s_type,
            negative:s_negative
        });
    }

    render(){
        return (
            <div className="box flex">
                <Loading Setdisplay={this.state.display}/>
                <Ryg />
                <ShowDate setCalResults={this.state.results}/>
                <Keyboard getCuls={this.showkey.bind(this)}/>
            </div>
        )
    }//getCuls是子组件向父组件传递参数，计算结果修改输出框显示区域
    //setCuls是父组件向子组件传递当前输出框中的数据，进行比较
}

export default Calculator;