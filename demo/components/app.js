import React from  'react';

import a from '../img/dicos.jpg';
import '../style/style.css';


import a from '../img/bg1.jpg'
import b from '../img/1.png'
import '../style/style.css'

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>

                <div className="tuijian">
                    <h3>—— 推荐商家 ——</h3>
                    <section className="shoplist">
                        <div className="wrap">
                            <div className="one">
                                <div>
                                    <img src={a}/>
                                </div>
                                <div>
                                    <h4>德克士（京广路店）</h4> 
                                    <span>4.7月售603单</span>
                                    <p>￥20起送 | 配送费￥2<span>865m | 37分钟</span></p>
                                    <i>口碑人好店</i>
                                </div>
                            </div>
                            <div className="two">
                                <div>
                                    <p>新用户下单立减17元<span>7个活动</span></p>
                                    <p>满35减6，满45减9，满55减12</p>
                                </div>
                            </div>
                        </div>
                        <div className="wrap">
                            <div className="one">
                                <div><img src={a}/></div>
                                <div>
                                    <h4>德克士（京广路店）</h4> 
                                    <span>4.7月售603单</span>
                                    <p>￥20起送 | 配送费￥2<span>865m | 37分钟</span></p>
                                    <i>口碑人好店</i>
                                </div>
                            </div>
                            <div className="two">
                                <div>
                                    <p>新用户下单立减17元<span>7个活动</span></p>
                                    <p>满35减6，满45减9，满55减12</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <footer>
                        <a href="">首页</a>
                        <a href="">发现</a>
                        <a href="">订单</a>
                        <a href="">我的</a>
                </footer>
 
                <div className="b-touw">
                <div className="b-tou">
                    <p className="shang">看不见</p>
                    <p className="pz">——. 品质优选 .—— </p>
                    <p className="gengduo">更多<span>></span> </p>
                </div>
                </div>
                <div className="picw">
                <div className="pic">
                    <div>
                        <img src={require("../img/1.jpg")}/>
                        <p className ="shang">三米粥铺</p>
                        <p className="xia">大牌精选</p>
                    </div>
                    <div>
                        <img src={require("../img/2.jpg")}/>
                        <p className ="shang">米多面多</p>
                        <p className="xia">大牌精选</p>
                    </div>
                    <div>
                        <img src={require("../img/3.jpg")}/>
                        <p className ="shang">把愚便当</p>
                        <p className="xia">大牌精选</p>
                    </div>
                    <div>
                        <img src={require("../img/4.jpg")}/>
                        <p className ="shang">阿利茄汁面</p>
                        <p className="xia">大牌精选</p>
                    </div>
                </div>
                </div>
         <header>
                    <p>海为科技园</p>
                    <input type="text" placeholder="输入商家、商品名称"/>
                    <ul>
                        <li>大盘鸡</li>
                        <li>小龙虾</li>
                        <li>黄焖鸡米饭</li>
                        <li>烧烤</li>
                        <li>粽子</li>
                        <li>麻辣想过</li>
                        <li>烤鱼</li>
                        <li>酸菜鱼</li>
                    </ul>
                </header>
                <banner>
                    <img src={a}/>
                    <img  className="img" src={b}/>
                </banner>

            </div>
        )

        
    }
}
export default App;