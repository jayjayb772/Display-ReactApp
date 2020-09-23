import SockJS from 'sockjs-client'
import React, {useEffect, useState} from "react";
import Message from "./message/Message.js";
import './DiscordBox.css';
import {debugLog} from "../../util/debugLog.js";

function DiscordBox(props) {
    let [messages, setMessages] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);
    let url = `${process.env.REACT_APP_SOCKJS}`;
    //DUMB BITCH AT LEAST YOU DIDNT PUSH THE ACTUAL URL
    let sock;
    useEffect(() => {
        let new_conn = async function () {
            debugLog("opening new connection", false)
            sock = await new SockJS(url, ['eventsource', 'htmlfile', 'jsonp-polling', 'websocket', 'websocket-raw', 'xhr-polling', 'xhr-streaming'], {heartbeat_delay: 5000});
            debugLog("created new conn", false)
            return sock;
        }
        new_conn().then((sock)=>{

            sock.onopen = function () {
                debugLog('sock.onOpen', false);
                debugLog("Trying to send test", false);
                sock.send('display open test');
                debugLog("Connected", false)
            };

            sock.onmessage = function (e) {
                if (e.data === "test" || e.data === "display open test") {
                    debugLog("sock.onMessage: test", false);
                } else if (e.data === "stay alive") {
                    debugLog("sock.onMessage: stay alive", false);
                } else {
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
                    } catch (err) {
                        debugLog("Issue with message", false)
                        debugLog(err, true)
                    }
                }
            }

            sock.onclose = function () {
                debugLog("sock.onClose", true)
            };
        })
        const interval = setInterval(() => {
            debugLog("about to try stay alive", false)
            try {
                debugLog("trying to send stay alive", false)
                sock.send("stay alive")
                setIsLoaded(true)

            } catch (err) {
                sock.close(200,err)
                debugLog("error sending stay alive", true)
                debugLog("attempting new conn", false)
                setIsLoaded(false)
                new_conn().then((sock)=>{
                    sock.onopen = function () {
                        debugLog('sock.onOpen', false);
                        debugLog("Trying to send test", false);
                        sock.send('display open test');
                        debugLog("Connected", false)
                    };

                    sock.onmessage = function (e) {
                        if (e.data === "test" || e.data === "display open test") {
                            debugLog("sock.onMessage: test", false);
                        } else if (e.data === "stay alive") {
                            debugLog("sock.onMessage: stay alive", false);
                        } else {
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
                            } catch (err) {
                                debugLog("Issue with message", false)
                                debugLog(err, true)
                            }
                        }
                    }

                    sock.onclose = function () {
                        debugLog("sock.onClose", true)
                    };
                })
            }
        }, 15000);
        return () => clearInterval(interval);
    }, [messages]);


    if (isLoaded) {
        return (
            <div className="my-bg">
                {messages.map((m) => (
                        <Message key={m.ts} message={m.message} from={m.from} ts={m.ts}/>
                    )
                )}
            </div>
        )
    } else {
        debugLog("Cant connect to websocket", true)
        return (<div className="my-bg">
            Cannot Connect to Discord Websocket
        </div>)
    }
}

export default DiscordBox