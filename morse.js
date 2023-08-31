// ASCII 32 to 95, where "" means undefined
const morse = [" ",
    "-.-.--",
    ".-..-.",
    "",
    "...-..-",
    "",
    ".-...",
    ".----.",
    "-.--.",
    "-.--.-",
    "",
    ".-.-.",
    "--..--",
    "-....-",
    ".-.-.-",
    "-..-.",
    "-----",
    ".----",
    "..---",
    "...--",
    "....-",
    ".....",
    "-....",
    "--...",
    "---..",
    "----.",
    "---...",
    "-.-.-.",
    "",
    "-...-",
    "",
    "..--..",
    ".--.-.",
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
    "",
    "",
    "",
    "",
    "..--.-"]

var morse_to_char = {}

// function init_reverse() {
//     ascii = 32
//     for (let code of morse) {
//         morse_to_char[code] = String.fromCharCode(ascii);
//         ascii += 1
//     }
// }

function set_morse_to_char(morse,char){ 
    morse_to_char[morse] = String.fromCharCode(char+32);
}

function init_reverse() {
    morse.forEach(set_morse_to_char)
}

/**
 * The event handler triggered when opening the spreadsheet.
 * @param {Event} e The onOpen event.
 * @see https://developers.google.com/apps-script/guides/triggers#onopene
 */
function onOpen(e) {
  init_reverse() 
}

function morse_decode(morse) {
    let s = ""
    for (let code of morse.split(" ") ) {
        s += morse_to_char[code]
    }
    return s
}

init_reverse() 

function convert_morse_to_ascii(e)
{
    var el_in = document.getElementById("input")
    var el_out = document.getElementById("output")
    //el_out.textContent = el_in.value
    el_out.textContent = morse_decode(el_in.value)
}

//console.log(morse_decode("... --- ...")) // SOS

