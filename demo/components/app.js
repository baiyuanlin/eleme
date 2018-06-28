import React from 'react';
import '../style/style.css'
class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className="qiang">
                    <div>
                        <dl>
                            <dt>限量抢购</dt>
                            <dd>丰盛晚餐9.9元起</dd>
                            <dd><span>1155人</span>正在抢></dd>
                            <img src={require("../img/eat1.jpg")} />
                        </dl>
                    </div>
                    <div>
                        <dl>
                            <dt>周四水果日</dt>
                            <dd>荔枝1分钱500g</dd>
                            <dd>大牌减20></dd>
                            <img src={require("../img/eat2.jpg")} />
                        </dl>
                    </div>
                </div>
                <div className="ming">
                    <div>
                        <h3>名店热搜榜</h3>
                        <p>满30减30起</p>
                        <img src={require("../img/eat3.jpg")} />

                    </div>
                    <div>
                        <h3>品质联盟</h3>
                        <p>品质升级 消费亲民</p>
                        <img src={require("../img/eat4.jpg")} />

                    </div>
                    <div>
                        <h3>乐享水果</h3>
                        <p>水果立减15元</p>
                        <img src={require("../img/eat5.jpg")} />

                    </div>
                </div>
                <div className="ling">
                <img src={require("../img/eat7.jpg")} />
                </div>
            </div>
        )


    }
}
export default App;