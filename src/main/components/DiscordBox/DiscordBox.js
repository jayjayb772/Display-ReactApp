import SockJS from 'sockjs-client'
import React, {useEffect, useRef, useState} from "react";
import Message from "./message/Message.js";
import './DiscordBox.css';
//import {//debugLog} from "../../util///debugLog.js";

function DiscordBox(props) {
    const [messages, setMessages] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    let url = `${process.env.REACT_APP_SOCKJS}`;

    const sock  = useRef(new SockJS(url));

    //DUMB BITCH AT LEAST YOU DIDNT PUSH THE ACTUAL URL
    useEffect(() => {
        let new_conn = function() {
            console.log(url)
            sock.current = new SockJS(url);
        }
            sock.current.onopen = function () {
                console.log(`OPEN`)
                sock.current.send('display open test');
                setIsLoaded(true)
                //console.log(`setting loaded to true ln22, it is ${isLoaded}`)
            };

        sock.current.onmessage = function (e) {
                console.log(`Message`)
                //console.log(`${e.data}`)
                if (e.data === "test" || e.data === "display open test") {
                } else if (e.data === "stay alive") {
                } else {
                    let data = e.data
                    try {
                        let newMsg = JSON.parse(data)
                        console.log(messages)
                        messages.push(newMsg)
                        console.log(messages)
                        if (messages.length > 5) {
                            messages.shift()
                            console.log(messages)
                        }
                        let ex = messages;
                        setMessages([]);
                        setMessages(ex)
                        //setMessages(messages)
                        //console.log(`setting loaded to true, it is ${isLoaded}`)
                    } catch (err) {
                        console.log("issue with message")
                        console.log(err)
                        //debugLog("Issue with message", false)
                        //debugLog(err, true)
                    }
                }
                //console.log(`Messages after receive length: ${messages.length}`)
            }

            sock.current.onclose = function () {
                console.log(`CLOSE`)
                new_conn()
                //debugLog("sock.onClose", true)
            };

        const interval = setInterval(() => {
            console.log(`sock ready state ${sock.readyState}`)
                    //debugLog("trying to send stay alive", false)
                    sock.current.send("stay alive-display-board")
                    setIsLoaded(()=>{return true});
                    console.log(`setting loaded to true ln79, it is ${isLoaded}`)

        }, 15000);
        return () => clearInterval(interval);
    });


    return (
        <div className="my-bg">
            {messages.map(m => (
                    <Message key={m.ts} message={m.message} from={m.from} ts={m.ts} additionalData={m}/>
                )
            )}
        </div>
    );
}

export default DiscordBox