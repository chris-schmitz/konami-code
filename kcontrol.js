document.write('<span id="kdiv"><table id="ktable"><tr><td>•</td><td>•</td><td>•</td><td>•</td><td>•</td><td>•</td><td>•</td><td>•</td><td>•</td><td>•</td><td>•</td></tr></table></span>');

var currentCode;
var fullCode;
var indicatorRow;

document.onkeydown = function (event){
        kcontrol(event.keyCode);
};


var init = setInterval(function (){
    if (document.readyState == "complete"){
        styleKDiv();
        currentCode  = Array();
        fullCode     = Array(38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13);
        indicatorRow = document.getElementById("ktable").getElementsByTagName("tr");
        clearInterval(init);
    }
}, 10);

function styleKDiv(){
    var kdiv = document.getElementById("kdiv");
    kdiv.style.position = "fixed";
    kdiv.style.bottom = "3px";
    kdiv.style.right = "3px";

    var ktable = document.getElementById("ktable");
    ktable.style.backgroundColor = "#242424";
    ktable.style.color = "white";
    ktable.style.border = "1px solid #242424";
    ktable.style.borderRadius = "5px";
}

function kcontrol(key){
    currentCode.push(key);
    if (currentCode[currentCode.length - 1] != fullCode[currentCode.length - 1]){
        currentCode = [];
        clearIndicator();
    } else if (currentCode.length == fullCode.length) {
        updateIndicator(currentCode.length - 1);
       
       // This should be whatever javascript method or function you want fired on a successful code completion.
        awwwYeah();

        currenCode = [];
        clearIndicator();
    } else {
        updateIndicator(currentCode.length - 1);
    }
}

function updateIndicator(currentIndicatorPosition){
    var currentIndicator = indicatorRow[0].children[currentIndicatorPosition].style.color="red";
}

function clearIndicator(){
    var currentIndicator;
    for (i = 0; i < fullCode.length ; i++ ){
        currentIndicator = indicatorRow[0].children[fullCode.length - 1 - i];
        currentIndicator.style.color="white";
    }

}

function awwwYeah(){
    var body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = "green";
    body.style.color = "white";
}
