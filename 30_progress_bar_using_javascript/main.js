const progress_done = document.querySelector(".progress_done");
const heading = document.querySelector("#heading");
const content = "Successful operation 😍👏";

let i = 0, x = 0;

function _progress_increase() {
    if (i != 99) {
        i++;
        progress_done.innerHTML = `${i + 1}%`;
        progress_done.style.width = `${i * 4}px`;
        progress_done.style.opacity = i;
    }

    if (i == 99) {
        heading.innerHTML = content.slice(0, x);
        x++;
    }
}

setInterval(_progress_increase, 80);

// setTimeout, belirli bir gecikme süresi sonunda bir kez çalışan bir işlevi tetiklerken,
// setInterval, belirli bir gecikme süresiyle tekrarlanan periyodik işlev çağrıları gerçekleştirir