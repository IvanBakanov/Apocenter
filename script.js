const g = 9.81;

const input = document.getElementsByTagName("input");
const row = document.getElementsByTagName("th");
const rocket = document.getElementsByClassName("rocket-position")[0];
const parachute = document.getElementsByClassName("parachute")[0];

document.forms.data.onsubmit = function () {
    event.preventDefault();

    let arr = [];
    for (let i = 0; i < 5; i++) {
        arr[i] = parseFloat(input[i].value);
    }

    const I = arr[2] * arr[3] / (arr[1] * g) * 1000;

    const Ac = g * (arr[2] / (arr[0] * g) * 1000 - 1);

    const U = Math.pow(I * g * Math.log(arr[0] / (arr[0] - arr[1])), 0.9);

    const cos = Math.cos(arr[4] * Math.PI / 180);

    const Ap = Math.pow(U * cos, 2) * (Ac * cos + g) / (2 * Ac * cos * g);

    arr = [I, Ac, U, Ap];
    for (let i = 0; i < 4; i++) {
        row[i].textContent = Math.round(arr[i]);
    }

    if (Ap >= 5) {
        rocket.classList.add("rocket-motion");
        setTimeout(deployParachute, 3500);
    }

    function deployParachute() {
        parachute.style.visibility = "visible";
        parachute.classList.add("rescue-motion");
    }
};

rocket.onanimationend = function () {
    this.classList.remove("rocket-motion");
    parachute.classList.remove("rescue-motion");
    parachute.style.visibility = "hidden";
};