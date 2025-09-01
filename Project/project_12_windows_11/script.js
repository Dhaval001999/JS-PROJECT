let taskBar = document.getElementsByClassName("taskbar")[0]
let startMenu = document.getElementsByClassName("startmenu")[0]

taskBar.addEventListener('click', ()=>{
    if(startMenu.style.bottom == "41px"){
        startMenu.style.bottom = "-655px"
    }else{
        startMenu.style.bottom = "41px"
    }
})
