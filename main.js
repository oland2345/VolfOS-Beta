FullyLoaded()
var Password = "lol"
async function FullyLoaded(){
    await new Promise(r => setTimeout(r, 7000));
    document.getElementById("LoadingThing").style.animation = "OpenSignIn 5s";
    await new Promise(r => setTimeout(r, 3000));
    document.querySelector("body").style.backgroundColor = "teal";
    document.getElementById("LoadingScr").style.display = "none";
    document.getElementById("LoginForm").style.animation = "fadeIn 1s"
    
}
document.addEventListener('DOMContentLoaded', function() {  
    addEventListener('mousemove', MoveWindow, false);
    document.getElementById("CloseWindow").addEventListener("click", Close, false)
    document.getElementById("HitBox").addEventListener("click", MakeMovebl, false)
    document.getElementById("SettingsBTN").addEventListener("click", CreateWindow, false)
    document.getElementById("NotN").addEventListener("click", function(){document.getElementById("AskYN").style.display="none"}, false)
    document.getElementById("NotY").addEventListener("click", function(){Answare("ShutD")})
    document.getElementById("ShutdownBTN").addEventListener("click", function(){CreateNotification("Shutdown", "Are you sure you wan't to shutdown, all unsaved data could be lost")}, false)
});

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 13 && document.getElementById("PassCode").value == Password) {
        Login();
    }
});

async function Login(){
    document.getElementById("PassCode").value ="";
    document.getElementById("LoginForm").style.animation = "Close 0.7s";
    await new Promise(r => setTimeout(r, 650));
    document.getElementById("LoginForm").style.display = "none";
    document.getElementById("MainDesk").style.display = "block";
    document.getElementById("MainDesk").style.animation = "fadeIn 1s"
}



function CreateNotification(Quset,NotText){
    document.getElementById("AskYN").style.display = "flex";
    document.getElementById("Qustion").innerText =Quset;
    document.getElementById("Description").innerText =NotText;
}
async function Answare(typ){
    if(typ="ShutD"){
        document.querySelector("body").style.cursor = "none";
       
        await new Promise(r => setTimeout(r, 4500));
        window.close();
    }
}


//Window

let canMove = false;
function CreateWindow(el){
    document.getElementById("window").style.animation = "";
    document.getElementById("window").style.display = "block";
    
}

  



function MakeMovebl(el){
    if(canMove){
        canMove = false;
    }else{
        canMove = true;
        
    }
}
async function Close(el){
    document.getElementById("window").style.animation = "Close 0.7s";
    await new Promise(r => setTimeout(r, 650));
    document.getElementById("window").style.display ="none";
    
    
}
function MoveWindow(p, el){

    var offset = -30;
    if(canMove){
        document.getElementById("window").style.transform = "translate("+(p.pageX + offset)  + "px," + (p.pageY + offset)+"px"; 
    }
    
}