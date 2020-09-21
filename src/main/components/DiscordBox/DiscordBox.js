import SockJS from 'sockjs-client'
import React, {useState} from "react";
import Message from "./message/Message";

function DiscordBox(props){
    let [messages,setMessages] = useState([])
    const sock = new SockJS(`${process.env.sockJsURL}`);
    sock.onopen = function() {
        console.log('open');
        sock.send('test');
    };

    sock.onmessage = function(e) {
        let a = [e]
        console.log('message', e.data);
        messages.push(a)
        if(messages.length >4){
            messages.shift()
        }
    };

    sock.onclose = function() {
        console.log('close');
    };

    return (
        <div>
            {messages.map((t)=><Message props={t}/> )}
        </div>
    )
}

export default DiscordBox