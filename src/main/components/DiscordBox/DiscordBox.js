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
        console.log("created new conn")

    }
    sock.onopen = function() {
        console.log('sock.onOpen');
        console.log("Trying to send test");
        sock.send('test');
        isConnected = true;
        setIsConnected(true);
        console.log("Connected")
    };

    sock.onmessage = function(e) {
        if(e.data === "test"){
            console.log("sock.onMessage: test");
        }else if(e.data ==="stay alive"){
            console.log("sock.onMessage: stay alive");
        }else{
            console.log("sock.onMessage: Not test or stay alive");
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
        console.log("sock.onClose")
    };
    const interval = setInterval(() => {
        if(!isConnected){
            console.log("interval- !isConnected")
        }
        console.log("about to try stay alive")
        try {
            console.log(isConnected)
            console.log("trying to send stay alive")
            sock.send("stay alive")

        }catch(err){
            console.log("error sending stay alive")
            console.log("attempting new conn")
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