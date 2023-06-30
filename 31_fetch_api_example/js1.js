document.querySelector("#button1").addEventListener("click", getTextFile);

outputData = document.querySelector("#output");

function getTextFile() {
    fetch("./textFile.txt")
        .then(function (response1) {
            return response1.text();
        }).then(function (response2) {
        outputData.innerHTML += `${response2}<br />`;
    }).catch(function (error) {
        console.log(error);
    });
}