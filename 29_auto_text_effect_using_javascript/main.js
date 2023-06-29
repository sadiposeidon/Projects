const heading = window.document.querySelector("#heading");

const content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry 😍👏";

let i = 0;

function _writeText() {
    if (i > content.length) {
        i = 0;
    } else {
        heading.innerHTML = content.slice(0, i);
        i++;
    }
}

setInterval(_writeText, 80);