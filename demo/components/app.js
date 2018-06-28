import React from  'react';
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