function tombolYes() {
    document.getElementById("pic1").style.display="inline";
    document.getElementById("jdlbsr").style.display="none";
    document.getElementById("question").style.display="none";
    document.getElementById("no1").style.display="none";
    document.getElementById("yes1").style.display="none";
    return;
}

function tombolYes2() {
    document.getElementById("pic2").style.display="inline";
    document.getElementById("jdlbsr").style.display="none";
    document.getElementById("ygbener").style.display="none";
    document.getElementById("yakin").style.display="none";
    document.getElementById("question").style.display="none;";
    document.getElementById("no2").style.display="none";
    document.getElementById("no3").style.display="none";
    document.getElementById("yes2").style.display="none";
    return;
}

function tombolNo() {
    
    document.getElementById("yakin").innerHTML = "Yakin Dek?";
    document.getElementById("question").style.display = "none";
    document.getElementById("yes1").style.display ="none";
    document.getElementById("no1").style.display = "none";
    document.getElementById("yes2").style.display = "inline";
    document.getElementById("no2").style.display = "inline";
    return;
}

function tombolNo2() {
    document.getElementById("yakin").style.display = "none";
    document.getElementById("ygbener").innerHTML ="Yang Benerrr ?";
    document.getElementById("no2").style.display = "none";
    document.getElementById("no3").style.display = "inline";
    return;

}
function tombolNo3() {
    document.getElementById("gif1").style.display="inline";
    document.getElementById("jdlbsr").style.display="none";
    document.getElementById("ygbener").style.display="none";
    document.getElementById("yakin").style.display="none";
    document.getElementById("question").style.display="none;";
    document.getElementById("no2").style.display="none";
    document.getElementById("no3").style.display="none";
    document.getElementById("yes2").style.display="none";
    document.getElementById("yes3").style.display="inline";
    return;
}

function tombolYes3() {
    document.getElementById("gif2").style.display ="inline";
    document.getElementById("gif1").style.display ="none";
    document.getElementById("yes3").style.display ="none";
}
