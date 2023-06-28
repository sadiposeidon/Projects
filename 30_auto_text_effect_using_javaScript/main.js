const heading_element = window.document.querySelector("#heading");

const content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry 😍👏";

let i = 0;

function writeText() {
    if (i > content.length){
        i = 0;
    } else {
        heading_element.innerHTML = content.slice(0, i);
        i++;
    }
}

setInterval(writeText, 80);