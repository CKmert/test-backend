
function logDataInInterval(interval) {

setInterval(() => {
    console.log("Hallo!")
}, 2000);
}

function setTimeOutwithLog(interval) {
    setTimeout(()  => {
        console.log("HELOOOO")
    }, 2300)
}

// exports.logData = logDataInInterval;

// exports.logDataInInterval = logDataInInterval

// export {setTimeOutwithLog, logDataInInterval}