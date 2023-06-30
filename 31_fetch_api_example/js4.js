let i = 0;

outputData = document.querySelector("#output");

function getApiJsonplaceholder() {
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
