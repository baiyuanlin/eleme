import React from  'react';
import a from '../img/dicos.jpg';
import '../style/style.css';


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
            </div>
        )

        
    }
}
export default App;