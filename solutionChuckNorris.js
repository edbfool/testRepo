var MESSAGE = readline();

// Write an action using print()
// To debug: printErr('Debug messages...');
var message = '';
var char = '';
var bin = '';
for (var i = 0; i < MESSAGE.length; i++){
    char = MESSAGE[i];
    bin = char.charCodeAt().toString(2);
    if (bin.length < 7){
        bin = (bin[0] ==="O") ? bin+"0" : "0"+bin;
    }
    message = message + bin;
}
    


var current = '';
var chuck = '';

for (var i = 0; i < message.length; i++){
    if (message[i] != current){
        current = message[i];
        chuck = ( current === '1') ? chuck +" 0 0" : chuck +" 00 0";
    } else {
        chuck = chuck +"0";
    }
}

var lengthen = chuck.length;
var chuckie = chuck.substr(1, lengthen);

print(chuckie);