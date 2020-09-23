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
        sock =  new SockJS(url);
        console.log("hello new conn")

    }
    const interval = setInterval(() => {
        if(!isConnected){
            console.log(isConnected)
            new_conn()
            console.log("hello interval")
        }
        //sock.send('alive')
        console.log('Stay alive')
        console.log('Stay alive message!!');
        sock.send("test")
    }, 10000);
    return () => clearInterval(interval);
}, []);

    sock.onopen = function() {
        console.log('open');
        console.log("OPENED CONNECTION")
        sock.send('test');
        isConnected = true;
        setIsConnected(true);
        console.log("hello open")
    };

    sock.onmessage = function(e) {
        if(e.data === "test"){
            console.log("hello message test")
        }else {
            console.log("hello not test")
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
    };
    sock.onclose = function() {
        isConnected = false;
        setIsConnected(false)
        console.log("hello on close")
    };


if(isLoaded){
    return (
        <div className="my-bg" >
            {messages.map((m)=>(
                <Message key={m.ts} message={m.message} from={m.from} ts={m.ts}/>
                )
            )}
        </div>
    )}else{
    return (
        <div className="my-bg">
            {messages.map((m)=>(
                    <Message key={m.ts} message={m.message} from={m.from} ts={m.ts}/>
                )
            )}
        </div>
    )
}
}

export default DiscordBox