var seq = 0;
seq = Number(seq);

document.getElementById("btn1").onclick = function() {
    if (seq == 0) {
        seq++;
    }
    else {
        seq = 0;
    }
}

document.getElementById("btn2").onclick = function() {
    if (seq == 1) {
        seq++;
    }
    else {
        seq = 0;
    }
}
    
document.getElementById("btn3").onclick = function() {
    if (seq == 2) {
        seq++;
    }
    else {
        seq = 0;
    }
}

document.getElementById("btn4").onclick = function() {
    if (seq == 3) {
        seq++;
    }
    else {
        seq = 0;
    }
}

document.getElementById("btn5").onclick = function() {
    if (seq == 4) {
        seq++;
    }
    else {
        seq = 0;
    }
}

document.getElementById("btn6").onclick = function() {
    if (seq == 5) {
        seq++;
    }
    else {
        seq = 0;
    }
}

document.getElementById("btn7").onclick = function() {
    if (seq == 6) {
        seq++;
    }
    else {
        seq = 0;
    }
}

document.getElementById("btn8").onclick = function() {
    if (seq == 7) {
        seq++;
    }
    else {
        seq = 0;
    }
}

document.getElementById("btn9").onclick = function() {
    if (seq == 8) {
        document.getElementById("code").innerHTML = "0101101011";
    }
    else {
        seq = 0;
    }
}
