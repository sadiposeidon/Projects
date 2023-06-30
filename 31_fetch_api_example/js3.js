document.querySelector("#button3").addEventListener("click", getApiFile);

outputData = document.querySelector("#output");

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