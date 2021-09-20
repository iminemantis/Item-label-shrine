function accord(){
    if (document.getElementById("mbl").style.display=="flex"){
        document.getElementById("mbl").style.paddingTop="0";
        document.getElementById("mbl").style.display="none";
        document.getElementById("page").style.marginTop="5vh";
    }else{
        document.getElementById("mbl").style.paddingTop="4vh";
        document.getElementById("mbl").style.display="flex";
        document.getElementById("page").style.marginTop="16vh";
    }
}