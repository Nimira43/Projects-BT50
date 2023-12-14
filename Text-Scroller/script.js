const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = '“It was like I was in a tunnel. Not only the tunnel under the hotel but the whole circuit was a tunnel. I was just going and going, more and more and more and more. I was way over the limit but still able to find even more.” - Ayrton Senna'
let idx = 1;
let speed = 300 / speedEl.value;

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)
    idx++;
    if(idx > text.length) {
        idx = 1;
    };
    setTimeout(writeText, speed)
};

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)