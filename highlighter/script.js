var selectedNum = 0;

function checkInput(){
    // reseting the color
    if(selectedNum>0){
        var selecedElement = document.getElementById("num"+selectedNum);
        selecedElement.style.backgroundColor = "transparent";
        var msg = document.getElementById("err-message");
        msg.style.display = "none";
    }

    var value = document.getElementById("value").value;
    
    if(value > 0 && value <10){
        var tabElement = document.getElementById("num"+value);
        tabElement.style.backgroundColor = "green";
        selectedNum = value;
    }else{
        var msg = document.getElementById("err-message");
        msg.style.display = "block";
    }
}

