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

function set_morse_to_char(morse, char) {
    morse_to_char[morse] = String.fromCharCode(char + 32)
}

function morse_init() {
    morse.forEach(set_morse_to_char)
}

const el_in = document.getElementById("input")
const el_out = document.getElementById("output")
el_in.addEventListener("input", convert_morse_to_ascii)
el_out.addEventListener("input", convert_ascii_to_morse)

function morse_decode(morse) {
    const rx = /[^.-]/g
    morse = morse.replace(rx, " ")

    let s = ""
    for (let code of morse.split(" ")) {
        if (code.length) {
            let m = morse_to_char[code]
            if (m) s += m
        }
    }
    return s
}

function morse_encode(ascii) {
    let s = ""
    for (let ch of ascii.toUpperCase().split("")) {
        if (ch >= ' ' && ch <= String.fromCodePoint(95)) {
            s += morse[ch.codePointAt(0)-32] + " "
        }
    }
    return s;
}

function convert_morse_to_ascii(e) {
//    var el_in = document.getElementById("input")
    var el_out = document.getElementById("output")
    el_out.textContent = morse_decode(e.target.value);
}

function convert_ascii_to_morse(e) {
    var el_out = document.getElementById("input")
    el_out.textContent = morse_encode(e.target.value);
    
}

// function input_changed(e) { 
//     var el_out = document.getElementById("output")
//     el_out.textContent = morse_decode(e.target.value);
// }

//morse_init()

//console.log(morse_decode("... --- ...")) // SOS

