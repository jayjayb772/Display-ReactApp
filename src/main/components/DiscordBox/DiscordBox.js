import SockJS from 'sockjs-client'
import React, {useEffect, useState} from "react";
import Message from "./message/Message.js";
import './DiscordBox.css';

function DiscordBox(props){
    let [messages,setMessages] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);
    let url = `${process.env.REACT_APP_SOCKJS}`;
    let sock = new SockJS(url);

    let new_conn = function(){
        console.log("opening new connection")
        sock =  new SockJS(url);
    }
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
            console.log('received message')
            try {
                messages.push(JSON.parse(data))
                if (messages.length > 5) {
                    console.log('messages greater than 4')
                    messages.shift()
                }
                setMessages(messages)
                console.log(messages)
                setIsLoaded(false)
                setIsLoaded(true)
            }catch(err){
                console.log('Stay alive message!!');
            }
        }
    };
    sock.onclose = function() {
        let recInterval = null;
        recInterval = setInterval(function () {
            new_conn();
        }, 2000);
    };

    const interval = setInterval(() => {
        //sock.send('alive')
        //console.log('Stay alive')
    }, 10000);
    return () => clearInterval(interval);
}, []);
if(isLoaded){
    return (
        <div className="my-bg" >
            {messages.map((m)=>(
                <Message message={m.message} from={m.from}/>
                )
            )}
        </div>
    )}else{
    return (
        <div className="my-bg">
            {messages.map((m)=>(
                    <Message message={m.message} from={m.from}/>
                )
            )}
        </div>
    )
}
}

export default DiscordBox