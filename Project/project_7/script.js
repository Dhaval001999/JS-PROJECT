let intervalId
const sayDate = function(str){
        console.log(str, Date.now());
    }
    const start = () => {
       if(!intervalId){
        intervalId = setInterval(sayDate, 1000, "Dhaval Desai")
       } 
    }

    const stop = () => {
        clearInterval(intervalId)
        intervalId = null;
    }
    document.querySelector('#start').addEventListener('click', start)
    document.querySelector('#stop').addEventListener('click', stop)
    