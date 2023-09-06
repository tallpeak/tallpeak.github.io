// ASCII 32 to 95, where "" means undefined
const morseCodes = [ String.fromCharCode(128 + 32 ), "-.-.--", ".-..-.", "", "...-..-", "", ".-...", ".----.", "-.--.", "-.--.-",
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
//         morse_to_char[code] = String.fromCharCode(ascii++);
//     }
// }

function set_morse_to_char(morse, char) {
    morse_to_char[morse] = String.fromCharCode(char + 32)
}

function morse_init() {
    morseCodes.forEach(set_morse_to_char)
}

const el_in = document.getElementById("input")
const el_out = document.getElementById("output")
el_in.addEventListener("input", convert_morse_to_ascii)
el_out.addEventListener("input", convert_ascii_to_morse)

function morse_decode(morse) {
    // translate non-symbol characters to spaces
    const rx = /[^.-]/g
    morse = morse.replace(rx, " ")
    // translate multiple spaces to a single space:
    const spaces = / +/g
    morse = morse.replace(spaces," ~ ")

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
            s += morseCodes[ch.codePointAt(0)-32] + " "
        }
    }
    return s;
}

function convert_morse_to_ascii(e) {
    var el_out = document.getElementById("output")
    el_out.value = morse_decode(e.target.value);
}

function convert_ascii_to_morse(e) {
    var el_out = document.getElementById("input")
    el_out.value = morse_encode(e.target.value);
    
}
 
//morse_init()

//console.log(morse_decode("... --- ...")) // SOS

// play_morse from https://codepen.io/cople/pen/zZLJOz

function play_morse(morse, dot_length) {
    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var ctx = new AudioContext();
    var dot = dot_length * 0.001 || 1.2 / 15;

    var t = ctx.currentTime;

    var oscillator = ctx.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.value = 600;

    var gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0, t);

    morse.split("").forEach(function(letter) {
        switch(letter) {
            case ".":
                gainNode.gain.setValueAtTime(1, t);
                t += dot;
                gainNode.gain.setValueAtTime(0, t);
                t += dot;
                break;
            case "-":
                gainNode.gain.setValueAtTime(1, t);
                t += 3 * dot;
                gainNode.gain.setValueAtTime(0, t);
                t += dot;
                break;
            case " ":
                t += 7 * dot;
                break;
        }
    });

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start();

    return false;
}