import React from  'react';

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
            </div>
        )

        
    }
}
export default App;