console.log('operativo');

document.getElementById('Submit').onclick = function(){

    var passcode = document.getElementById('Passcode').value;
    console.log(passcode);

    if (passcode == 'LETTHEGAMEBEGIN'){
        document.getElementById('Answer').innerText = 'Amazing';
        window.location.href = "https://stackoverflow.com";

    }
    else if(passcode == ''){
        document.getElementById('Answer').innerText = 'null';
    }
    else{
        document.getElementById('Answer').innerText = 'Wrong';
    }
}
    


