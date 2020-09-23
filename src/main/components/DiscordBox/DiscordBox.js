import SockJS from 'sockjs-client'
import React, {useEffect, useState} from "react";
import Message from "./message/Message.js";
import './DiscordBox.css';
import {debugLog} from "../../util/debugLog";

function DiscordBox(props){
    let [messages,setMessages] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);
    let url = `${process.env.REACT_APP_SOCKJS}`;
    //DUMB BITCH AT LEAST YOU DIDNT PUSH THE ACTUAL URL
    let sock = new SockJS(url);


useEffect(()=>{
    let new_conn = function(){
        debugLog("opening new connection", false)
        sock =  new SockJS(url, null, {timeout:5000000});
        debugLog("created new conn", false)

    }
    sock.onopen = function() {
        debugLog('sock.onOpen', false);
        debugLog("Trying to send test", false);
        sock.send('test');
        debugLog("Connected", false)
    };

    sock.onmessage = function(e) {
        if(e.data === "test"){
            debugLog("sock.onMessage: test", false);
        }else if(e.data ==="stay alive"){
            debugLog("sock.onMessage: stay alive", false);
        }else{
            debugLog("sock.onMessage: Not test or stay alive", false);
            let data = e.data
            debugLog('received message', false)
            try {
                messages.push(JSON.parse(data))
                if (messages.length > 5) {
                    debugLog('messages greater than 4', false)
                    messages.shift()
                }
                setMessages(messages)
                setIsLoaded(true)
            }catch(err){
                debugLog("Issue with message", false)
                debugLog(err, true)
            }
        }
    }

    sock.onclose = function() {
        debugLog("sock.onClose", false)
    };
    const interval = setInterval(() => {
        debugLog("about to try stay alive", false)
        try {
            debugLog("trying to send stay alive", false)
            sock.send("stay alive")
            setIsLoaded(true)

        }catch(err){
            debugLog("error sending stay alive", true)
            debugLog("attempting new conn",false)
            setIsLoaded(false)
            new_conn()
        }
        }, 15000);
    return () => clearInterval(interval);
}, []);
if(isLoaded) {
    return (
        <div className="my-bg">
            {messages.map((m) => (
                    <Message key={m.ts} message={m.message} from={m.from} ts={m.ts}/>
                )
            )}
        </div>
    )
}else{
    return (<div className="my-bg">
        Cannot Connect to Discord Websocket
    </div> )
}
}

export default DiscordBox