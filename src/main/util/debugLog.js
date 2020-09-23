function debugLog(log, error){
    if(process.env.REACT_APP_DEBUG){
        if(!error) {
            console.log(`DEBUG_LOG: ${log}`)
        }else{
            console.error(`DEBUG_ERROR: ${log}`)
        }
    }
}
module.exports = {debugLog}