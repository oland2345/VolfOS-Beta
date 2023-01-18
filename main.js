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
    document.getElementById("SearchBTN").addEventListener("click", function(){Createwindow(WidnowName= "Search World - 1.10.3", height=720, width=1280, content="Search")}, false)
    document.getElementById("SettingsBTN").addEventListener("click", function(){Createwindow(WidnowName= "Settings", height=700, width=400, content="Settings")}, false)
    document.getElementById("NotN").addEventListener("click", function(){document.getElementById("AskYN").style.display="none"}, false)
    document.getElementById("NotY").addEventListener("click", function(){Answare("ShutD")})
    document.getElementById("ShutdownBTN").addEventListener("click", function(){CreateNotification("Shutdown", "Are you sure you wan't to shutdown, all unsaved data could be lost")}, false)
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

var CloseWindowStyle = "height: 20px;width: 20px;position: absolute;right: 10px;top: 10px;"
var MinWindowStyle = "height: 20px;width: 20px;position: absolute;right: 40px;top: 10px;"
var WindowNameStyle = "left: 10px;position: absolute;top: -10px;color: white;font-size: 20px;font-weight: bold;font-family: 'arial'"
var windowStyle = "position: absolute;background-color: white;height: 300px;width: 300px; "
var WindowTitleBarStyle = "background-color: rgb(44, 44, 55);height: 40px; width: 100%;top:0;border-radius: 5px; "
var HitboxStyle = "background-color: transparent;width: 70%; height: 40px; position: absolute;z-index: 10;cursor:grab;"


const Parent = document.getElementById("WindowHolder");
var windowID = 0;



function Createwindow(WidnowName, height, width, content){
    windowID++;
    windowStyle = "position: absolute;background-color: grey;height: "+(height+60)+"px;width:" + width  +"px;border-radius: 20px;"


    Parent.appendChild(Object.assign(document.createElement("div"),{id:"Window"+windowID})).appendChild(Object.assign(document.createElement("div"),{id:"WindowTitle"+windowID})).appendChild(Object.assign(document.createElement("div"),{id:"WindowHitBox"+windowID}));
    var NodeObj = "WindowTitle"+windowID;
    let CurWindowTitle = document.getElementById(NodeObj);
    
    CurWindowTitle.appendChild(Object.assign(document.createElement("p"),{id:"WindowName" + windowID}))
    CurWindowTitle.appendChild(Object.assign(document.createElement("img"),{id:"CloseWindow"+windowID}))
    CurWindowTitle.appendChild(Object.assign(document.createElement("img"),{id:"MinWindow"+windowID}))
    
    //Contet.load fun(){}
    if(content == "Search"){
        CurWindowTitle.appendChild(Object.assign(document.createElement("img"),{id:"Home"+windowID}))
        CurWindowTitle.appendChild(Object.assign(document.createElement("webview"),{id:"Map" + windowID}));
        document.getElementById("Map" + windowID).style = "height : " + height  + "px; width:" + width + "px ; padding: 0; margin: 0;position:absolute; top: 40px;"; 
        document.getElementById("Map" + windowID).src = "https://cse.google.com/cse?cx=55dd875e68db14d0a#gsc.tab=0";
        document.getElementById("Home" + windowID).style = "height: 20px;width: 20px;position: absolute;right: 70px;top: 10px;"
        document.getElementById("Home" + windowID).src = "visuals/home.png";
        document.getElementById("Home" + windowID).addEventListener("click", function(){GoHome(windowID)}, false);
    }
    





    //Innerhtml and srcs
    document.getElementById("CloseWindow" + windowID).src = "visuals/remove.png";
    document.getElementById("MinWindow" + windowID).src = "visuals/mini.png";
    document.getElementById("WindowName"+ windowID).innerText = WidnowName;
    


    //Styles :D
    document.getElementById("Window" + windowID).style = windowStyle;
    document.getElementById("WindowTitle" + windowID).style = WindowTitleBarStyle;
    document.getElementById("WindowHitBox"+windowID).style = HitboxStyle;
   
    document.getElementById("CloseWindow" + windowID).style = CloseWindowStyle;
    document.getElementById("MinWindow" + windowID).style = MinWindowStyle;
    
    document.getElementById("WindowName" + windowID).style =WindowNameStyle;
    dragElement(document.getElementById("WindowHitBox", windowID));

    

   /* */

    //EVENTLis
    document.getElementById("MinWindow" + windowID).addEventListener("click", function(){MinsizeWindow(windowID)}, false);    
    document.getElementById("CloseWindow" + windowID).addEventListener("click", function(){CloseWindow(windowID)}, false); 

}


function GoHome(el){
    document.getElementById("Map" + el).src = "https://cse.google.com/cse?cx=55dd875e68db14d0a#gsc.tab=0";
    
}

function CloseWindow(el){
    let ParentNode = document.getElementById("WindowHolder");
    let ChildeNode = document.getElementById("Window" + el);
    let removeChild = ParentNode.removeChild(ChildeNode);
}
function MinsizeWindow(el) {
    document.getElementById("Window" + el).setAttribute("hidden", true);
}
function OpenCloseds(el) {
  let numb = document.getElementById("WindowHolder").childElementCount;
  document.getElementById("Window" + el).setAttribute("hidden", false);
}






function dragElement(elmnt, index) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt   + index)) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt  + index).onmousedown = dragMouseDown;
  } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
}

function dragMouseDown(e) {
      e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
}

function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
}

function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 13 && document.getElementById("PassCode").value == Password) {
        Login();
    }
   
});