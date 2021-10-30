const input = document.getElementsByTagName("input");
const th = document.getElementsByTagName("th");

document.forms.data.onsubmit = function () {
    event.preventDefault();

    const Mf = input[0].value;
    const Mc = input[1].value;
    const Mp = input[2].value;
    const P = input[3].value;
    const t = input[4].value;

    const W = P * t / (Mf * 1.5);

    const M = Mc + Mp;
    const V = W * Math.log((Mf + M) / M) * -1;

    const h1 = V * t / 3;
    const h = h1 + t * (V - t * 4.9) / 1.5

    const array = [V, W, h1, h];
    for (let i = 0; i < 4; i++) {
        array[i] = Math.round(array[i]);
    }

    th[0].textContent = array[0];
    th[1].textContent = array[1];
    th[2].textContent = array[2];
    th[3].textContent = array[3];
};