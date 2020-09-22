import SockJS from 'sockjs-client'
import React, {useEffect, useState} from "react";
import Message from "./message/Message.js";
import './DiscordBox.css';

function DiscordBox(props){
    let [messages,setMessages] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);
    let url = `${process.env.REACT_APP_SOCKJS}`;
    console.log(url)
    const sock = new SockJS(url);
useEffect(()=>{
    sock.onopen = async function() {
        console.log('open');
        console.log("OPENED CONNECTION")
        sock.send('test');
    };

    sock.onmessage = async function(e) {
        if(e.data === "test"){

        }else {
            let data = e.data
            console.log('message', e.data);
            console.log('received message')
            messages.push(JSON.parse(data))
            if (messages.length > 4) {
                console.log('messages greater than 4')
                messages.shift()
            }
            setMessages(messages)
            console.log(messages)
            setIsLoaded(false)
            setIsLoaded(true)
        }
    };
    sock.onclose = async function() {
        console.log('close');
    };
}, []);
if(isLoaded){
    return (
        <div className="bg">
            {messages.map((m)=>(
                <Message message={m.message} from={m.from}/>
                )
            )}
        </div>
    )}else{
    return (
        <div>
            {messages.map((m)=>(
                    <Message message={m.message} from={m.from}/>
                )
            )}
        </div>
    )
}
}

export default DiscordBox