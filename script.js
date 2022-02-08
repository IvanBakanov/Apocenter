const g = 9.81;

const input = document.getElementsByTagName("input");
const th = document.getElementsByTagName("th");
const div = document.getElementById("rocket-container");

document.forms.data.onsubmit = function () {
    event.preventDefault();

    let arr = [];
    for (let i = 0; i < 5; i++) {
        arr[i] = parseFloat(input[i].value);
    }

    const W = arr[2] * arr[3] * 1000 / arr[1];

    const V = Math.pow(W * Math.log(arr[0] / (arr[0] - arr[1])), 0.9);

    function h_t(u, t) {
        return t * (u * Math.sin((90 - arr[4]) * Math.PI / 180) - g * t / 2);
    }
    const h1 = h_t(V / 1.5, arr[3]);

    const h = h1 + h_t(V, Math.pow(V, 0.9) / g);

    arr = [V, W, h1, h];
    for (let i = 0; i < 4; i++) {
        th[i].textContent = Math.round(arr[i]);
    }

    div.classList.add("rocket");
};

div.onanimationend = function () {
    this.classList.remove("rocket");
};
