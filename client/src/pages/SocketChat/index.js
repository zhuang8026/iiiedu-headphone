import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

import './socket.scss';

function SocketChat() {
    const [ws, setWs] = useState(null)
    const [msg, setMsg] = useState([])

    // console.log(msg)
    
    useEffect(() => {
        console.log('ws:', ws)
        if(!ws){
            let myws = io('http://localhost:5555')
            // window.myws = myws
            setWs(myws)
            console.log('ws2:', myws)
            // initWebSocket()
        }else{
            initWebSocket()
        }
        console.log('ws3:', ws)
    }, [ws])

    const initWebSocket = () => {
        //對 getMessage 設定監聽，如果 server 有透過 getMessage 傳送訊息，將會在此被捕捉
        ws.on('getMessage', message => {
            console.log(message)
        })
        ws.on("ServerMsg", function (msg) {
            console.log(msg);
            setMsg(msg)
            // for(let i; i<msg[0].length; i++){
            //   console.log(msg[0][i])
            // }
        });
    }

    // const sendMessage = () => {
    //     //以 emit 送訊息，並以 getMessage 為名稱送給 server 捕捉
    //     // ws.emit('getMessage', '只回傳給發送訊息的 client')
        // let inputValue = document.getElementById("msg").value;
        // ws.emit('getMessage', inputValue)
    // }

    const sendMessage = (event) => {
        if (event.keyCode == 13) {
            // console.log(event);
            ws.emit('getMessage', event.target.value);
            let msgApp = document.getElementById("app");
            msgApp.append(event.target.value);
        }

    }


    return (
        <div className="socketchat">
            <div className="heightInner"></div>
            <div className="socketChatInner">
                <input type="text" id="msg" onKeyUp={(event) => { sendMessage(event) }}/>
                {/* <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                        sendMessage()
                    }}
                > 送出訊息 </button> */}
                {/* <input type='button' className="btn btn-primary" value='送出訊息' onClick={()=>{sendMessage('getMessageAll')}} /> */}
                {/* <input type='button' className="btn btn-primary" value='送出訊息，讓所有人收到回傳' onClick={() => { sendMessage('getMessageAll') }} /> */}
                <div id="app">{msg}</div>
                {/* {msg.map((data, index)=>{
                    <div id="app">{data}</div>
                })} */}
            </div>
        </div>
    )
}

export default SocketChat;