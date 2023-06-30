outputData = document.querySelector("#output");

function getApiRandomUser() {
    fetch(`https://randomuser.me/api/`).then(function (response1) {
        return response1.json();
    }).then(function (response2) {
        outputData.innerHTML += `<img src="${response2.results[0].picture.large}">`;
        outputData.innerHTML += ` ${response2.results[0].name.title} ${response2.results[0].name.first} ${response2.results[0].name.last}`;
        outputData.innerHTML += ` ${window.scrollY}`;
        outputData.innerHTML += `<hr>`;
        window.scrollBy({top: 550, behavior: 'smooth'});
    });
}