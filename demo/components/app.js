import React from  'react';

import '../style/style.css'
class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1 className="tit">hello</h1>
                <p>哈哈哈</p>
                <img src={require("../img/bg1.jpg")}/>
            </div>
        )

        
    }
}
export default App;