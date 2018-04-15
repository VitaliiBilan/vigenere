function code(a) {
    return a.charCodeAt(0) - 65;
} 

function vigenere(text, key, decode, index) {
    key = key.toUpperCase().replace(/[^A-Z]/g, '');
    return text.toUpperCase().replace(/[^A-Z]/g, '').replace(/[A-Z]/g, function(a) {
        return String.fromCharCode(((code(a) + (decode ? 26 - code(key[index++ % key.length]) : 
        code(key[index++ % key.length]))) % 26 + 65));
    });
}

var text = "A web developer is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications.";
var key = 'vitalii';
var enc = vigenere(text, key, false, 0);
var dec = vigenere(enc, key, true, 0);

console.log(enc);
console.log(dec);