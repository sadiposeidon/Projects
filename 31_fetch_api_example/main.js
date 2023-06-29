// console.log(window);
// console.log(this);
// console.log(fetch);

// https://jsonplaceholder.typicode.com/todos
// https://api.github.com/users
// https://randomuser.me/api/

let i = 0;

document.querySelector("#button1").addEventListener("click", getTextFile);
document.querySelector("#button2").addEventListener("click", getJsonFile);
document.querySelector("#button3").addEventListener("click", getApiFile);

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

function getApiFile() {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(function (response1) {
            return response1.json();
        }).then(function (response2) {

        response2.map((value, key) => {
            outputData.innerHTML += `
                <b>
                    key: (${key}) | 
                    userId: ${value.userId} | 
                    id: ${value.id} | 
                    title: ${value.title} | 
                    completed: ${value.completed}
                </b><br />`;
        });

    });
}

function getApiContentFileInterval() {
    i++;

    fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
        .then(function (response1) {
            return response1.json();
        }).then(function (response2) {
        return response2;
    }).then(function (response3) {
        outputData.innerHTML += `
            <b>
                userId: ${response3.userId} | 
                id: ${response3.id} | 
                title: ${response3.title} | 
                completed: ${response3.completed}
            </b><br />`;
    });
}

// setInterval(getApiContentFileInterval, 100);

function getGithubApiContentFileInterval() {
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
// setInterval(getGithubApiContentFileInterval, 3000)


// querySelector genel bir CSS seçici kullanarak bir HTML belgesindeki ilk eşleşen öğeyi seçerken
// getElementById bir HTML belgesinde belirli bir kimlik (id) değerine sahip olan öğeyi seçer

// Promise, asenkron işlemleri temsil eden ve gelecekte tamamlanacak bir değeri veya hata durumunu temsil eden bir JavaScript nesnesidir.