const input = document.getElementsByTagName("input");
const th = document.getElementsByTagName("th");

document.forms.data.onsubmit = function () {
    event.preventDefault();

    let arr = [];
    for (let i = 0; i < 5; i++) {
        arr[i] = parseFloat(input[i].value);
    }

    const W = arr[3] * arr[4] / arr[0];

    const M = arr[1] + arr[2];
    const V = W * Math.log((M + arr[0]) / M) / 1.5;

    const h1 = V * arr[4] / 2;
    const h = h1 + arr[4] * (V - arr[4] * 4.9);

    arr = [V, W, h1, h];
    for (let i = 0; i < 4; i++) {
        th[i].textContent = Math.round(arr[i]);
    }
};
