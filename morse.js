// ASCII 32 to 95, where "" means undefined
const morse = [ " ", "-.-.--", ".-..-.", "", "...-..-", "", ".-...", ".----.", "-.--.", "-.--.-",
                "", ".-.-.", "--..--", "-....-", ".-.-.-", "-..-.", "-----", ".----", "..---", "...--",
                "....-", ".....", "-....", "--...", "---..", "----.", "---...", "-.-.-.", "", "-...-",
                "", "..--..", ".--.-.", ".-", "-...", "-.-.", "-..", ".", "..-.", "--.",
                "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-",
                ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", "",
                "", "", "", "..--.-" ]

var morse_to_char = {}

// function init_reverse() {
//     ascii = 32
//     for (let code of morse) {
//         morse_to_char[code] = String.fromCharCode(ascii);
//         ascii += 1
//     }
// }

//const input = document.querySelector("input");
const input = document.getElementById("input")
input.addEventListener("input", input_changed)

function set_morse_to_char(morse, char) {
    morse_to_char[morse] = String.fromCharCode(char + 32)
}

function init_reverse() {
    morse.forEach(set_morse_to_char)
}

function morse_decode(morse) {
    let s = ""
    for (let code of morse.split(" ")) {
        if (code.length) {
            let m = morse_to_char[code]
            if (m) s+=m
        }
    }
    return s
}

init_reverse()

function convert_morse_to_ascii(e) {
    var el_in = document.getElementById("input")
    var el_out = document.getElementById("output")
    el_out.textContent = morse_decode(el_in.value)
}

function input_changed(e) { 
    var el_out = document.getElementById("output")
    el_out.textContent = morse_decode(e.target.value);
}

//console.log(morse_decode("... --- ...")) // SOS

