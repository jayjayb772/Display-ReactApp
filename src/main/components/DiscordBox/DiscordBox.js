import SockJS from 'sockjs-client'
import React, {useEffect, useState} from "react";
import Message from "./message/Message.js";
import './DiscordBox.css';

function DiscordBox(props){
    let [messages,setMessages] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);
    let url = `${process.env.REACT_APP_SOCKJS}`;
    //DUMB BITCH AT LEAST YOU DIDNT PUSH THE ACTUAL URL
    let sock = new SockJS(url);
    let [isConnected, setIsConnected] = useState(false);


useEffect(()=>{
    let new_conn = function(){
        console.log("opening new connection")
        sock =  new SockJS(url, null, {timeout:5000000});
        console.log("hello-new conn")

    }
    sock.onopen = function() {
        console.log('open');
        console.log("OPENED CONNECTION")
        sock.send('test');
        isConnected = true;
        setIsConnected(true);
        console.log("hello-open")
    };

    sock.onmessage = function(e) {
        if(e.data === "test"){
            console.log("hello-message test")
        }else {
            console.log("hello-not test")
            let data = e.data
            console.log('received message')
            try {
                messages.push(JSON.parse(data))
                if (messages.length > 5) {
                    console.log('messages greater than 4')
                    messages.shift()
                }
                setMessages(messages)
                setIsLoaded(false)
                setIsLoaded(true)
            }catch(err){
                console.log("Issue with message")
                console.log(err)
            }
        }
    }

    sock.onclose = function() {
        isConnected = false;
        setIsConnected(false)
        console.log("hello-on close")
    };
    const interval = setInterval(() => {
        if(!isConnected){
            console.log("hello-interval- not connected")
        }
        //sock.send('alive')
        console.log('Stay alive')
        console.log('Stay alive message!!');
        try {
            console.log(isConnected)
            console.log("trying to send")
            sock.send("test")

        }catch(err){
            console.log("error sending")
            new_conn()
        }
        }, 15000);
    return () => clearInterval(interval);
}, []);

    return (
        <div className="my-bg">
            {messages.map((m)=>(
                    <Message key={m.ts} message={m.message} from={m.from} ts={m.ts}/>
                )
            )}
        </div>
    )
}

export default DiscordBox