function debugLog(log, error){
    if(process.env.REACT_APP_DEBUG === true){
        if(!error) {
            console.log(`DEBUG_LOG: ${log}`)
        }else{
            console.error(`DEBUG_ERROR: ${log}`)
        }
    }else if(error){
        sendError(log).then(()=>{
            return;
        })
    }
}


async function sendError(log){
    try {
    const err = {
        "ts":Date.now(),
        "err":log
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'},
        body: JSON.stringify(err)
    };
    console.log('Sending Error')
        fetch(`${process.env.REACT_APP_ORCHURL}/discord/display-error`, requestOptions)
            .then(data => {
                console.log(data)
                return;
            });
    console.log("fetched")
    }catch(err){
        console.error("ERROR THROWING ERROR TO DISCORD")
        console.error(err)
        setTimeout( function ( ) { alert( "ERROR THROWING ERROR" ); }, 10000 );
    }
}
module.exports = {debugLog}