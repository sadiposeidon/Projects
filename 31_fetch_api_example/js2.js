document.querySelector("#button2").addEventListener("click", getJsonFile);

outputData = document.querySelector("#output");

function getJsonFile() {
    fetch("./article.json")
        .then(function (response1) {
            return response1.json();
        }).then(function (response2) {

        outputData.innerHTML = "<ul>";
        response2.forEach((value, key) => {
            outputData.innerHTML += `<li><b><a href="#">${key}. ${value.title} - ${value.body}</a></b></li>`;
        });
        outputData.innerHTML += "</ul>";

    })

        .catch(function (error) {
            console.log(error);
        });
}