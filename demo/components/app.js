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